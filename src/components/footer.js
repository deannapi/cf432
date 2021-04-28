import React from "react";
import chalk_culture from "../images/chalk-culture-logo-black.png";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
            <div className="copyright">
                <h5>&copy; 2012 Crossfit 432 - All Rights Reserved</h5>
            </div>
          <ul>
            <li className="instagram">
              <a
                href="https://www.instagram.com/crossfit432/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li className="facebook">
              <a
                href="https://www.facebook.com/Crossfit432/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
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
        </footer>
      </>
    );
  }
}
