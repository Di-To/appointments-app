import "./../src/styles/app.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import AppointmentPage from "./components/Appointment";
import AppointmentIntro from "./components/AppointmentIntro";
import BookingForm from "./components/BookingForm";
import Succes from "./components/Succes";

function App() {
  return (
    //the most important part! I'm building param over param to filter data. In case you're not too familiar with react-router-dom I'll be glad to explain how my routes are built :)
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
