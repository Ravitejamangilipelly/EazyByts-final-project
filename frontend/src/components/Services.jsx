import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/party.jpg",
      title: "DJ Nights",
    },
    {
      id: 2,
      url: "/music.jpg",
      title: "Music Festivals",
    },
    {
      id: 3,
      url: "/beach.jpg",
      title: "Beach Parties",
    },
    {
      id: 4,
      url: "/culture.jpg",
      title: "Cultural Events",
    },
    {
      id: 5,
      url: "/costume.jpg",
      title: "Costume Parties",
    },
    {
      id: 6,
      url: "/food.jpg",
      title: "Food & Drink Festivals",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;