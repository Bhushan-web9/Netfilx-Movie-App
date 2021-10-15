import React from "react";
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';



function ncard(val) {
  return (
    <Card
        imgscr={val.imgscr}
        sname={val.sname}
        title={val.title}
        links={val.links}
    />
  );
}



ReactDOM.render (
  <>
    
    <h1 className="Heading_style">List of top 5 movies</h1>
    
    {Sdata.map(ncard)} 

  </>,

  document.getElementById("root")

);

