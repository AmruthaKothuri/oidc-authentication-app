import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

// Replace with your Auth0 domain and client ID
const domain = "dev-y3s0o7820vlfw51k.us.auth0.com";
const clientId = "swDqevYDXwxZLTFxRbhXjm00Pgrh8vNW";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
