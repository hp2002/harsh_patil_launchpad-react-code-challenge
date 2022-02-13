import React from "react";
import '../CSS/Navbar.css';
import { NavLink } from "react-router-dom";


export default function Navbar() {

    const linkStyle = {
        display: "inline",
        textDecoration: "none",
        backgroundColor: "#59C9A5",
        borderRadius: "2px",
        padding: "5px",
        color: "#23395B",
        boxShadow: "2px 2px 0px"
    }

    return(
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li"><NavLink style={linkStyle} to="/">Home</NavLink></li>
                <li className="navbar-li"><NavLink style={linkStyle} to="/universities">Universities</NavLink></li>
                <li className="navbar-li"><NavLink style={linkStyle} to="/plu">Postal Lookup</NavLink></li>
            </ul>
        </div>
    )
}