import React, { useState } from "react";
import "../styles/calendar.css";
import Cell from "./Cell";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  format,
  setDate,
} from "date-fns";
import Openings from "./Openings";

export default function CalendarComponent({
  docAppoint,
  value = new Date(),
  onChange,
}) {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;
  const prefixDays = startDate.getDay();
  const sufixDays = 6 - endDate.getDay();

  const handleClickDate = (index) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  };

  const currentDate = format(value, "EEEE, LLLL dd, yyyy");
  const [openAppoint, setOpenAppoint] = useState([]);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="calendar-outer-container">
      <div className="calendar-inner-container">
        <h3>Available Dates</h3>
        {/* Full disclosure, I watched a tutorial for the calendar since I didn't know how to do it. However turned out quite well. It uses a library to set formate dates and calculate how many days should be each month */}
        <div className="calendar-grid">
          <Cell clName={"current-month"}> {format(value, "LLLL yyyy")}</Cell>

          {daysOfWeek.map((day) => (
            <Cell key={day} clName={"days-of-week"}>
              {day}
            </Cell>
          ))}

          {Array.from({ length: prefixDays }).map((_, index) => {
            return <Cell key={index} />;
          })}

          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;
            const dateA = date.toString();
            const isCurrenDate = date === value.getDate();
            let docOpenings =
              docAppoint.availableAppointments.december[`day${dateA}`];
            return (
              <Cell
                isActive={isCurrenDate}
                onClick={() => {
                  handleClickDate(index + 1);
                  setOpenAppoint(docOpenings);
                }}
                key={date}
              >
                {date}
              </Cell>
            );
          })}

          {Array.from({ length: sufixDays }).map((_, index) => {
            return <Cell key={index} />;
          })}
        </div>
      </div>
      {/* The cool part is that I adapted the calendar from doing nothing to displaying the available appointments based on the props I passed. */}

      {/* Openings show the available hours that doctors have per each date */}
      <div className="open-hours-container">
        <Openings doctorOpenings={openAppoint} currentDate={currentDate} />
      </div>
    </div>
  );
}
