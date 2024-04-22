import React from "react";
import '../Hero.css'

//challenge: map through components
//algorithm:
//one: create a function, pass in props for the image,title and descripton
function Hero({ imageUrl, title, description }){
  return (
    
      <div className="Blogcard">
      {/* return the elements with the props. */}
      <img src={imageUrl} alt="Hero" />
      <h4>{title}</h4>
      <p>{description}</p>
      <br />
      <br />
      <br />
    </div>
  
  );
};

export default Hero;
