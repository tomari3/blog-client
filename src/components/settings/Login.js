import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = ({ tag, set }) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPassword("");
        set(resJson);
        navigate("/home");
        console.log(resJson);
      } else {
        console.log(resJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="name-email">name or email</label>
          <input
            type="text"
            name="name-email"
            id="name-email"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="form-submit">
          login
        </button>
      </form>
    </div>
  );
};

export const LoginPage = ({ tags, set }) => {
  return (
    <main className="login-page">
      <div className="login-page_header">
        <h1>glad to see you here</h1>
      </div>
      <LoginForm set={set} />
      <span className="suggest-login">
        dont have an account?{" "}
        <Link className="underline" to="/settings/signup">
          sign up
        </Link>
      </span>
    </main>
  );
};
