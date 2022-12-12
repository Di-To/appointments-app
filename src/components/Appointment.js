import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/appointments.css";
import {
  IoEyeOutline,
  IoFitnessOutline,
  IoNuclearOutline,
  IoHandLeftOutline,
  IoWaterOutline,
  IoFlaskOutline,
} from "react-icons/io5";
import { treatments, practitioners } from "../mockData";
import CalendarComponent from "./Calendar";

export default function AppointmentPage() {
  // using the parameters given by the previous treatment I define which info to render.
  let { treatmentId } = useParams();
  const currentParam = parseInt(treatmentId);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDoc, setSelectedDoc] = useState(practitioners[0]);
  const [isActive, setIsActive] = useState("");
  const [calendarKey, setCalendarKey] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="appointment-container">
      <div className="inner-appointment-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <div className="appointment-details">
          <h1>Appointment Details </h1>
          <p>
            Eu proident consequat aute cillum commodo fugiat. Commodo ipsum
            cupidatat ut consectetur eu esse deserunt sunt et cupidatat.
          </p>
        </div>
        <div className="appointment-treatment">
          <div className="treatment-icon">
            {treatmentId === "1" ? (
              <IoEyeOutline />
            ) : treatmentId === "2" ? (
              <IoWaterOutline />
            ) : treatmentId === "3" ? (
              <IoFitnessOutline />
            ) : treatmentId === "4" ? (
              <IoHandLeftOutline />
            ) : treatmentId === "5" ? (
              <IoFlaskOutline />
            ) : treatmentId === "6" ? (
              <IoNuclearOutline />
            ) : null}
          </div>
          {/* In order to know which doctor is available I filter the treatment based on the params */}
          <div>
            {treatments
              .filter((service) => service.id === currentParam)
              .map((filteredTreat) => (
                <div key={filteredTreat.id}>
                  <h2>{filteredTreat.service}</h2>
                  <p>{filteredTreat.description}</p>
                  <p>{filteredTreat.duration}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="booking-options-container">
          <div className="practitioners-container">
            <h3> Who should treat you? </h3>
            {/* When I know what the treatment is, I render the doctors who are listed for that treatment. See mockdata.js file (I had to guess how a Json for booking docs look) */}
            {practitioners
              .filter((doc) => doc.treatment.includes(treatmentId))
              .map((filteredDoc, index) => (
                <div
                  className={`doctor-list-item ${
                    index === isActive ? "doctor-active-style" : null
                  }`}
                  key={filteredDoc.id}
                  onClick={() => {
                    setSelectedDoc(filteredDoc);
                    setIsActive(index);
                    setCalendarKey((key) => key + 1);
                  }}
                >
                  <div className="avatar-outer">
                    <img
                      className="doctor-avatar"
                      alt="sth"
                      src={filteredDoc.avatar}
                    ></img>
                  </div>
                  <div className="doc-description-outer">
                    <p className="doc-name">{filteredDoc.name}</p>
                    <p className="doc-description">{filteredDoc.branch}</p>
                  </div>
                </div>
              ))}
          </div>
          {/* The calendar should appear on click but I didn't manage to do that. In any case, it is dependant on the doctor that has been selected */}
          <div className="calendar-container">
            <CalendarComponent
              key={calendarKey}
              docAppoint={selectedDoc}
              value={currentDate}
              onChange={setCurrentDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
