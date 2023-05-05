import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/pd1r9Tv/ezgif-com-webp-to-jpg.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-8xl font-bold">Hello there</h1>
          <p className="mb-5 text-5xl">
            We are here to serve the{" "}
            <span className="text-6xl font-semibold">
              World's best food for YOU
            </span>
          </p>
          <Link to="/" className="btn-purple ">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
