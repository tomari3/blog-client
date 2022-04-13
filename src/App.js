import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";
import WelcomeScreen from "./components/WelcomeScreen";
import Home from "./components/Home/Home";
import SpecificPost from "./components/Post/SpecificPost";
import AllPosts from "./components/Post/AllPosts";
import AllTags from "./components/Tags/AllTags";
import SpecificTag from "./components/Tags/SpecificTag";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />

          <Route path="/home" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/posts" element={<Layout />}>
            <Route index element={<AllPosts />} />
            <Route path="/posts/:id" element={<SpecificPost />} />
          </Route>
          <Route path="/tags" element={<Layout />}>
            <Route index element={<AllTags />} />
            <Route path="/tags/:id" element={<SpecificTag />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
