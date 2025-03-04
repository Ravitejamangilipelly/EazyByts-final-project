import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {

 
  return (
    <section className="hero">
      <img style={{opacity:'2'}} src="/bg3.jpg" alt="" />
      <div className="item">
        <h3>Elite Events</h3>
        <div>
          <h1>Your Vision, Our Execution</h1>
          <p>
          Elevate Every Event, Every Moment
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;