import React from "react";

function Header({ logo }) {
  return (
    <div className="App-header">
      <h1>{logo}</h1>
      <nav className="App-nav">
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
