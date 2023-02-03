import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = (): JSX.Element => {
  return (
    <div className="headerWrapper">
      <nav className="nav-bar">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navLink")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "navLink")}
          to="brandnames"
        >
          Brands
        </NavLink>
      </nav>
    </div>
  );
};
