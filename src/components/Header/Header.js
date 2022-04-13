import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <Link to="/home">Home</Link>
    </header>
  );
}

export default Header;
