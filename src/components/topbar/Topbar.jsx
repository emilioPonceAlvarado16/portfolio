import { Link, animateScroll } from "react-scroll";
import React from 'react';
const Topbar=({ menuOpen, setMenuOpen })=> {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a onClick={()=>animateScroll.scrollToTop()}
          className="logo">It's me.
          </a>
          <div className="itemContainer">
            <a onClick={()=>window.open("https://wa.me/+593968913869")}>
            <i className="fa fa-phone" />
            <span>+593 96 891 3869</span>
            </a>
          </div>
          <div className="itemContainer">
            <i className="fa fa-email" />
            <span>ieponce@espol.edu.ec</span>
          </div>
      
          

        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;