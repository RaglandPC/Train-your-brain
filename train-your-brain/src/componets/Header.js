import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads


// We use JSX curly braces to evaluate the style object

const Header = () => (
  <header className="header">
    <h1 class="center">Train-your-Brain Game!</h1>
    <h2 class="center">Click on an image to earn points, but dont click on any more than once!</h2>
  </header>
);

export default Header;
