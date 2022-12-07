import React, { useState, useEffect } from "react";
import {
  IoEyeOutline,
  IoFitnessOutline,
  IoNuclearOutline,
  IoHandLeftOutline,
  IoWaterOutline,
  IoFlaskOutline,
} from "react-icons/io5";
import "../styles/card-component.css";
import { useNavigate } from "react-router-dom";
import { treatments } from "../mockData";

export default function CardComponent({ setSelected }) {
  let navigate = useNavigate();

  const [treatList, setTreatList] = useState(treatments);

  return (
    <div className="treatment-container">
      {treatList.map((treatment) => (
        <div
          treatment={treatment.id}
          className="treatment-card"
          key={treatment.id}
          onClick={() => {
            navigate(`/booking/${treatment.id}`);
            setSelected(treatment.id);
          }}
        >
          <div className="treatment-icon">
            {treatment.icon === "IoEyeOutline" ? (
              <IoEyeOutline />
            ) : treatment.icon === "IoFitnessOutline" ? (
              <IoFitnessOutline />
            ) : treatment.icon === "IoNuclearOutline" ? (
              <IoNuclearOutline />
            ) : treatment.icon === "IoHandLeftOutline" ? (
              <IoHandLeftOutline />
            ) : treatment.icon === "IoWaterOutline" ? (
              <IoWaterOutline />
            ) : treatment.icon === "IoFlaskOutline" ? (
              <IoFlaskOutline />
            ) : null}
          </div>
          <div className="treatment-text">
            <h3>{treatment.service}</h3>
            <p>{treatment.description}</p>
            <p>{treatment.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
