import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./components/Home/Home";
import SpecificPost from "./components/Post/SpecificPost";
import AllPosts from "./components/Post/AllPosts";
import AllTags from "./components/Tags/AllTags";
import SpecificTag from "./components/Tags/SpecificTag";
import { LoginPage } from "./components/settings/Login";
import { SignPage } from "./components/settings/Signup";
import { SettingsPage } from "./components/settings/Settings";
import { PostFormPage } from "./components/Post/Post";

function App() {
  const [authData, setAuthData] = useState("");

  const changeAuthState = (data) => {
    setAuthData(data);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />

          <Route path="/home" element={<Layout />}>
            <Route index element={<Home authData={authData} />} />
          </Route>
          <Route path="/settings" element={<Layout />}>
            <Route index element={<SettingsPage />} />
            <Route path="signup" element={<SignPage />} />
            <Route path="login" element={<LoginPage set={changeAuthState} />} />
          </Route>
          <Route path="/posts" element={<Layout />}>
            <Route index element={<AllPosts />} />
            <Route
              path="/posts/new"
              element={<PostFormPage authData={authData} />}
            />
            <Route path="/posts/:id" element={<SpecificPost />} />
          </Route>
          <Route path="/tag" element={<Layout />}>
            <Route index element={<AllTags />} />
            <Route path="/tag/:id" element={<SpecificTag />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
