import React from "react";
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';


ReactDOM.render (
  <>
    
    <h1 className="Heading_style">List of top 5 movies</h1>
    
    
    <Card
    
    imgscr={Sdata[0].imgscr}
    sname={Sdata[0].sname}
    title={Sdata[0].title}
    links={Sdata[0].links}
    />

    <Card
  
  imgscr={Sdata[1].imgscr}
    sname={Sdata[1].sname}
    title={Sdata[1].title}
    links={Sdata[1].links}
    />

    <Card
   
   imgscr={Sdata[3].imgscr}
    sname={Sdata[3].sname}
    title={Sdata[3].title}
    links={Sdata[3].links}
    />
  </>,
document.getElementById("root")

);

