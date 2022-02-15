import { Link ,animateScroll} from "react-scroll";
import React from 'react';
const Menu=({ menuOpen, setMenuOpen })=> {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a onClick={()=>animateScroll.scrollToTop()}
           
          >Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="projects"
            offset={-68}
          >Portfolio</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="skills"
            offset={-68}
          >Skills</Link>
        </li>
      
        <li onClick={()=>setMenuOpen(false)}>
          <a onClick={()=>animateScroll.scrollToBottom()}
         
          >Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;