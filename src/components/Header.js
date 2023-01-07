import React from "react";
import { Link } from "react-router-dom";

function Header(props){
  return (
    <div className="nav">
      <span><Link to="/">iStocks</Link></span>
      <Link to="/stocks">Stocks</Link>
      <Link to="/about">About</Link>
  </div>
  );
}

export default Header