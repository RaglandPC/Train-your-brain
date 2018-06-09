import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectPicture(props.name)} 
       style={{ backgroundImage: `url("${props.image}")` }}
        className={props.score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
      >
        <img alt={props.image} src={props.image} />
      </a>
    </div>

  </div>
);

export default FriendCard;