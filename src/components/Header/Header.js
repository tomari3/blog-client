import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className="layout_header_open-menu">
      <div>
        <Link to={"/"}>1</Link>
        <Link to={"/"}>2</Link>
        <Link to={"/"}>3</Link>
      </div>
    </aside>
  );
};

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="layout_header_menu-wrapper">
      <aside className="layout_header_menu">
        <div
          onClick={() => setOpen(!open)}
          className="layout_header_menu_stripes"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </aside>
      {open ? <SideMenu /> : null}
    </section>
  );
};

function Header() {
  return (
    <header className="layout_header">
      <Link to={"/"}>start</Link>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
