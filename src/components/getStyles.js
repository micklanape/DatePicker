import { getIn } from "formik";

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: "1px solid red"
    };
  }
}
export default getStyles;
