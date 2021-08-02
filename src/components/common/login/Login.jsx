import React from "react";
import { reduxForm } from "redux-form";
import { withProfileRedirect } from "../../../hoc/withProfileRedirect";
import { fieldCreator, Input } from "../formControls/FormControls";
import s from "./Login.module.css";
import { required } from "../../../utils/validators/validators";
import { compose } from "redux";
import { connect } from "react-redux";
import { login } from "../../../redux/authReducer";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form className={s.mainForm} onSubmit={handleSubmit}>

      {error && <div className={s.error}>{error}</div>}

      <label name='email' className={s.lab}>Email:</label>{fieldCreator(Input, "email", "Email", [required], null, s.logpas)}
      <label name='password' className={s.lab}>Password:</label>{fieldCreator(
        Input,
        "password",
        "Password",
        [required],
        "password",
        s.logpas
      )}

      <div className={s.remember}><label className={s.remText}>
        {fieldCreator(Input, "rememberMe", null, null, "checkbox", s.check)}
        Remember me</label>
      </div>

      {captchaUrl && (
        <div className={s.captchaBox}>
          <img src={captchaUrl} alt="captcha" className={s.captcha} />
          {fieldCreator(Input, "captcha", 'Type the characters', [required], null, s.logpas)}
        </div>
      )}

      <div>
        <button className={s.logbut}>Log In</button>
      </div>

    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = ({ login, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData);
  };

  return (
    <div className={s.main}>
      <h1>Log In</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
});

export default compose(
  withProfileRedirect,
  connect(mapStateToProps, { login })
)(Login);
