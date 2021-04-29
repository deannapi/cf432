import React from "react";
import selfie from "../images/selfie.jpg";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <p>
            Crossfit 432 is independently owned and operated by Coach Justin
            Granado.
          </p>
          <img src={selfie} alt="Coach" id="selfie" />
        </div>

        <div className="price">
          <h3>Pricing</h3>
          <div className="container">
            <div className="row align-items-center">
              <div className="card">
                <div className="card-header">General</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$150</h6>
                  <p className="card-text">
                    Month To Month <br /> Unlimited access to classes
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Discounted</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$120</h6>
                  <p className="card-text">
                    Month To Month <br /> Unlimited access to classes
                    <br />
                    <li>Students</li>
                    <li>Teachers</li>
                    <li>Emergency Personnel</li>
                    <li>Military</li>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Couples</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$240</h6>
                  <p className="card-text">
                    Month To Month <br /> Unlimited access to classes <br />{" "}
                    <li>Couples</li>
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="card">
                <div className="card-header">Family</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$300</h6>
                  <p className="card-text">
                    Month To Month <br /> Unlimited access to classes
                    <br />
                    <li>Family of 3</li>
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Drop-In</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$20</h6>
                  <p className="card-text">
                    One workout - drop-in session.
                    <br />
                    Whether you are traveling or just want to try us out, we
                    would love to have you join us for a workout!
                    <br />
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">Personal Training</div>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 ">$55</h6>
                  <p className="card-text">
                    One-on-one training session.
                    <br />
                    Programming designed to fit your specific needs. <br />{" "}
                    These may also be purchased in bundles of 8, 10, or 12
                    sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of cards */}
        <div className="get_started">
          <button className="btn btn-primary">
            <a href="/schedule">
              View class schedule
            </a>
          </button>
        </div>
      </>
    );
  }
}
