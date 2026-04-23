import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Poke Battle</h1>
      <span>Battle another Pokemon One on One</span>
      <button className="btn btn--cta">Battle!</button>
    </div>
  );
}

export default Hero;
