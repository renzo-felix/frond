import React from "react";
import axios from "axios";
import NavBar from "../../componentes/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie'; // Asegúrate de importar la biblioteca Cookies

import "./Login.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  
  const on_Submit = handleSubmit(async (data) => {
    try {
      console.log(data);
      const response = await axios.post('https://proyectodbp-production.up.railway.app/api/auth/login', data);
      const token = response.data.token;
      console.log(token);
      window.location.href = `https://tablas.vercel.app/#/home?token=${token}&valor2=${data}`;
    
      // Redirige a la página deseada con el token como parámetro en la URL
  
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <NavBar />
      <div className="formContainer">
        <p className="contTitle">Log In</p>
        <form onSubmit={on_Submit}>
          <label className="formlabel" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "This field is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Correo no valido",
              },
            })}
          ></input>
          {errors.email && <span>{errors.email.message}</span>}
          <label className="formlabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              minLength: {
                value: 8,
                message: "The password must be 8 to 25 characters",
              },
              maxLength: {
                value: 25,
                message: "The password must be 8 to 25 characters",
              },
            })}
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
          <button className="signLogButton" type="submit">
            Log in
          </button>
          <p>Are you not registered?</p>
          <Link to="/signup">
            <button className="signLogButton">Create Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
