const validate = (inputs) => {
  const errors = {};

  if (!inputs.name) {
    errors.name = "Your name can't be blank";
  }

  if (!inputs.email) {
    errors.email = "Email can't be blank";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!inputs.password || inputs.password.length < 8) {
    errors.password = "Minimum 8 characters";
  }

  return errors;
};

export default validate;
