import { useState } from "react";
import useForm from "./customHooks";
import validate from "./validate";

function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    {
      name: "",
      email: "",
      password: "",
    },
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className={`login-form-row ${errors.name ? "input-error" : ""}`}>
        <div className="login-form-input">
          <input
            type="text"
            placeholder=" "
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
          />
          <label htmlFor="username">Your name</label>
        </div>
        {errors.name && <div className="login-form-error">{errors.name}</div>}
      </div>
      <div className={`login-form-row ${errors.email ? "input-error" : ""}`}>
        <div className="login-form-input">
          <input
            type="text"
            placeholder=" "
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
          />
          <label htmlFor="email">Email address</label>
        </div>
        {errors.email && <div className="login-form-error">{errors.email}</div>}
      </div>
      <div className="login-form-row">
        <div className="login-form-select">
          <select>
            <option value="0">I would describe my user type as</option>
            <option value="1">Developer</option>
          </select>
        </div>
      </div>
      <div
        className={`login-form-row has-form-helper ${
          errors.password ? "input-error" : ""
        }`}
      >
        <div className="login-form-input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder=" "
            data-validation="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
          <label htmlFor="password">Password</label>
          <div
            className="password-show"
            onClick={() => setShowPassword(!showPassword)}
          ></div>
        </div>
        <div className="login-form-helper">Minimum 8 characters</div>
      </div>
      <div className="login-form-submit-row">
        <input type="submit" value="Next" />
      </div>
    </form>
  );
}

export default Form;
