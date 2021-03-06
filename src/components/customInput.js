import React from "react";

function CustomInput() {
  return (
    <div className="wrapper">
      <i aria-hidden="true" className="fa fa-calendar">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2H15V0L13 0V2H5V0L3 0V2H2C0.89 2 0 2.9 0 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM4 10H9V15H4V10Z"
            fill="#6267A1"
          />
        </svg>
      </i>
      <input className="dateInput" value="Hu" type="text" />
    </div>
  );
}
export default CustomInput;
