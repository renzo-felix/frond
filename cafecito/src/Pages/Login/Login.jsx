import React from "react";
import NavBar from "../../componentes/header/Header";
import "./Login.css";

function LoginPage() {
  return (
    <div>
      <NavBar />
      <div className="allPage">
        <div className="formContainer">
            <p className="contTitle">Sign Up</p>
          <form action="">
            <div className="inputSpace">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className="inputSpace">
              <label htmlFor="password">Email</label>
              <input type="password" placeholder="Password"></input>
            </div>
            <button className="loginButton">Login</button>
            <p>You are agree to our terms and policies?</p>
            <button className="createAccountButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
