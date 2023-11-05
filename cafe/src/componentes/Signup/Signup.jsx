import React , {useState} from "react";
import NavBar from "../../componentes/header/Header";
import { Link } from "react-router-dom";
import "./Signup.css";
import Validation from "../../SignupValidation";


function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  //Consta de tres partes: el estado de error del nombre, el estado de error de email y el estado de error de password

  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))
  }

  return (
    <div>
      <NavBar />
      <div className="allPage">
        <div className="formContainer">
          <p className="contTitle">Sign Up</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputSpace">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" name='name' onChange={handleInput}></input>
              {errors.name && <span> {errors.name} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" name='email' onChange={handleInput}></input>
              {errors.email && <span> {errors.email} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="password">Email</label>
              <input type="password" placeholder="Password" name='password' onChange={handleInput}></input>
              {errors.password && <span> {errors.password} </span>}
            </div>
            <button className="loginButton">Sign Up</button>
            <p>You are agree to our terms and policies?</p>
            <Link to="/login">
              <button className="createAccountButton">Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
