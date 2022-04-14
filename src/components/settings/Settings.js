import React from "react";
// import { Link } from "react-router-dom";

export const SignForm = ({ tag }) => {
  return (
    <div className="form_wrapper">
      <form
        action="http://localhost:3000/users/signup"
        method="post"
        className="form"
      >
        <div className="form-field">
          <label htmlFor="username">username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-field">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="form-submit">
          signup
        </button>
      </form>
    </div>
  );
};

export const SettingsPage = ({ tags }) => {
  return (
    <div>
      SETTINGS
      <SignForm />
    </div>
  );
};
