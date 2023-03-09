import React, {useState} from "react";
import { Link } from "react-router-dom";
import { iconMapping, sidebarJson } from "./json/navbarJson";
import { Icon } from "@blueprintjs/core";

const Nav = () => {

  const [navJason,setNavJason] = useState(sidebarJson);
  return (
    <div>
      <p>
        Sidebar Navigation list has to render here from JSON File and this will
        be imported to Sidebar
      </p>
      <br />
      <br />
      <ul className="navItems">
      {
        navJason.map((item,value) => {
          
          return(
          <li key={value}>
            {/* <Icon icon = {iconMapping[item.icon]} /> */}
            <Link to={item.path}> {item.name}</Link>
          </li>)
        }
        )
      }
      </ul>
    </div>
  );
};

export default Nav;
