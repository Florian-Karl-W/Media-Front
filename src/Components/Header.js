import React, { useRef, useEffect } from "react";
import "../Styles/Header.css";
import { NavLink } from "react-router-dom";

function Header({ timeline }) {
  let logo = useRef(null);
  let menu_items = useRef(null);
  useEffect(() => {
    timeline.from(logo, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 100,
    });
    timeline.from(
      menu_items,
      {
        duration: 1,
        opacity: 0,
        y: 100,
      },
      "-=.3"
    );
  });
  return (
    <div>
      <div className="header">
        <div className="logo" ref={(el) => (logo = el)}>
          L'Alternative
        </div>
        <div className="menu">
          <ul ref={(el) => (menu_items = el)}>
            <li>
              <NavLink exact to="/" activeStyle={{ color: "red" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="Media" activeStyle={{ color: "red" }}>
                Media Listing
              </NavLink>
            </li>
            <li>
              <NavLink to="Contact" activeStyle={{ color: "red" }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
