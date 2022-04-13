import React from "react";
import { Link } from "react-router-dom";

function Tags() {
  return (
    <main className="App-tags">
      <div>
        <Link to="/tags/1">A Tag</Link>
        <Link to="/tags/2">A Tag</Link>
        <Link to="/tags/3">A Tag</Link>
        <Link to="/tags/4">A Tag</Link>
      </div>
    </main>
  );
}

export default Tags;
