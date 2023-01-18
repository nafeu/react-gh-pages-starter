import React from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

const Navigation = ({ pages }) => (
  <div className="navigation">
    {pages.filter(({ hidden }) => !hidden).map(({ name, path }) => (
      <NavLink
        key={name}
        className={({ isActive, isPending }) => {
          return isActive ? "navigation-active" : isPending ? "navigation-pending" : "";
        }}
        to={path}
      >
        {name}
      </NavLink>
    ))}
  </div>
);

export default Navigation;
