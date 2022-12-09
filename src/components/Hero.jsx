import React from "react";
import teacupBg from "../image/teacup-bg.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${teacupBg})`,
        backgroundSize: "cover",
        display: "grid",
        placeItems: "center",
        height: "500px",
      }}
    >
      <div className="hero-title">
        <h1>
          “There's a lot of things <br />I want to say to you ...”
        </h1>
      </div>
    </div>
  );
};

export default Hero;
