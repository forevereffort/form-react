import { useState, useEffect } from "react";

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const validationErrors = validate(inputs);

      setErrors(validationErrors);
    }
  }, [isSubmitted, inputs]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(inputs);

    setErrors(validationErrors);
    setIsSubmitted(true);
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors,
  };
};

export default useForm;
