import React from "react";
// import MainHeader from "./MainHeader";
// import { Link } from "react-router-dom";
// import NavLinks from "./NavLinks";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  return <aside className="side-drawer">{props.children}</aside>;
};

export default SideDrawer;
