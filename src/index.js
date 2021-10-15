import React from "react";
import ReactDOM from 'react-dom';


function Card(){
  return(
<div className="cards">
      <div className="card">
        <img src="https://theroswellsting.com/wp-content/uploads/2019/09/dark.jpg" alt="mypic" className="card_img"/>
      </div>
      <div className="card_info">
        <span className="card_category">A Netflix orignal series</span>
        <h3 className="card|_title">DARK</h3>
        <a href="https://www.netflix.com/in/title/80100172" target="_blank">
          <button>watch now</button>
        </a>
      </div>
    </div>
  )
}


ReactDOM.render (
  <>
    <Card/>
    <Card/>
    <Card/>
  </>,
document.getElementById("root")

);

