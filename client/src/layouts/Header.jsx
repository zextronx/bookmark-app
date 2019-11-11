import React from "react";
import { NavLink } from "react-router-dom";

export default props => {
  return (
    <div className="header">
      <span className="logo">
        CompanyLogo
      </span>
      <div className="header-right">
        <NavLink exact  to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/bookmarks" activeClassName="active">Bookmarks</NavLink>
      </div>
    </div>
  );
};
