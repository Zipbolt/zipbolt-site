import React from "react";
import { Container } from "react-bootstrap";
import "./AboutUs.css";
import { Button } from "./Button";

function AboutUs() {
  return (
    <>
      <div className="aboutUs-container">
        <h2>
          About <span className=""> Us </span>
        </h2>
        <div className="cards__container">
          <h2 className="heading-subtext">
            A story About Us, How it all started
          </h2>
          <div className="cards__wrapper">
            <div className="cw-container-row">
              <div className="col-6 cw-container-col">
                <div>
                  <div className="aboutUs-container-text">
                    <p>
                      Our Advanced Technology Stack tackles areas of new
                      applications and deploy new business models, without the
                      complexity of upgrading traditional energy infrastructure.
                    </p>
                    <p>
                      For Electric Fleet Operators & EV OEMs, we have integrated
                      the Product Ecosystem with a Digital SAAS Platform to
                      accelerate your Journey of Electric Mobility as well as
                      reduce the TCO (Total Cost of Ownership).
                    </p>
                  </div>

                  <Button
                    buttonStyle="btn--outline--Secondary"
                    buttonSize="btn--large"
                    onClick={console.log("hey")}
                  >
                    Join US
                  </Button>
                </div>
              </div>

              <div className=" cw-container-col cw-container-col-s">
                <img
                  src="images/Battery-Management-System.jpg"
                  alt="Battery-Management-System-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutus-bg"></div>
      <div class="aboutus-bg aboutus-bg2"></div>
      <div class="aboutus-bg aboutus-bg3"></div>
    </>
  );
}

export default AboutUs;
