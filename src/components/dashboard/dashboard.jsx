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
const Dashboard = (props) => (
  <Provider
    store={createAdminStore({
      dataProvider,
      history,
    })}
  >
    <Admin history={history} dataProvider={dataProvider}>
      
      {props.userRole === 'admin'?<Resource
        name="users"
        create={UserCreate}
        list={UserList}
        edit={UserEdit}
      />:null}
      {props.userRole === 'admin' || this.props.userRole === 'seller'?
      <Resource
      name="products"
      create={ProductCreate}
      list={ProdutcsList}
      edit={ProductEdit}
    />:null}
      {props.userRole === 'admin' || this.props.userRole === 'seller'?
      <Resource
        name="posts"
        create={PostCreate}
        list={PostsList}
        edit={PostEdit}
      />:null}
      <Resource
        name="orders"
        list={ListOrders}
        edit={EditOrder}
        show={ShowOrder}
      />
    </Admin>
  </Provider>
);
const mapStateToProps = state => ({
  userName: state.global.userName,
  userRole: state.global.userRole
})
export default connect(mapStateToProps, { updateUserNavbar })(Dashboard)
