import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from "../../auth"

import { connect } from 'react-redux';

const ProtectedRoute = ({
    component: Component,
    ...rest
  }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (rest.userName) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    );
  }

  export default connect(state => ({
    userName: state.global.userName
  }), ) (ProtectedRoute);

