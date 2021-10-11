import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";

/**
 *
 * @param {string} dateFormat - Its the prop used for setting the date format
 * @param {string} placeHolder - Its the text used for setting the placeholder of the date field
 * @param {string} label - Its the text used for the label of the date field
 * @param {string} name - Its the parameter used to control the date function.
 */
const CustomInput = React.forwardRef((props, ref) => {
  const { errorStyle } = props;

  console.log({ errorStyle });

  return (
    <div className="customInput">
      <label onClick={props.onClick}>{props.value || props.placeholder}</label>
      <div className="calendarOpen" onClick={props.onClick} ref={ref}>
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2H15V0L13 0V2H5V0L3 0V2H2C0.89 2 0 2.9 0 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM4 10H9V15H4V10Z"
            fill={errorStyle ? "red" : "#6267A1"}
          />
        </svg>
      </div>
    </div>
  );
});
function DateRangeSelector(props) {
  const {
    dateFormat,
    placeHolder,
    errorStyle,
    labelStart,
    labelEnd,
    name,
    ...rest
  } = props;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  console.log(startDate);
  console.log(endDate);
  return (
    <div className="form-control">
      <Field name={name}>
        {({ field }) => {
          return (
            <>
              <label htmlFor={name}>{labelStart}</label>
              <DatePicker
                id={name}
                {...field}
                {...rest}
                selected={startDate}
                onChange={(startDate) => setStartDate(startDate)}
                format={dateFormat}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                calendarStartDay={1}
                className={errorStyle ? "errorMsg" : ""}
                placeholderText={placeHolder}
                customInput={<CustomInput errorStyle={errorStyle} />}
              />
              <label htmlFor={name}>{labelEnd}</label>
              <DatePicker
                id={name}
                {...field}
                {...rest}
                selected={endDate}
                onChange={(endDate) => setEndDate(endDate)}
                format={dateFormat}
                calendarStartDay={1}
                className={errorStyle ? "errorMsg" : ""}
                placeholderText={placeHolder}
                customInput={<CustomInput errorStyle={errorStyle} />}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </>
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default DateRangeSelector;
