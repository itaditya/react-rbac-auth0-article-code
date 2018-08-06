import React, { Component } from "react";
import auth0 from "auth0-js";

import { AUTH_CONFIG } from "../constants/auth0-variables";
import { AuthProvider } from "../authContext";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token"
});

class Auth extends Component {
  state = {
    authenticated: false,
    user: {
      role: "visitor"
    },
    accessToken: ""
  };

  initiateLogin = () => {
    auth.authorize();
  };

  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {
    auth.parseHash((error, authResult) => {
      if (error) {
        console.log(error);
        console.log(`Error ${error.error} Occured`);
        return;
      }

      this.setSession(authResult);
    });
  };

  setSession(authResult) {
    const { accessToken } = authResult;
    auth.client.userInfo(accessToken, (error, data) => {
      if (error) {
        console.log("Error Occured", error);
        this.setState({
          authenticated: false,
          accessToken: "",
          user: {
            role: "visitor"
          }
        });
        return;
      }

      const user = {
        id: data.sub,
        email: data.email,
        role: data[AUTH_CONFIG.roleUrl]
      };
      this.setState({
        authenticated: true,
        accessToken,
        user
      });
    });
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      logout: this.logout
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
