import App1 from "./App1";
import { Search } from "./inter/Search";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/profile";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <div class="index">
      <LoginButton>Log in</LoginButton>
      <LogoutButton>Log Out</LogoutButton>
      <Profile></Profile>
      <Search classsName="search_input" />
      <App1 />
    </div>
  </Auth0Provider>,

  document.getElementById("root")
);
