import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const SignForm = ({ tag }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      });

      const resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
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
          <label htmlFor="username">name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
