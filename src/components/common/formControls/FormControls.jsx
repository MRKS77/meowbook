import React from "react";
import s from "./FormControls.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta: { error }, ...props }) => {
  return (
    <textarea
      {...input}
      {...props}
      className={error ? props.className + " " + s.error : props.className}
    />
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  let hasError = touched && error;
  return (
    <div
      className={
        hasError ? props.className + " " + s.errorInput : props.className
      }
    >
      <input {...input} {...props} />
      {hasError && <div className={s.metaError}>{error}</div>}
    </div>
  );
};

export const fieldCreator = (
  component,
  name,
  placeholder,
  validators,
  type,
  className,
  props = {}
) => {
  return (
    <Field
      className={className}
      component={component}
      name={name}
      placeholder={placeholder}
      validate={validators}
      type={type}
      {...props}
    />
  );
};