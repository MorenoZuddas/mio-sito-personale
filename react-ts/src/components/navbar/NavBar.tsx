import React from "react";
import { Link } from "react-router-dom";
import "./navbar.module.scss";

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Chi Siamo</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;