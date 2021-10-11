import React, { useState } from "react";

import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

function DropDownDate(props) {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const { errorStyle, className, label, name } = props;

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className={errorStyle ? "error labelname" : "labelname"}
      >
        {label}
      </label>
      <div className="dropdown">
        <YearPicker
          defaultValue={"Year"}
          start={1925} // default is 1900
          end={2020} // default is current year
          reverse // default is ASCENDING
          required={true} // default is false
          disabled={false} // default is false
          value={year} // mandatory
          onChange={(year) => setYear(year)}
          id={"year"}
          name={"year"}
          classes={"dropdown-year"}
          optionClasses={"option classes"}
        />
        <MonthPicker
          defaultValue={"Month"}
          endYearGiven // mandatory if end={} is given in YearPicker
          year={year} // mandatory
          required={true} // default is false
          value={month} // mandatory
          onChange={(month) => setMonth(month)}
          id={"month"}
          name={"month"}
          classes={"dropdown-month"}
          optionClasses={"option classes"}
        />
        <DayPicker
          defaultValue={"Day"}
          year={year} // mandatory
          month={month} // mandatory
          endYearGiven // mandatory if end={} is given in YearPicker
          required={true} // default is false
          value={day} // mandatory
          onChange={(day) => setDay(day)}
          id={"day"}
          name={"day"}
          classes={"dropdown-day"}
          optionClasses={"option classes"}
        />
      </div>
    </div>
  );
}

export default DropDownDate;
