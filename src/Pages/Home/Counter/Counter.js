import { faCheck, faCoffee, faSmile, faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="row">
        <div className="column">
          <div className="card">
            <p>
              <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
            </p>
            <h3>11+</h3>
            <p>Partners</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <p>
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </p>
            <h3>55+</h3>
            <p>Projects</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <p>
              <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
            </p>
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <p>
              <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </p>
            <h3>100+</h3>
            <p>Meetings</p>
          </div>
        </div>
      </div>
  );
};

export default Counter;
