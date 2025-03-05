import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Benvenuto nel mio sito!</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
};

export default Header;
