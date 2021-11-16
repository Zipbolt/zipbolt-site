import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1> ZIPBOLT INNOVATIONS </h1>

      <p className="herosection_para">
        {""}
        Zipbolt is electrifying the automobile sector by delivering Energy,
        using its Advanced EV Charging and Swapping solutions. Zipbolt is
        electrifying the automobile sector by delivering Energy, using its
        Advanced EV Charging and Swapping solutions.{""}
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let's Connect
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
