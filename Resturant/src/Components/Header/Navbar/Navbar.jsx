import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css";
import { motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const SideMenu = () => {
    setMobile(!mobile);
  };

  const Navigation = () => {
    if (window.scrollY >= 30) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };
  console.log(window.scrollY);
  window.addEventListener("scroll", Navigation);

  return (
    <div
      className={
        showNavbar
          ? "navbar nav-radius navbar-expand-lg active position-sticky"
          : "navbar nav-radius navbar-expand-lg position-absolute"
      }
    >
      <div className="container ">
        <Link to="/" className="navbar-brand text-white">
          BRAND
        </Link>
        {/* NAV LINKS */}

        <div className="navbar-nav ml-auto links collapse navbar-collapse">
          <Link to="/" className="nav-link text-white">
            Home
          </Link>
          <Link to="/about" className="nav-link text-white">
            About
          </Link>
          <Link to="/contact" className="nav-link text-white">
            Reservation
          </Link>
          <Link to="/reservation" className="nav-link text-white">
            Our Menu
          </Link>
          <Link to="/menu" className="nav-link text-white">
            Our Blog
          </Link>
          <Link to="/blog" className="nav-link text-white"></Link>
        </div>

        <div>
          <span className="open_search text-white">
            <AiOutlineSearch className="collapse navbar-collapse" />
          </span>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          onClick={() => setMobile(!mobile)}
        >
          <span class="text-white">
            <FaHamburger />
          </span>
        </button>
        {/* Side Menu */}
        {mobile && (
          <motion.div
            className="side-menu side-menu-active"
            animate={{ x: [null, 100, 0] }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
          >
            <div className="inner-wrapper">
              <span
                className="btn-close link"
                onClick={() => setMobile(!mobile)}
              ></span>

              <nav className="side-nav w-100">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Reservation</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Our Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Our Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
