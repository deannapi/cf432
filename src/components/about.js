import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="price">
          <h3>Price</h3>
          <div className="container">
            <div className="row align-items-center">
              <div className="card">
                <div className="card-header">Unlimited</div>
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
            </div>

            <div className="row align-items-center">
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
            </div>
          </div>
        </div>
        {/* end of cards */}
        <div>
          <h3>
            <Link to="/">Get Started</Link>
          </h3>
        </div>
      </>
    );
  }
}
