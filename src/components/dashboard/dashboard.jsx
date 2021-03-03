import jsonServerProvider from "ra-data-json-server";
import firebaseDataProvider from 'ra-data-firebase-client'
import {UserList, UserEdit} from "./users"
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import createAdminStore from '../../createAdminStore';
import firebase from '../../firebase'
import "firebase/database"
import "./dashboard.css"
const dataProvider = firebaseDataProvider(firebase, {})

const history = createHashHistory();

const Dashboard = () => (
    <Provider
        store={createAdminStore({
            dataProvider,
            history,
        })}
    >
        <Admin history={history} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} edit={UserEdit}/>
  </Admin>
    </Provider>
  
);
export default Dashboard;