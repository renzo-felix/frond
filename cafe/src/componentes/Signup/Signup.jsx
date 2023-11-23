import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../componentes/header/Header";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import Cookies from 'js-cookie';


function Signup() {
 
 
const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const on_Submit = handleSubmit(async (data) => {
    try {
      const response = await axios.post('https://proyectodbp-production.up.railway.app/api/auth/signup', {
        firstName: watch('firstName'),
        lastName: watch('lastName'),
        email: watch('email'),
        password: watch('password'),

        admin: false,
        orden: [{}]
      });


      const token = response.data.token;
      const email_ = watch('email');
      window.location.href = `https://tablas.vercel.app/#/home?token=${token}&valor2=${email_}`;
    } catch (error) {
      console.error(error);
      const token = "no hay token";
      console.log(token);

      // Almacena el token en una cookie
      Cookies.set('miToken', token);
    }
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