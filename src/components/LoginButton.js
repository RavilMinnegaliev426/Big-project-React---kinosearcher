import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./button2.css";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="BtnLog2" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
}

export default LoginButton;
