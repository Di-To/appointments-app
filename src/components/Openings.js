import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/openings.css";

export default function Openings({ doctorOpenings, currentDate }) {
  const lengthVariable = doctorOpenings.length;
  const { treatmentId } = useParams();

  return (
    <div className={"openings-container"}>
      <h3>Available appointments</h3>
      <p className="current-date-element">{currentDate}</p>
      <div className={"openings-inner-container"}>
        {lengthVariable >= 1 ? (
          doctorOpenings.map((time, index) => {
            return (
              <Link to={`form/${time}`}>
                <div className={"openings-div"} key={index}>
                  {time}
                </div>
              </Link>
            );
          })
        ) : (
          <div className="no-appointments-div">
            <h4>We are very sorry!</h4>
            <p>There are no available appointments this date </p>
          </div>
        )}
      </div>
    </div>
  );
}
