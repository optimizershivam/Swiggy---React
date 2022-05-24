import React from "react";
import logo from "../assets/logo.svg";

const info = [
  {
    icon: "person_outline",
    lable: "Sign In",
  },
  {
    icon: "shopping_bag",
    lable: "Cart",
  },
  {
    icon: "support",
    lable: "Help",
  },
  {
    icon: "search",
    lable: "Search",
  },
];
const Navbar = (props) => {
  return (
    <section className="navbar">
      <div className="container">
        <img className="logo" src={logo} />
        <div className="location">
          <span className="city">{props.city}</span>
          <span className="state">
            {props.state}, {props.country}
          </span>
        </div>
        <div className="navbar-options">
          {info.map((option, index) => (
            <div key={index} className="navbar-option">
              <span className="material-icons">{option.icon}</span>
              {option.lable}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
