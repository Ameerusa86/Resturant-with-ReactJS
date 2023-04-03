import React from "react";
import "./Reservation.css";

const Reservation = () => {
  return (
    <>
      <div className="reservation pb-0 text-warning position-absolute b-0 w-100 h-50 ">
        <div
          class="mask"
          style={{ backgroundColor: "hsla(0, 0%, 0%, 0.6)" }}
        ></div>
      </div>
      <div className="container w-100 bg-danger position-absolute mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-8 bg-warning">
            dsfgsdf
            {/* <form>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form6Example1"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example1">
                      First name
                    </label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      id="form6Example2"
                      class="form-control"
                    />
                    <label class="form-label" for="form6Example2">
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form6Example3" class="form-control" />
                <label class="form-label" for="form6Example3">
                  Company name
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="text" id="form6Example4" class="form-control" />
                <label class="form-label" for="form6Example4">
                  Address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="email" id="form6Example5" class="form-control" />
                <label class="form-label" for="form6Example5">
                  Email
                </label>
              </div>

              <div class="form-outline mb-4">
                <input type="number" id="form6Example6" class="form-control" />
                <label class="form-label" for="form6Example6">
                  Phone
                </label>
              </div>

              <div class="form-outline mb-4">
                <textarea
                  class="form-control"
                  id="form6Example7"
                  rows="4"
                ></textarea>
                <label class="form-label" for="form6Example7">
                  Additional information
                </label>
              </div>

              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form6Example8"
                  checked
                />
                <label class="form-check-label" for="form6Example8">
                  {" "}
                  Create an account?{" "}
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Place order
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
