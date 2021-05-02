import React from "react";

export default class Schedule extends React.Component {
  render() {
    return (
      <>
        <div className="schedule">
          <table className="table caption-top">
            <caption>
              <h3>Class Schedule</h3>
            </caption>
            <thead>
              <tr>
                <th scope="col">Sunday</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sunday" rowSpan="7" valign="middle">Closed</td>
                <td>5:00 AM</td>
                <td>5:00 AM</td>
                <td>5:00 AM</td>
                <td>5:00 AM</td>
                <td>5:00 AM</td>
                <td rowSpan="7" valign="middle">Open Gym (times may vary)</td>
              </tr>
              <tr>
                <td>9:30 AM</td>
                <td>9:30 AM</td>
                <td>9:30 AM</td>
                <td>9:30 AM</td>
                <td>9:30 AM</td>
              </tr>
              <tr>
                <td>4:30 PM</td>
                <td>4:30 PM</td>
                <td>4:30 PM</td>
                <td>4:30 PM</td>
                <td>4:30 PM</td>
              </tr>
              <tr>
                <td>5:30 PM</td>
                <td>5:30 PM</td>
                <td>5:30 PM</td>
                <td>5:30 PM</td>
                <td>5:45 PM</td>
              </tr>
              <tr>
                <td>6:30 PM</td>
                <td>6:30 PM</td>
                <td>6:30 PM</td>
                <td>6:30 PM</td>
              </tr>
              <tr>
                <td>7:30 PM</td>
                <td>7:30 PM</td>
                <td>7:30 PM</td>
                <td>7:30 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="get_started">
          <button className="btn btn-primary">
            <a
              href="https://crossfit432.wodify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </button>
        </div>
      </>
    );
  }
}
