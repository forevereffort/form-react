import Form from "./Form";

function App() {
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-row">
          <div className="login-form-col">
            <div className="login-form-step">
              <div className="login-form-step-label">Step 1 of 3</div>
              <div className="login-form-step-dots">
                <span className="active"></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="login-form-wrapper">
              <h1>Let’s set up your account</h1>
              <div className="login-form-top-des">
                <p>
                  Already have an account? <a href="/sign-in">Sign in</a>
                </p>
              </div>
              <Form />
              <div className="login-form-bottom-des">
                <p>
                  By clicking the “Next” button, you agree to creating a free
                  account, and to <a href="/terms">Terms of Service</a> and{" "}
                  <a href="/privacy-policy">Privacy Policy.</a>
                </p>
              </div>
            </div>
          </div>
          <div className="login-des-col">
            <div className="login-des">
              <h2>Dummy Heading</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
