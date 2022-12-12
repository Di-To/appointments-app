import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/booking-form.css";

// the booking form is quite straight forward as it has nothing that is particularly interesting.

export default function BookingForm() {
  const { timeSlot } = useParams();

  const genderSelection = ["male", "female", "none"];
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
  });

  const handleSelectCheck = (e) => {
    setIsSelected(e.target.value);
  };
  const handleOnCheck = (e) => {
    setIsChecked(!isChecked);
  };
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values["acceptTerms"] = isChecked;
    values["gender"] = isSelected;
    console.log(values);
    setValues({
      firstName: "",
      lastName: "",
      emailAddress: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
    });
    setIsChecked(false);
    setIsSelected("");
  };

  return (
    <div className="form-grid-container">
      <div className="form-inner-container">
        <div className="">
          <h2>Appointment Details</h2>
          <p>
            Ad nostrud esse et officia consectetur irure occaecat incididunt.
          </p>
        </div>
        <div className="input-section">
          <h3>Welcome to 20x.health</h3>
          <p> Please fill in your personal data</p>
          <p> Appointment time: {timeSlot} </p>
          <form className="form" onSubmit={handleSubmit}>
            <select
              className="every-input gender-input"
              onChange={handleSelectCheck}
              value={isSelected}
            >
              <option value="" defaultValue>
                Gender
              </option>
              <option value={genderSelection[0]}>Male</option>
              <option value={genderSelection[1]}>Female</option>
              <option value={genderSelection[2]}>Rather not say</option>
            </select>
            <div className="names-container">
              <label htmlFor="firstName" className="form-label-container  ">
                First name:
                <input
                  className="every-input name-input"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleInputChange}
                />
              </label>

              <label className="form-label-container last-name ">
                Last name:
                <input
                  className="every-input name-input "
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <label className="form-label-email-container ">
              Email address
              <input
                className="every-input"
                type="text"
                name="emailAddress"
                value={values.emailAddress}
                onChange={handleInputChange}
              />
            </label>
            <div className="birthday-div">
              <label className="label">
                {" "}
                Birthday:
                <div className="ages-div">
                  <label className="bday-label">
                    day:
                    <input
                      className="every-input bday-input"
                      type="number"
                      name="dayOfBirth"
                      value={values.dayOfBirth}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="bday-label">
                    Month:
                    <input
                      className="every-input bday-input"
                      type="number"
                      name="monthOfBirth"
                      value={values.monthOfBirth}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="bday-label">
                    Year:
                    <input
                      className="every-input bday-input"
                      type="number"
                      name="yearOfBirth"
                      value={values.yearOfBirth}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </label>
            </div>
            <div>
              <label className="terms-and-conditions">
                <input
                  className=""
                  type="checkbox"
                  name="acceptTerms"
                  value={values.acceptTerms}
                  checked={isChecked}
                  onChange={handleOnCheck}
                />
                <p className="t-and-c-text">
                  I accept the terms and conditions
                </p>
              </label>
            </div>
            <div className="form-button-container">
              <button
                onClick={() => navigate(-1)}
                className="form-button cancel-button"
              >
                Cancel
              </button>
              <Link to={"/success"}>
                <input
                  className="form-button submit-button"
                  type="submit"
                  value="Book Appointment"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
