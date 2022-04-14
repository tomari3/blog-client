import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleItem = ({ item, items }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.stopPropagation();

    setActive(!active);
  };

  const itemsList = items.map((sub, i) => {
    return (
      <div key={i} className="layout_header_open_item">
        <Link to={`/${item}/${sub}`}>{sub}</Link>
      </div>
    );
  });

  return (
    <div className="layout_header_open_item container">
      <div className={`layout_header_open_list  ${active ? "active" : ""}`}>
        <Link to={`/${item}`}>{item}</Link>
        <span onClick={handleToggle}></span>
      </div>
      <div className="layout_header_open_sub">{itemsList}</div>
    </div>
  );
};

const SideMenu = ({ active, func }) => {
  return (
    <aside
      onClick={func}
      className={`layout_header_open ${active ? "active" : ""}`}
    >
      <div className="layout_header_open_item">
        <Link to={"/home"}>home</Link>
      </div>
      <ToggleItem item={"posts"} items={["search", "liked", "saved"]} />
      <ToggleItem item={"settings"} items={["signup", "login"]} />
    </aside>
  );
};

const HamburgerMenu = ({ active, func }) => {
  return (
    <section
      className={`layout_header_menu-wrapper ${active ? "active" : ""}`}
      onClick={func}
    >
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

  const toggle = () => {
    setActive(!active);
  };

  return (
    <header className="layout_header">
      <Link onClick={active ? toggle : null} to={"/home"}>
        start
      </Link>
      <HamburgerMenu func={toggle} active={active} />
      <SideMenu func={toggle} active={active} />
    </header>
  );
}

export default Header;
