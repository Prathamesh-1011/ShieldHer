import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "./Navbar.css";

function Navbar() {
  // To Manage State when Side Navbar is open or not
  const [isBurgerActive, setisBurgerActive] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // For Side Navbar opening animation
  let counter = 0;

  //To find whether the device is Phone or not
  const isPhone = window.innerWidth < 480 ? true : false;

  return (
    <nav>
      {/* It will Conatain  logo */}
      <Link to="/" className="logo">
        {" "}
      
      </Link>

      {/* It will contain the BRC text  */}
      

      {/* It will conatin Navigation elements */}
      <ul
        style={
          isPhone ? (isBurgerActive ? { right: "0px" } : { right: "-62%" }) : {}
        }
      >
        <NavLink to="/">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
            Home
          </li>
        </NavLink>
        <NavLink to="/download">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-calendar-check"
              style={{ color: "#ffffff" }}
            ></i>
           Download
          </li>
        </NavLink>
        {/* <NavLink to="/team">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-people-group"
              style={{ color: "#ffffff" }}
            ></i>
            TEAM
          </li>
        </NavLink> */}

        {/* <NavLink to="/blogs">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-file-pen"
              style={{ color: "#ffffff" }}
            ></i>
            BLOGS
          </li>
        </NavLink> */}

        <NavLink to="/contact">
          <li
            onClick={() => {
              setisBurgerActive(false);
            }}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-address-book"
              style={{ color: "#ffffff" }}
            ></i>
            Contact Us
          </li>
        </NavLink>
            {
              isAuthenticated && (
                <NavLink>
                  <li>
                    <p>{user.name}</p>
                  </li>
                </NavLink>
              )
            }
            {
              isAuthenticated ? (<NavLink >
              <li
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                style={
                  isPhone
                    ? isBurgerActive
                      ? { transform: `translateX(0%)` }
                      : { transform: `translateX(${100 * ++counter}%)` }
                    : {}
                }
              >
                <i
                  className="fa-solid fa-address-book"
                  style={{ color: "#ffffff" }}
                ></i>
                Logout
              </li>
            </NavLink>
              )
              : (
                <NavLink >
          <li
            onClick={() => loginWithRedirect()}
            style={
              isPhone
                ? isBurgerActive
                  ? { transform: `translateX(0%)` }
                  : { transform: `translateX(${100 * ++counter}%)` }
                : {}
            }
          >
            <i
              className="fa-solid fa-address-book"
              style={{ color: "#ffffff" }}
            ></i>
            Login
          </li>
        </NavLink>
              )
            }
      </ul>

      {/* Burger to open Side Navbar when devive is Phone */}
      <div
        className="burger"
        onClick={() => {
          setisBurgerActive(!isBurgerActive);
        }}
      >
        <div
          className="top"
          style={
            isBurgerActive
              ? { transform: "rotate(45deg) translateY(8px)" }
              : { transform: "rotate(0deg) translateY(0%)" }
          }
        ></div>
        <div
          className="middle"
          style={
            isBurgerActive
              ? { transform: "translateX(500%)" }
              : { transform: "translateX(0%)" }
          }
        ></div>
        <div
          className="bottom"
          style={
            isBurgerActive
              ? { transform: "rotate(-45deg) translateY(-8px)" }
              : { transform: "rotate(0deg) translateY(0%)" }
          }
        ></div>
      </div>
    </nav>
  );
}

export default Navbar;
