import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ openMyComponent }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="navbar-fixed">
                <div className="navBar">

                    <div className="hamburger" onClick={toggleMobileMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="clubName" id="osdc">
                        OSDC
                    </div>
                    <div
                        className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
                    >
                        <Link to='/' onClick={closeMobileMenu}>HOME</Link>
                        <a href="#about" onClick={closeMobileMenu}>ABOUT</a>
                        <a href="#contactus" onClick={closeMobileMenu}>CONTACT US</a>
                        <a href="#contactus" onClick={closeMobileMenu}>GALLERY</a>
                        <Link to='/register' onClick={closeMobileMenu}>REGISTER NOW</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;
