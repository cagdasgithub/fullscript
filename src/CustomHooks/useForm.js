//The purpose of this custom hook is to validate the different text fields
//email, password and text which should be set as the name of the relevant
//text control. It returns the errors for each type. 

import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ text: "", email: "", password: "" });
  const [errors, setErrors] = useState({ text: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      let readyToSubmit = true;
      Object.values(errors).forEach(value => {
        if (value !== "") readyToSubmit = false;
      });
      if (readyToSubmit) callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
