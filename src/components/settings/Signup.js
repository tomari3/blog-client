import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const SignForm = ({ tag }) => {
  return (
    <div className="form-wrapper">
      <form action="" method="" className="form">
        <div className="form-field">
          <label htmlFor="username">name</label>
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

export const SignPage = ({ tags }) => {
  return (
    <main className="sign-page">
      <div className="sign-page_header">
        <h1>create your account and start saving, liking and commenting!</h1>
      </div>
      <SignForm />
      <span className="suggest-login">
        have an account?{" "}
        <Link className="underline" to="/settings/login">
          login
        </Link>
      </span>
    </main>
  );
};
