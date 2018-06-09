import React from "react";
import Header from "./componets/Header";
import Section from "./componets/Section";
import Navbar from "./componets/Navbar";
import imgages from "./img.json"; // [ { image: ''}, {image: ''}


const App = () => (
  <div>
    <Navbar />
    <Header />
    <Section
      imgages={imgages[0]}
     />
         <Section
      imgages={imgages[1]}
     />
         <Section
      imgages={imgages[2]}
     />
         <Section
      imgages={imgages[3]}
     />
         <Section
      imgages={imgages[4]}
     />
         <Section
      imgages={imgages[5]}
     />
         <Section
      imgages={imgages[6]}
     />
         <Section
      imgages={imgages[7]}
     />
         <Section
      imgages={imgages[8]}
     />
         <Section
      imgages={imgages[9]}
     />
         <Section
      imgages={imgages[10]}
     />
         <Section
      imgages={imgages[11]}
     />
  </div>
);

export default App;
