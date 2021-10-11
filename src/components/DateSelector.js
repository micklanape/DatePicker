import React from "react";
import DatePicker from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import css from "react-datepicker/dist/react-datepicker.css";

/**
 *
 * @param {string} dateFormat - Its the prop used for setting the date format
 * @param {string} placeHolder - Its the text used for setting the placeholder of the date field
 * @param {string} label - Its the text used for the label of the date field
 * @param {string} name - Its the parameter used to control the date function.
 */
function customHeader(props, headerText) {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  } = props;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <div className="customHeader">
      <span className="customDescription">Select date</span>
      <div className="navigation-header>">
        <button
          className="right-arrow"
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 11.9554L3.05533 6.99995L8 2.04448L6.47773 0.522217L-6.43548e-07 6.99995L6.47773 13.4777L8 11.9554Z"
              fill="#6267A1"
            />
          </svg>
        </button>
        <span className="month-navigation">
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
        <button
          className="right-arrow"
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.arrowIcon}
          >
            <path
              d="M1.3634e-07 2.04458L4.94467 7.00005L1.81529e-08 11.9555L1.52227 13.4778L8 7.00005L1.52227 0.522318L1.3634e-07 2.04458Z"
              fill="#6267A1"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const CustomInput = React.forwardRef((props, ref) => {
  const { errorStyle } = props;

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

function DateSelector(props) {
  const {
    dateFormat,
    headerText,
    errorStyle,
    placeHolder,
    label,
    name,
    ...rest
  } = props;

  return (
    <div className="form-control">
      <label
        htmlFor={name}
        className={errorStyle ? "error labelname" : "labelname"}
      >
        {label}
      </label>

      <div className="test">
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;

            return (
              <DatePicker
                id={name}
                {...field}
                {...rest}
                disabledKeyboardNavigation={false}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
                dateFormat={dateFormat}
                calendarStartDay={1}
                className={errorStyle ? "errorMsg" : ""}
                placeholderText={placeHolder}
                customInput={<CustomInput errorStyle={errorStyle} />}
                renderCustomHeader={customHeader}
              />
            );
          }}
        </Field>

        {errorStyle && (
          <div className="erroricon">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.873779C4.48 0.873779 0 5.35378 0 10.8738C0 16.3938 4.48 20.8738 10 20.8738C15.52 20.8738 20 16.3938 20 10.8738C20 5.35378 15.52 0.873779 10 0.873779ZM11 15.8738H9V13.8738H11V15.8738ZM11 11.8738H9V5.87378H11V11.8738Z"
                fill="#B00020"
              />
            </svg>
          </div>
        )}
      </div>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default DateSelector;
