import React from "react";
import NavBar from "../../componentes/header/Header";
import "./about.css";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className="AboutUsBox">
        <h2 className="DescTitle">About us</h2>
        <article className="Description">
          Somos una empresa emergente de café en el distrito de Barranco.
          Venimos con una idea que es muy poco vista en este distrito, e incluso
          en el país. Se trata de una cafetería donde tendrás un recibimiento
          especial: unos adorables gatos que te acompañaran desde que ingreses
          en la cafetería.
        </article>
      </div>
    </div>
  );
}
