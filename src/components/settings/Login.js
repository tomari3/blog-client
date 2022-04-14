import React from "react";
import { Link } from "react-router-dom";

export const LoginForm = ({ tag }) => {
  return (
    <div className="form-wrapper">
      <form
        action="http://localhost:3000/users/signup"
        method="post"
        className="form"
      >
        <div className="form-field">
          <label htmlFor="name-email">name or email</label>
          <input type="text" name="name-email" id="name-email" />
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="form-submit">
          login
        </button>
      </form>
    </div>
  );
};

export const LoginPage = ({ tags }) => {
  return (
    <main className="login-page">
      <div className="login-page_header">
        <h1>glad to see you here</h1>
      </div>
      <LoginForm />
      <span className="suggest-login">
        dont have an account?{" "}
        <Link className="underline" to="/settings/signup">
          sign up
        </Link>
      </span>
    </main>
  );
};
