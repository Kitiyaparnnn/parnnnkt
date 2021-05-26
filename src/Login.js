import React from "react";
import "./Login.css";
import { loginUri } from "./spotify";

function Login() {
  return (
    <div className="login">
      {/* <h1>I'm the login page</h1> */}
      {/* Spotify Logo */}
      <img src='http://media.idownloadblog.com/wp-content/uploads/2016/06/Spotify_logo_horizontal_black.jpg'></img>
      
      {/* Login with spotify button */}
      <a href={loginUri}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
