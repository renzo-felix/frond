import React from 'react';
import {features} from '../../Data';
import shape from '../../assets/shape.png';
import './features.css';
import Header from "../header/Header";
import { useParams } from 'react-router-dom';

const Features = () => {
  const params = useParams();
  console.log(params)
    return (
      <>
      <Header token={params.token}/>
      <section className="features section" id="features">
        <h2 className=" section__titlle" data-title='Features'>
        Ours Best Features        
        </h2>

        <div className="features__grid container grid">
          {features.map(({img, title, description, id}, index)=>{
              return(
                  <div className="features__item"key={index}>
                     <img src={img} alt="" className="features" />
                     <h3 className="features__title">{title}</h3>
                     <p className="features__description">{description}
                     </p>

                    <img src={shape} alt="" className="features__shape" />
                 </div>


            );
          })}
        </div>
      </section>
      </>
    )
}
export default Features;