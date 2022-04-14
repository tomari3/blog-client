import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ active, func }) => {
  return (
    <aside
      onClick={func}
      className={`layout_header_open ${active ? "active" : ""}`}
    >
      <div className="layout_header_open_item">
        <Link to={"/home"}>home</Link>
      </div>
      <div className="layout_header_open_item">
        <Link to={"/posts"}>posts</Link>
      </div>
      <div className="layout_header_open_item">
        <Link to={"/settings"}>settings</Link>
        <div className="layout_header_open_sub">
          <Link to={"/settings/signup"}>signup</Link>
          <Link to={"/settings/login"}>login</Link>
        </div>
      </div>
    </aside>
  );
};

const HamburgerMenu = ({ func }) => {
  return (
    <section className="layout_header_menu-wrapper" onClick={func}>
      <aside className="layout_header_menu">
        <span></span>
        <span></span>
        <span></span>
      </aside>
    </section>
  );
};

function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="layout_header">
      <Link to={"/"}>start</Link>
      <HamburgerMenu func={() => setActive(!active)} />
      <SideMenu func={() => setActive(!active)} active={active} />
    </header>
  );
}

export default Header;
