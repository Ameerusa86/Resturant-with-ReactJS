import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <>
      <div className="reservation pb-0 text-warning position-absolute b-0 w-100 h-75 ">
        <div
          class="mask"
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }}
        ></div>
      </div>
      <div className="container  mt-5 ps-5 pe-5 ms-auto me-auto">
        <div className="row d-flex flex-wrap">
          <div className="col-lg-12 h-100">
            <form className="bg-warning ">
              <div className="row mb-4">
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      className="form-control"
                    />
                    <label
                      className="form-label text-white"
                      for="form6Example1"
                    >
                      First name
                    </label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      className="form-control"
                    />
                    <label
                      className="form-label text-white"
                      for="form6Example2"
                    >
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example3"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example3">
                  Company name
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form6Example4"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example4">
                  Address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form6Example5"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example5">
                  Email
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="number"
                  id="form6Example6"
                  className="form-control"
                />
                <label className="form-label text-white" for="form6Example6">
                  Phone
                </label>
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control"
                  id="form6Example7"
                  rows="4"
                ></textarea>
                <label className="form-label text-white" for="form6Example7">
                  Additional information
                </label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                  checked
                />
                <label className="form-check-label" for="form6Example8">
                  {" "}
                  Create an account?{" "}
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 text-white"
              >
                Place order
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
