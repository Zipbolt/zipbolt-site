import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import "../../App.css";
import Cards from "../Cards";
import { Container, Row, Col, Card } from "react-bootstrap";
import BttButton from "../BttButton";

export default function Swapping() {
  return (
    <>
      {BttButton}
      <Container>
        <Row>
          <Col>
            <Row className="home-row-1-title">
              <Col className="light-header-1">
                Intelligent, modern day{" "}
                <span className="blue-text">Swapping</span> solution
              </Col>
              <Col className="left-para">
                Anywhere, anyday, anytime solution for EVs - street <br />{" "}
                parked or in private / public parking
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col>
                <img
                  className="s-main-img"
                  src="\images\about-4-370x251.jpg"
                  alt=""
                />
              </Col>
              <Col>
                <Row>
                  <Col md="auto">
                    <div className="icon-container">
                      <img
                        className="s-home-icon-img s-home-icon-img-1"
                        src="/images/bs.png"
                        alt="s-home-feature-icon-1"
                        width="30px"
                        height="30px"
                      />
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="auto" className="s-home-title-1">
                        Future Proof Solutions
                      </Col>
                      <Col md={10} className="s-home-content">
                        Our products and services are made to last, and let you
                        stay up-to-date with the most current technologies.
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md="auto">
                    <div className="icon-container">
                      <img
                        className="s-home-icon-img s-home-icon-img-1"
                        src="/images/bs.png"
                        alt="s-home-feature-icon-1"
                        width="30px"
                        height="30px"
                      />
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="auto" className="s-home-title-1">
                        Faster, Easier, Better
                      </Col>
                      <Col md={10} className="s-home-content">
                        We strive to create technologies and solutions that help
                        make the transition to electric effortless.
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col md="auto">
                    <div className="icon-container">
                      <img
                        className="s-home-icon-img s-home-icon-img-1"
                        src="/images/bs.png"
                        alt="s-home-feature-icon-1"
                        width="30px"
                        height="30px"
                      />
                    </div>
                  </Col>
                  <Col>
                    <Row>
                      <Col md="auto" className="s-home-title-1">
                        Sharing Tomorrow’s Energy
                      </Col>
                      <Col md={10} className="s-home-content">
                        Intelligent energy distribution is the core to all our
                        ideas, making sure the future more efficient and
                        sustainable.
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="s-info-container-dark">
        <Container>
          <Row>
            <Col>
              <Row className="layout-row-space-between layout-row-middle s-info-full-box">
                <Col>
                  <Row>
                    <Col md={12} className="s-info-section-title">
                      Our patented technology offers a smarter{" "}
                      <span className="blue-highlighted-text">
                        {" "}
                        battery swapping{" "}
                      </span>{" "}
                      solution
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <Row className="s-info-box-items-1">
                            <Col>
                              <Row className="s-info-box">
                                <Col className="s-info-text">
                                  <Col className="s-info-item-title">
                                    <h4 className="s-info-header">
                                      Saves{" "}
                                      <span className="blue-text">Time</span>
                                    </h4>
                                  </Col>
                                  <Col className="s-info-item-content">
                                    ZipBolt maps your idle time. Hence zero
                                    unproductive time for you.
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col>
                              <Row className="s-info-box">
                                <Col className="s-info-text">
                                  <Col className="s-info-item-title">
                                    <h4 className="s-info-header">
                                      Saves{" "}
                                      <span className="blue-text">Money</span>
                                    </h4>
                                  </Col>
                                  <Col className="s-info-item-content">
                                    ZipBolt maps your idle time. Hence zero
                                    unproductive time for you.
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row className="s-info-box-items-2 ">
                            <Col>
                              <Row className="s-info-box">
                                <Col className="s-info-text">
                                  <Col className="s-info-item-title">
                                    <h4 className="s-info-header">
                                      Saves{" "}
                                      <span className="blue-text">Time</span>
                                    </h4>
                                  </Col>
                                  <Col className="s-info-item-content">
                                    <div>
                                      ZipBolt maps your idle time. Hence zero
                                      unproductive time for you.
                                    </div>
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                            <Col>
                              <Row className="s-info-box">
                                <Col className="s-info-text">
                                  <Col className="s-info-item-title">
                                    <h4 className="s-info-header">
                                      Saves{" "}
                                      <span className="blue-text">Time</span>
                                    </h4>
                                  </Col>
                                  <Col className="s-info-item-content">
                                    ZipBolt maps your idle time. Hence zero
                                    unproductive time for you.
                                  </Col>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          <Col>
            <Row className="justify-content-md-center">
              <div className="process-flow">
                <Col sm={6} md={3}>
                  <div className="process-flow-item">
                    <div className="process-flow-img">
                      <img
                        src="\images\bs.png "
                        alt=""
                        width="100px"
                        height="100px"
                      />
                    </div>
                    <div className="process-flow-title"> LOCATE </div>
                    <div className="process-flow-content">
                      {" "}
                      Find your nearest battery swapping station{" "}
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={3}>
                  <div className="process-flow-item ">
                    <div className="process-flow-img">
                      <img
                        src="\images\bs.png "
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </div>
                    <div className="process-flow-title">MOVE</div>
                    <div className="process-flow-content">
                      Move In to your nearest battery swapping station
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={3}>
                  <div className="process-flow-item">
                    <div className="process-flow-img">
                      <img
                        src="\images\bs.png"
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </div>
                    <div className="process-flow-title">SWAP</div>
                    <div className="process-flow-content">
                      Swap the compatible battery from the side to charge on the
                      go{" "}
                    </div>
                  </div>
                </Col>
                <Col sm={6} md={3}>
                  <div className="process-flow-item">
                    <div className="process-flow-img ">
                      <img
                        src="\images\bs.png "
                        width="100px"
                        height="100px"
                        alt=""
                      />
                    </div>
                    <div className="process-flow-title">READY TO GO</div>
                    <div className="process-flow-content">
                      {""}
                      Now your Vehicle is ready again to move with full power{" "}
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="s-home-facts-c">
        <div className="s-home-facts">
          <div className="s-home-facts-heading">
            <p>
              Towards
              <span className="blue-highlighted-text"> Sustainable </span>
              Livelihoods And{" "}
              <span className="blue-highlighted-text">Clean Mobility</span>
            </p>
          </div>
          <div className="NumberSection">
            <div class="single">
              <div class="single-topic-bold">
                <span className="blue-text">60</span>Lac+
              </div>
              <div class="desc"> Electric Kms Covered</div>
            </div>

            <div class="single">
              <div class="single-topic-bold">
                <span className="blue-text">100</span>+
              </div>
              <div class="desc"> Swapping Stations</div>
            </div>
            <div class="single-last">
              <div class="single-topic-bold">
                <span className="blue-text">INR 7 </span>Cr+
              </div>
              <div class="desc"> Driver Income Generated</div>
            </div>
          </div>
          <hr className="facts-endline"></hr>
        </div>
      </Container>
    </>
    // <div>
    //   <div className="container">
    //     <div className="layout-main-container">
    //       <div className="layout-row ">
    //         <div className="layout-col">
    //           <div
    //             type="flex"
    //             className="layout-row layout-row-space-between layout-row-middle"
    //           >
    //             <div className="light-header-1">
    //               Intelligent, modern day charging solution
    //             </div>
    //           </div>
    //         </div>
    //         <div className="layout-col">
    //           <p>
    //             Anywhere, anyday, anytime solution for EVs - street parked or in
    //             private / public parking
    //           </p>
    //         </div>
    //         <div className="layout-row layout-row-space-between layout-row-middle">
    //           <div className="layout-col">
    //             <img
    //               className="home-round-image"
    //               src="\images\home-01-610x432.png"
    //               alt="images"
    //             />
    //           </div>
    //           <div className="layout-col">
    //             <div className="layout-row">
    //               <div className="layout-col home-feature-icon">
    //                 <img className="" src="" alt="" />
    //               </div>
    //               <div className="layout-col"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h1 className="swapping">SERVICES</h1>
    //   <div
    //     type="flex"
    //     className="layout-row layout-row-space-between layout-row-middle "
    //   >
    //     <div className="layout-col">
    //       <div className="f-circle-element">
    //         <div className="circle-large">
    //           <i className=""></i>
    //         </div>
    //         <div className="b-t-text"> Text 1 </div>
    //       </div>
    //     </div>
    //     <div className="layout-col">
    //       <img src="\images\home-01-610x432.png" alt="img" />
    //     </div>
    //   </div>

    //   <div
    //     type="flex"
    //     className="layout-row layout-row-space-between layout-row-middle "
    //   >
    //     <div className="layout-col">
    //       <img src="\images\home-01-610x432.png" alt="img" />
    //     </div>
    //     <div className="layout-col centered-items">
    //       <div className="f-circle-element centered-items">
    //         <div className="circle-large centered-items">
    //           <i className=""></i>
    //         </div>
    //         <div className="b-t-text"> Text 1 </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     type="flex"
    //     className="layout-row layout-row-space-between layout-row-middle "
    //   >
    //     <div className="layout-col">
    //       <div className="f-circle-element">
    //         <div className="circle-large">
    //           <i className=""></i>
    //         </div>
    //         <div className="b-t-text"> Text 1 </div>
    //       </div>
    //     </div>
    //     <div className="layout-col">
    //       <img src="\images\home-01-610x432.png" alt="img" />
    //     </div>
    //   </div>
    // </div>
  );
}
