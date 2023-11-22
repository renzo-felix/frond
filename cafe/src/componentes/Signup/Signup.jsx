import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../componentes/header/Header";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
//import Validation from "../../SignupValidation";

function Signup() {
  const {
    register, //Le da el nombre a el valor del input
    handleSubmit, //Funciona cuando ocurre el submit, al dar click en el boton de signup
    formState: { errors }, //Forma de ver, en este caso, los errores que podemos seleccionar
    watch, //Herramienta asombrosa: watch retorna un valor que se envie
  } = useForm(); //Estas son funciones basicas de useForm

  const navigate = useNavigate();
  let Token;

  const on_Submit = handleSubmit((data) => {
    axios.post('https://proyectodbp-production.up.railway.app/api/auth/signup',{
      firstName: watch('firstName'),
      lastName: watch('lastName'),
      email: watch('email'),
      password: watch('password'),
      admin: false,
      orden: [{}]
    }).then(res => {Token = res.data.token; console.log(Token); navigate(`/home/${Token}`)}).catch(err => console.log(err));
  });

  return (
    <div>
      <NavBar />
      <div className="formContainer">
        <p className="contTitle">Sign Up</p>
        <form onSubmit={on_Submit}>
          <label className="formlabel" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          ></input>
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <label className="formlabel" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          ></input>
          {errors.lastName && <span>{errors.lastName.message}</span>}
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
          <label className="formlabel" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Password"
            {...register("confirmPassword", {
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
              validate: (value) =>
                value === watch("password") || "Passwords don't match",
            })}
          ></input>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          <button className="signLogButton">Sign Up</button>
          <p>Are you register?</p>
          <Link to="/login">
            <button className="signLogButton">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;