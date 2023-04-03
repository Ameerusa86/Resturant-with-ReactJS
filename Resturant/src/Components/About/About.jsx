import React from "react";
import "./About.css";
import Reservation from "../Reservation/Reservation";

const About = () => {
  return (
    <>
      <section className="top-section  ">
        <div className="about text-danger d-flex flex-column ">
          <div className="container about-info-top rounded-6 container-lg d-flex pb-0">
            <div className="about_container">
              <div className="row">
                <div className="container ">
                  <div className="info main-title style-two wow fadeIn d-flex align-items-center justify-content-center p-4">
                    <div className="col-md-6  mb-md-0">
                      <h5>good and health life</h5>
                      <h2 className="pb-0">
                        we served the best <span>food</span> in town
                      </h2>
                    </div>
                    <div className="col-md-6 ">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil sit nemo voluptas modi beatae amet, enim aut
                        dolorum neque ducimus exercitationem nisi quis quod
                        facilis, repellat sed perspiciatis? Minima, magni.
                      </p>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        facilis, repellat sed perspiciatis? Minima, magni.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about d-flex flex-column pb-0 pt0">
            <div className="about_container about-info-bottom rounded-6 container-lg d-flex">
              <div className="bars">
                <div className="container container-lg d-flex ">
                  <div className="row rounded-6 justify-content-centert d-flex">
                    <div className="col-12 my-auto">
                      <div className="row w-100 pr-2">
                        <div className="col-lg-6 col-5">
                          <div className="skills alt-font">
                            <div className="prog-item">
                              <p>Fresh &amp; Organic</p>
                              <div className="progress">
                                <span
                                  className="progress-bar"
                                  data-value="88%"
                                  style={{ width: "88%" }}
                                ></span>
                              </div>
                            </div>
                            <div className="prog-item ">
                              <p className="text-shadow">Easy Reservation</p>
                              <div className="progress">
                                <span
                                  className="progress-bar bg-success"
                                  data-value="75%"
                                  style={{ width: "75%" }}
                                ></span>
                              </div>
                            </div>
                            <div className="prog-item mb-lg-0">
                              <p>Quality Cuisine</p>
                              <div className="progress">
                                <span
                                  className="progress-bar"
                                  data-value="96%"
                                  style={{ width: "96%" }}
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-5">
                          <div className="skills alt-font">
                            <div className="prog-item">
                              <p>Professional Staff</p>
                              <div className="progress">
                                <span
                                  className="progress-bar bg-success"
                                  data-value="85%"
                                  style={{ width: "85%" }}
                                ></span>
                              </div>
                            </div>
                            <div className="prog-item">
                              <p>24/7 Food Delivery</p>
                              <div className="progress">
                                <span
                                  className="progress-bar bg-danger"
                                  data-value="97%"
                                  style={{ width: "97%" }}
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Reservation />
    </>
  );
};

export default About;
