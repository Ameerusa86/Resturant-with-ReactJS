import React from "react";
import "./Home.css";
import About from "../About/About";
// import Card from "../Card/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../../assets/banner-2.jpg";
import img2 from "../../assets/banner-1.jpg";
import img3 from "../../assets/banner-3.jpg";
import "@splidejs/react-splide/css";

const Home = () => {
  return (
    <>
      <div className="home position-relative">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
          }}
        >
          <SplideSlide>
            <img src={img1} alt="Image 1" />
            <div className="container position-absolute top-50 start-50 start-0 translate-middle">
              <div className="col-4 ">
                <div className="row">
                  <h1 className="text text-white text-shadow-lg">
                    our delicious
                  </h1>
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
                    className="text-white text-shadow-lg"
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
          </SplideSlide>
          <SplideSlide>
            <img src={img2} alt="Image 2" />
            <div className="container position-absolute top-50 start-50 start-0 translate-middle">
              <div className="col-4 ">
                <div className="row">
                  <h1 className="text text-white text-shadow-lg">
                    our delicious
                  </h1>
                </div>
                <div className="row">
                  <h1
                    className="title"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    the Cheese beef burger
                  </h1>
                </div>
                <div className="row">
                  <p
                    className="text-white text-shadow-lg"
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
          </SplideSlide>
          <SplideSlide>
            <img src={img3} alt="Image 3" />
            <div className="container position-absolute top-50 start-50 start-0 translate-middle">
              <div className="col-4 ">
                <div className="row">
                  <h1 className="text text-white text-shadow-lg">
                    our delicious
                  </h1>
                </div>
                <div className="row">
                  <h1
                    className="title"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Pizza
                  </h1>
                </div>
                <div className="row">
                  <p
                    className="text-white text-shadow-lg"
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
          </SplideSlide>
        </Splide>
        {/* <div className="container position-absolute top-50 start-50 start-0 translate-middle">
          <div className="col-4 ">
            <div className="row">
              <h1 className="text text-white text-shadow-lg">our delicious</h1>
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
                className="text-white text-shadow-lg"
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
        </div> */}
      </div>
      <About />
      {/* <Card /> */}
    </>
  );
};

export default Home;
