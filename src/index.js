import React from "react";
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";


ReactDOM.render (
  <>
    
    <h1 className="Heading_style">List of top 5 movies</h1>
    
    
    <Card
    
    imgscr="https://theroswellsting.com/wp-content/uploads/2019/09/dark.jpg"
    sname="Dark"
    title="Netflix orignal Series"
    links="https://www.netflix.com/in/title/80100172"
    />

    <Card
  
    imgscr="https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    sname="Extracurricular"
    title="Netflix orignal Series"
    links="https://www.netflix.com/in/title/80100172"
    />

    <Card
   
    imgscr="https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_.jpg"
    sname="Dark"
    title="Netflix orignal Series"
    links="https://www.netflix.com/in/title/80100172"
    />
  </>,
document.getElementById("root")

);

