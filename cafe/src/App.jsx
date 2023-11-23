import React from 'react'
import './App.css'
import Header from './componentes/header/Header';
import Home from './componentes/Home/Home';
import { useParams } from 'react-router-dom';



function App() {
  const params = useParams();
  console.log(params)

  return (
    <>
      <Home token={params.token} />
      
      

    </>
  );
};

export default App;
