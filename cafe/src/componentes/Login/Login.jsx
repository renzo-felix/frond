import React, {useState} from "react";
import NavBar from "../../componentes/header/Header";
import { Link } from "react-router-dom";
import "./Login.css";
import Validation from "../../LoginValidation";

function LoginPage() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  //Consta de dos partes: el estado de error de email y el estado de error de password

  const handleInput = (e) => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))
  }

  /*Pasos:
  Al llenar los espacios dentro del form, se activa handleSubmit que validará si estan correctos el email y contraseña.
  Lo que esta dentro de email y password se va a guardar, que constan de dos partes: su nombre y el valor enviado.
  Se va a mostrar como alerta los valores de errors.
  */
  return (
    <div>
      <NavBar />
      <div className="allPage">
        <div className="formContainer">
          <p className="contTitle">Sign In</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputSpace">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" onChange={handleInput} name='email'></input>
              {errors.email && <span> {errors.email} </span>}
            </div>
            <div className="inputSpace">
              <label htmlFor="password">Email</label>
              <input type="password" placeholder="Password" onChange={handleInput} name='password'></input>
              {errors.password && <span> {errors.password} </span>}
            </div>
            <button type='submit' className="loginButton">Login</button>
            <p>You are agree to our terms and policies?</p>
            <Link to="/signup">
              <button className="createAccountButton">Create Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
