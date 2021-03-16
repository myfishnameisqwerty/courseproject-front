import firebaseDataProvider from "ra-data-firebase-client";
import { UserCreate, UserList, UserEdit} from "./users";
import { ProductCreate, ProdutcsList, ProductEdit} from "./products";
import { PostCreate, PostEdit, PostsList} from "./posts";
import {ListOrders, EditOrder, ShowOrder} from "./orders"
import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import createAdminStore from "../../createAdminStore";
import firebase from "../../firebase";
import { updateUserNavbar } from '../../actions/actions';
import { connect } from 'react-redux';
import "firebase/database";
import "./dashboard.css";


const settings = {imagekey: "images", filekey: "files"}
const dataProvider = firebaseDataProvider(firebase, settings);

const history = createHashHistory();
const Dashboard = (props) => {
  const role = props.userRole
  return (
  <Provider
    store={createAdminStore({
      dataProvider,
      history,
    })}
  >
    <Admin history={history} dataProvider={dataProvider}>
      
      {role === 'admin'?<Resource
        name="users"
        create={UserCreate}
        list={UserList}
        edit={UserEdit}
      />:<React.Fragment/>}
      {role === 'admin' || role === 'seller'?
      <Resource
      name="products"
      create={ProductCreate}
      list={ProdutcsList}
      edit={ProductEdit}
    />:<React.Fragment/>}
      {role === 'admin' || role === 'seller'?
      <Resource
        name="posts"
        create={PostCreate}
        list={PostsList}
        edit={PostEdit}
      />:<React.Fragment/>}
      <Resource
        name="orders"
        list={ListOrders}
        edit={EditOrder}
        show={ShowOrder}
      />
    </Admin>
  </Provider>
)};
const mapStateToProps = state => ({
  userName: state.global.userName,
  userRole: state.global.userRole
})
export default connect(mapStateToProps, { updateUserNavbar })(Dashboard)
