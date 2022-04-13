import React from "react";
import { Link } from "react-router-dom";

function Tags() {
  return (
    <div className="tags-bar">
      <Link to="/tags/1">Tag</Link>
      <Link to="/tags/2">Tag</Link>
      <Link to="/tags/3">Tag</Link>
      <Link to="/tags/4">Tag</Link>
    </div>
  );
}

export default Tags;
