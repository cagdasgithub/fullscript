export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  } else {
    errors.email = "";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else {
    errors.password = "";
  }
  if (!values.text) {
    errors.text = "Text is required";
  } else {
    errors.text = "";
  }

  return errors;
}
