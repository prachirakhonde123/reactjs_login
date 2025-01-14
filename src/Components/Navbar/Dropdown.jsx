import React from "react";
import { NavsubItem } from "./NavItem";
import { Link } from "react-router-dom";
import './Dropdown.css'
import { useState } from "react";

export default function Dropdown(){
    let [dropdown, setDropdown] = useState(false);
    return(
        <>
         <ul className={dropdown ?  "services-submenu clicked" :  "services-submenu"} onClick={()=>setDropdown(!dropdown)}>
            {NavsubItem.map((item)=>{
                return(
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={()=>setDropdown(false)}>{item.name}</Link>
                    </li>
                )
            })}

         </ul>
        </>
    )
}