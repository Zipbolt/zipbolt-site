import React, { useState } from "react";
import "../../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function OurTeam() {
  return (
    <>
      {/* <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <blockquote>
                  <p></p>
                </blockquote>

                <footer></footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <Container className="ripples-animation">
        <div class="ripple-background">
          <div class="circle xxlarge shade1"></div>
          <div class="circle xlarge shade2"></div>
          <div class="circle large shade3"></div>
          <div class="circle mediun shade4"></div>
          <div class="circle small shade5"></div>
        </div>
      </Container>
      <Container fluid className="our-team-container">
        <Container>
          <Row>
            <Col>
              <div className="our-team-header">
                <h2 className="our-team-header-title">
                  Meet Our <span className="blue-text"> Team </span>
                </h2>
                <div className="our-team-container-2">
                  <h2 className="our-team-heading-subtext">
                    Dreams and teams work together
                  </h2>
                </div>
              </div>
            </Col>

            <Row className=" our-team-quote-container justify-content-md-center">
              <Col md={8}>
                <Card
                  className=" "
                  style={{ backgroundColor: "#131313", borderRadius: "20px" }}
                >
                  <Card.Body>
                    <blockquote className="blockquote blockquote-custom  our-team-quote-text  px-3 pt-4">
                      <div className="blockquote-custom-icon bg-info shadow-1-strong">
                        <i className="fa fa-quote-left text-white"></i>
                      </div>
                      <p className="our-team-quote-text mb-0 mt-2 font-italic ">
                        At ZipBolt our team is our strength here we work
                        together to empower{" "}
                        <span className="blue-text"> sustainable </span> future
                        <a href="#" className="text-info"></a>
                        ."
                      </p>
                      <div className="blockquote-custom-close-icon bg-info shadow-1-strong">
                        <i className="fa fa-quote-right text-white"></i>
                      </div>
                      <footer class="blockquote-footer pt-4 mt-4 border-top our-team-quote-footer">
                        Rohan Singh Bais
                        {/* <cite title="Source Title">Source Title</cite> */}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* 
            <Row className=" our-team-quote justify-content-md-center">
              <Col md={8} className="">
                <div className="our-team-quote-text">
                  <p>
                    <span className="">"</span>
                    At ZipBolt our team is our strength here we work together to
                    empower a sustainable future
                    <span className="">"</span>
                  </p>
                </div>
              </Col>
            </Row> */}
            <Row className="justify-content-md-center">
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Rohan Singh Bias</h3>
                    <span class="post">Founder , Product And Strategy</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Sonia Singh</h3>
                    <span class="post">CEO & Co Founder</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Vikas Kumar</h3>
                    <span class="post">Founder , Product And Strategy</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Diksha Maurya </h3>
                    <span class="post">CEO & Co Founder</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Hemant Kumar</h3>
                    <span class="post">CEO & Co Founder</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Dr. Sanmitra Burman</h3>
                    <span class="post">Founder , Product And Strategy</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Vishu Narahari</h3>
                    <span class="post">CEO & Co Founder</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={3}>
                <div class="our-team">
                  <div class="pic">
                    <img src="images/img-1.jpg" alt="" />
                  </div>
                  <div class="team-content">
                    <h3 class="title">Sandeep Jain</h3>
                    <span class="post">CEO & Co Founder</span>
                    <ul class="social">
                      <li>
                        <a href="#">
                          <i class="fab fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </>
  );
}
