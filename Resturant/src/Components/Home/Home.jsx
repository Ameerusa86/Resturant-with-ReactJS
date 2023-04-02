import React from "react";
import "./Home.css";
import About from "../About/About";
// import Card from "../Card/Card";

const Home = () => {
  return (
    <>
      <div className="home position-relative">
        <div className="container position-absolute top-50 start-50 start-0 translate-middle">
          <div className="col-4 ">
            <div className="row">
              <h1 className="text text-white">our delicious</h1>
            </div>
            <div className="row">
              <h1
                className="title"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                the beef burger
              </h1>
            </div>
            <div className="row">
              <p
                className="text-white"
                data-aos="zoom-in"
                data-aos-duration="2000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, possimus.
              </p>
            </div>
            <button
              className="btn btn-rounded btn-large bg-danger text-white"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <About />
      {/* <Card /> */}
    </>
  );
};

export default Home;
