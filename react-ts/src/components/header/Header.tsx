import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>My Website</h1>
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
