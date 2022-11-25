import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-parent">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="logo">
          <img src="assets/images/favicons/title.png" alt="title-logo" />
        </div>
        <div className="main-menu">
          <ul className="menu-list">
            <li>
              <a className="active" href="/#">
                <NavLink to="/">HOME</NavLink>
              </a>
            </li>
            <li>
              <a href="/#">
                <NavLink to="/About">ABOUT</NavLink>
              </a>
            </li>
            <li>
              <a href="/#">NOMINATES</a>
            </li>
            <li>
              <a className="header-links" href="/#">
                MORE
              </a>
              <ul className="drop-down-links">
                <li>
                  <a href="/#">ARTICLES</a>
                </li>
                <li>
                  <a href="/#">NEWS BREAKS</a>
                </li>
                <li>
                  <a href="/#">COMMERCIALS</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="update-menu">
          <div class="dropdown">
            <img src="assets/images/favicons/pro.png" alt="Windows Logo"/>
            <div class="dropdown-content">
            <ul className="my-profile-menus">
              <li>
                <a href="/#">Profile</a>
              </li>
              <li>
                <a href="/#">Settings</a>
              </li>
              <li>
                <a href="/SignIn">Sign In</a>
              </li>
            </ul>
            </div>
          </div>
          {/* <div className="profile-menu">
            <img src="assets/images/favicons/pro.png" alt="title-logo" />
            <ul className="my-profile-menus">
              <li>
                <a href="/#">Profile</a>
              </li>
              <li>
                <a href="/#">Settings</a>
              </li>
              <li>
                <a href="/#">Sign In</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
