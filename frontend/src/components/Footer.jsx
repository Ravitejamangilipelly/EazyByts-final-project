import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>ELITE's</h1>
          <p>Turning Celebrations into Memories</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Sign up with your email address to receice news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;