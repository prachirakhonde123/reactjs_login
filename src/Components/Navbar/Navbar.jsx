import React from "react";
import { Link } from "react-router-dom";
import * as Icons from 'react-icons/fa';
import './Navbar.css';
import { NavItem } from "./NavItem";
import ButtonLink from "./Button";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Navbar(){
    let [dropdown,setDropdown] = useState(false);
    return(
        <>
          <nav className="navbar">
            <Link to="/" className="navbar-logo">
                NATURE
                <Icons.FaTree/>
            </Link>
            <ul className="nav-items">
                {NavItem.map((item)=>{
                    if(item.name === "About Us"){
                        return(
                            <li key={item.id} className={item.cName} onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
                                <Link to={item.path}>{item.name}</Link>
                                {dropdown && <Dropdown/>}
                            </li>
                        );
                    }
                    return(
                    <li key={item.id} className={item.cName}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                    );
                })}
            </ul>
            <ButtonLink/>
          </nav> 
        </>
    )
}

export default Navbar;  