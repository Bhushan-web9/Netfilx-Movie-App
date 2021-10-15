import React from "react";

function Card(props){
    return(
  <div className="cards">
        <div className="card">
          <img src={props.imgscr} alt="mypic" className="card_img"/>
        </div>
        <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card|_title">{props.sname}</h3>
          <a href={props.links} target="blank" >
            <button>watch now</button>
          </a>
        </div>
      </div>
    )
  }

  export default Card;
