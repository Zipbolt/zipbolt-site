import React from "react";
import "../App.css";
import "./ContactUs.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>
        Our <span>Contact</span>
      </h2>
      <div className="contact-wrapper">
        <h2 className="heading-subtext">
          If you are living near by come visit ZipBolt
        </h2>
        <div className="cw-container-row cw-container-sec-b">
          <div className="cw-container-col">
            <h2 className="cw-container-title">Address</h2>
            <div className="cw-container-link">
              <a
                class="map-link"
                href="https://www.google.com/maps/search/UG-006+Floor,+MGF+Metropolis+mall+Mehrauli,+Gurgaon+Road,+Sector-28+Gurgaon+Gurgaon+HR+122002+IN/@28.4798931,77.0804561,16z/data=!3m1!4b1"
              >
                UG-006 Floor, MGF Metropolis mall Mehrauli, <br /> Gurgaon Road,
                Sector-28 Gurgaon Gurgaon HR 122002 IN
              </a>
            </div>
            <h2 className="cw-container-title">Email Address</h2>
            <div>
              <a href="mailto:support@zipbolt.in" class="email-link">
                support@zipbolt.in
              </a>
              <br />
              <a href="mailto:hello@zipbolt.in" class="email-link">
                hello@zipbolt.in
              </a>
            </div>
            <h2 className="cw-container-title">Contact NO.</h2>
            <div>
              <a className="tel-link" href="tel:+91 99999 55555">
                {" "}
                +91 99999 55555
              </a>
              <br />
              <a className="tel-link" href="tel:+91 98524 98572">
                {" "}
                +91 98524 98572
              </a>
            </div>
          </div>
          <div className="cw-container-col">
            <img src="\images\ZipBolt-contactus-vector.png" alt="" />
          </div>
        </div>
        <div className="cw-container-row cw-container-sec-b"></div>
      </div>
    </div>
  );
}

export default Contact;
