import React from "react";
import DateSelector from "./DateSelector";
import DateRangeSelector from "./DateRangeSelector";
import ArabicDatePicker from "./ArabicDatePicker";
import DropDownDate from "./DateDropDownPicker";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "date":
      return <DateSelector {...rest} />;
    case "DateRange":
      return <DateRangeSelector {...rest} />;
    case "arabicDate":
      return <ArabicDatePicker {...rest} />;
    case "dropdownDate":
      return <DropDownDate {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
