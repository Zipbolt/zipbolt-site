import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2>
        What <span> We Do </span>
      </h2>
      <div className="cards__container">
        <h2 className="heading-subtext">
          If you are living near by come visit ZipBolt
        </h2>
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ev.jpg"
              text="Electric Vehicles Charging Stations"
              label="Ev Charging"
              path="/ev-charging"
            />
            <CardItem
              src="images/bs.png"
              text="Swapping Batteries to Extend their Life"
              label="Battery Swapping"
              path="/swapping"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
