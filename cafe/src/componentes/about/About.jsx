import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import {FiCheck} from "react-icons/fi";
import "./about.css";
import { useParams } from "react-router-dom";
import Header from "../header/Header";


const About = () => {
  
 const params = useParams();
 console.log("iss", params.token)
 return (
  <>
    <Header token={params.token}/>
    <section className='about section' id='about'>
      <div className='about__grid container grid'>
        <div className='about__image-wrapper'>
          <img src={aboutImg} alt='' className='about__img' />
        </div>  

        <div className="about__content">
          <h2 className="h2 section__titlle" data-titlle='About Us'>
            Fresh Quality And Organic Tasty Coffe House For 
            You         
          </h2>

          <p className="about__description">
            There are many variations of passages of lorem 
            Ipsum available, but 
            the majority have suffered alteration in some 
            form, by injected 
            humour, or randomised words which don't look even 
            slightly believable.
          </p>

          <div className="about__details grid">
            <p className="about__details-description">
              <FiCheck />
              Organic Coffee
            </p>

            <p className="about__details-description">
              <FiCheck />
              Organic Coffee
            </p>

            <p className="about__details-description">
              <FiCheck />
              Organic Coffeeee
            </p>
          </div>

          <a href="#team" className="btn">
            Our Expert

          </a>
        </div>
      </div>
    </section>
    </>
  );
  

};
export default About;