import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const paths = [
    { className: "nav_link", to: "/", title: "Movie" },
    { className: "nav_personal", to: "/PersonalArea", title: "Личный кабинет" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar_nav">
        {paths.map(({ title, ...e }) => (
          <li className="link">
            <NavLink {...e}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
