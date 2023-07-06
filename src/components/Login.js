import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");

  const signIn = e => {
    e.preventDefault()
  }

  const register = e => {
    e.preventDefault()
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="login_logo"
          className="login_logo"
          src="Https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1 className="login_containerTitle">Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange=
          {e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange=
          {e => setPassword(e.target.value)}/>

          <button className="login_signInButton" onClick={signIn} type="submit">Sign-in</button>
        </form>
        <p>
          By signing in you declare that you understand and accept the terms and
          conditions established by this AMAZON FAKE CLONE website
        </p>
        <button className="login_registerButton" onClick={register}>Create a new account</button>
      </div>
    </div>
  );
}

export default Login;
