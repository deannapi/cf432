import React from "react";
import chalk_culture from "../images/chalk-culture-logo-black.png";
import deannapi from "../images/deannapi.jpg";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="copyright">
            <h5>&copy; 2021 Crossfit 432 - All Rights Reserved</h5>
            <h5>Crossfit 432 Est. 2012</h5>
          </div>
          <div className="phone">
            <a href="tel:14327701195">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-telephone-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                />
              </svg>
              432.770.1192
            </a>
          </div>
          <div>
            <ul>
              <li className="instagram">
                <a
                  href="https://www.instagram.com/crossfit432/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="facebook">
                <a
                  href="https://www.facebook.com/Crossfit432/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.chalkculture.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chalk_culture} alt="" id="chalk_cult" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6>
              Website by{" "}
              <a
                href="https://www.deannapi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={deannapi} alt="DeAnna Barker" id="deannapi" />
                DeAnna Barker
              </a>
            </h6>
          </div>
        </footer>
      </>
    );
  }
}
