import React, { useState } from "react";
import { testimonials } from "../constants";

const TestimonialCard = ({ text, image, user, company }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        border: isHovered ? "1.5px solid #fabb0e" : "1px solid #ddd",
        padding: "16px",
        borderRadius: isHovered ? "10px" : "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textAlign: "center",
        margin: "10px",
        maxWidth: "100%",
        transform: isHovered ? "scale(1.0)" : "scale(1)",
        transition: "0.1s ease-in-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p style={{ fontSize: "20px", color: "#D3D3D3" }}>{text}</p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
          src={image}
          alt={user}
        />
        <div>
          <h6 style={{ margin: 0, fontSize: "16px", color: "#B0B0B0" }}>
            {user}
          </h6>
          <span style={{ fontSize: "12px", color: "#B0B0B0" }}>{company}</span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      style={{
        padding: "50px 40px",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <h2 style={{ fontSize: "50px", marginBottom: "50px", color: "white" }}>
        What People Are Saying
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default About;
