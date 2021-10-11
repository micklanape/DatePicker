import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    NormalDate: "",
    UsDate: ""
  };
  const validationSchema = Yup.object({
    NormalDate: Yup.date().required("This field is mandatory").nullable(),
    UsDate: Yup.date().required("This field is mandatory").nullable()
  });
  // const onSubmit = (values) => {
  //   console.log("Form data", values);
  //   console.log("Saved data", JSON.parse(JSON.stringify(values)));
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors }) => (
        <Form>
          <FormikControl
            control="date"
            label="Select date"
            name="NormalDate"
            placeHolder="dd/mm/yyyy"
            dateFormat="dd/MM/yyyy"
            errorStyle={errors.NormalDate}
            headerText="Select Date"
          />
          {/* <FormikControl
            control="date"
            label="Select date (US Format)"
            name="NormalDate"
            placeHolder="mm/dd/yyyy"
            dateFormat="MM/dd/yyyy"
            errorStyle={errors.NormalDate}
          />
          <FormikControl
            control="DateRange"
            labelStart="From date"
            labelEnd="To Date"
            name="NormalDate"
            placeHolder="mm/dd/yyyy"
            dateFormat="MM/dd/yyyy"
            errorStyle={errors.NormalDate}
          />
          <FormikControl
            control="arabicDate"
            label="Select arabic date"
            name="NormalDate"
            placeHolder="yyyy/MM/dd"
            dateFormat="yyyy/MM/dd"
            errorStyle={errors.NormalDate}
          /> */}
          <FormikControl
            control="dropdownDate"
            label="Choose date (US Format)"
            name="NormalDate"
            className="dropdown-picker"
          />
          <FormikControl
            control="dropdownDate"
            label="Choose date (Arabic Format)"
            name="NormalDate"
            className="arabic-dropdown-picker"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
