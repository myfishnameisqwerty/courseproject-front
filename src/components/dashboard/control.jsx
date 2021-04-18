import firebaseDataProvider from "ra-data-firebase-client";
import { UserCreate, UserList, UserEdit} from "./users";
import { ProductCreate, ProdutcsList, ProductEdit} from "./products";
import { PostCreate, PostEdit, PostsList} from "./posts";
import {ListOrders, EditOrder, ShowOrder} from "./orders"

import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, fetchUtils } from "react-admin";
import createAdminStore from "../../createAdminStore";
import firebase from "../../firebase";
import { updateUserNavbar } from '../../actions/actions';
import { connect } from 'react-redux';
import "firebase/database";
import "./control.css";
import simpleRestProvider from 'ra-data-simple-rest';
import Dashboard from './dashboard'
import { TagCreate, TagEdit, TagsList } from "./tags";
import { UserRolesList, UserRoleEdit, UserRoleCreate } from "./userRoles";

const settings = {imagekey: "images", filekey: "files"}
const httpClient = (url, options = {}) => {

    options.user = {
        authenticated: true,
        token:  `bearer ${localStorage.getItem("home-food-AT")}`
    }
    
    return fetchUtils.fetchJson(url, options)
}
const dataProvider = simpleRestProvider(process.env.REACT_APP_SERVER_ADDRESS, httpClient)
const convertFileToBase64 = file =>

    new Promise((resolve, reject) => {

        const reader = new FileReader();
        
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
 });

const myDataProvider = {

    ...dataProvider,

    create: (resource, params) => {

        // fallback to the default implementation
        if (resource !== 'products' && !params.data.pictures) {
            
            return dataProvider.create(resource, params);
        }

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map((picture64, i) => ({
                    src: picture64,
                    title: `${params.data.name}-${(new Date()).getTime()}${i}.${params.data.pictures[i].title.split(/\.(?=[^\.]+$)/)[1]}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
    },
    update: (resource, params) => {

        // fallback to the default implementation
        if (resource !== 'products' || !params.data.pictures) {
            
            return dataProvider.update(resource, params);
        }

        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.pictures.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.pictures.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            .then(base64Pictures =>
                base64Pictures.map((picture64, i) => ({
                    src: picture64,
                    title: `${params.data.name}-${(new Date()).getTime()}${i}.${params.data.pictures[i].title.split(/\.(?=[^\.]+$)/)[1]}`,
                }))
            )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        pictures: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
    }
};
const history = createHashHistory();
const Control = (props) => {
  const role = props.userRole
  
  return (
  <Provider store={createAdminStore({history})}>
    <Admin dashboard={Dashboard} history={history} dataProvider={myDataProvider}>
    <Resource
        name="orders" list={ListOrders} edit={EditOrder} show={ShowOrder}
      />
      {/* {role === 'admin'? */}
      <Resource
        name="users"
        create={UserCreate}
        list={UserList}
        edit={UserEdit}
      />
      <Resource options={{ label: 'User roles' }} name="userRoles" list={UserRolesList} edit={UserRoleEdit} create={UserRoleCreate}/>
      {/* :<React.Fragment/>} */}
      {/* {role === 'admin' || role === 'seller'? */}
      <Resource
      name="products"
      create={ProductCreate}
      list={ProdutcsList}
      edit={ProductEdit}
    />
    <Resource name="tags" options={{ label: 'Products tags' }} list={TagsList} edit={TagEdit} create={TagCreate}/>
    {/* :<React.Fragment/>} */}
      {/* {role === 'admin' || role === 'seller'? */}
      <Resource
        name="posts"
        create={PostCreate}
        list={PostsList}
        edit={PostEdit}
      />
      {/* :<React.Fragment/>} */}
      
      
      
    </Admin>
    
  </Provider>
  
)};
const mapStateToProps = state => ({
  userName: state.global.userName,
  userRole: state.global.userRole
})
export default connect(mapStateToProps, { updateUserNavbar })(Control)
