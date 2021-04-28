import React from "react";

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <div className="contact">
          <h3>Contact Us</h3>
          <label>Phone: </label>
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
          <div className="googlemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2909284043576!2d-102.36837308445534!3d31.844297681263665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fbc9f6fd4c6a03%3A0xe38d6f2c5b4a94dc!2sCrossFit%20432!5e0!3m2!1sen!2sus!4v1619630764843!5m2!1sen!2sus"
              width="600"
              height="450"
              title="Crossfit 432"
              style={{ border: "0", allowfullscreen: "", loading: "lazy" }}
            ></iframe>
          </div>
        </div>
      </>
    );
  }
}
