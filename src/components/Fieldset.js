import React from "react";
import { Field, ErrorMessage } from "formik";

export function Fieldset({ name, label, ...rest }) {
  return (
    <div className="form-group">
      <label className="mb-0 small text-uppercase text-primary" htmlFor={name}>
        {label}
      </label>
      <Field id={name} name={name} className="form-control" {...rest} />
      <ErrorMessage name={name} className="text-danger small" component="div" />
    </div>
  );
}
