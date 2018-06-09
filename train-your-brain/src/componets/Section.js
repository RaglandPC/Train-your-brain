import React from "react";
import "../styles/Section.css";

const Section = props => (
    
    <section className="sec">
    <div className="card">
    <div className="img-container">
      <div onClick={() => props.setClicked(props.images)} className="card">
		<div className="img-container">
      		<img alt={props.images} src={props.images} />
    	</div>
  </div>
    </div>
  </div>
  
  </section>
  

);

export default Section;

