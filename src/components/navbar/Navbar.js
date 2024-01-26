import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

//     Links Menu List
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#WhatGPT3">What is GPT?</a>
    </p>
    <p>
      <a href="#Possibility">Open AI</a>
    </p>
    <p>
      <a href="#Features">Case Studies</a>
    </p>
    <p>
      <a href="#Blogs">Libraries</a>
    </p>
  </>
);

//  Main Function
function Navbar() {
  // UseState for sidebar
  const [toogle, setToogle] = useState(false);
  return (

    //  main navbar container
    <div className="gpt_nav">

      {/* // big screen links and logo */}
      <div className="gpt_nav_links">

        {/* logo  */}
        <div className="gpt_nav_links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Links  */}
        <div className="gpt_nav_links_container">
          <Menu />
        </div>
      </div>

      {/* sign buttons */}

      <div className="gpt_nav_sign">
        <p>Sign In</p>
        <p>
          <button type="button">Sign Up</button>
        </p>
      </div>

      {/* Side Bar */}

      <div className="gpt_nav_manu ">
        {toogle ? (
          <RiCloseLine
            color="#fff"
            size={20}
            onClick={() => setToogle(false)}
          />
        ) : (
          <RiMenu3Line color="#fff" size={20} onClick={() => setToogle(true)} />
        )}
        {toogle && (
          <div className="gpt_nav_manu_container scale-up-center">
            
            <div className="gpt_nav_manu_container_links">
              <Menu />

              <div className="gpt_nav_manu_container_sign">
                <p>Sign In</p>
                <p>
                  <button type="button">Sign Up</button>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
