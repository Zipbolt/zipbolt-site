import React from "react";
import "./OurClients.css";
import "./Button";
import { Button } from "./Button";

function Clients() {
  return (
    <div className="ourClients">
      <h2>
        Our <span>Clients</span>
      </h2>
      <div className="cards__container">
        <h2 className="heading-subtext">
          A story About Us, How it all started
        </h2>
        <div className="cards__wrapper">
          <div className="cw-container-row">
            <div className="cw-container-col">
              <div className="ourClients-text-section">
                <h2 className="ourClients-header-text">
                  Brands{" "}
                  <span className="ourClients-header-Blue-text"> With </span>
                  Us
                </h2>
                <p className="ourClient-sub-heading">
                  Our ecosystem consists of batteries from industry-leading
                  OEMs. Reach out to us to get your batteries integrated.
                </p>
                {/* <img src="images/home-01-610x432.png" alt="" /> */}
              </div>
            </div>
            <div className="cw-container-col">
              <div className="clients-img-r1 cw-container-row">
                <div className="clients-img-item1">
                  <img
                    className=""
                    src="/images/ZipBolt-Clients-R1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="clients-img-r2 cw-container-row">
                <div>
                  <img
                    className="clients-img-item2"
                    src="/images/ZipBolt-Clients-R2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="clients-img-r3 cw-container-row">
                <div>
                  <img className="clients-img-item3" src="" alt="" />
                </div>
              </div>
              <Button
                buttonStyle="btn--outline--Secondary"
                buttonSize="btn--large"
                onClick={console.log("hey")}
              >
                Demo Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
