import React from "react";
import high from "./video/high.mp4";


const Features = () =>(
  <div className="App">
    <video autoPlay loop 
    style={{
      width :"100%",
      height:"100%",
      left:"50%",
      top:"50%",
      position :"absolute",
       objectFit :"cover",
     transform :"translate(-50%,-50%)",
    zIndex:"-1"
 

    }}
    >
      <source src={high} type="video/mp4" />
    </video>
    <center>
    <h1><br></br>Hello i am Rohan trial for sound </h1>
   <h1>Login here</h1>
   </center>
  </div>
);

export default Features;

