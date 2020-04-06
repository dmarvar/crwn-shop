import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  signInWithGoogleStart,
  signInWithEmailStart
} from "../../redux/user/user.action";

import "./sign-in.styles.scss";

const SignIn = ({ signInWithGoogle, signInWithEmail }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async event => {
    event.preventDefault();
    signInWithEmail(userCredentials);
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Google Sign in{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(signInWithGoogleStart()),
  signInWithEmail: emailAndPassword =>
    dispatch(signInWithEmailStart(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignIn);
