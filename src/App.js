import "./../src/styles/app.css";
// import Main from "./components/Main";
// import Doctors from "./components/Doctors";
// import Mission from "./components/Mission";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import AppointmentPage from "./components/Appointment";
import AppointmentIntro from "./components/AppointmentIntro";
import BookingForm from "./components/BookingForm";
import Succes from "./components/Succes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/getstarted" element={<AppointmentIntro />} />
      <Route path="/booking/:treatmentId" element={<AppointmentPage />} />
      <Route
        path="/booking/:treatmentId/form/:timeSlot"
        element={<BookingForm />}
      />
      <Route path="/success" element={<Succes />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
