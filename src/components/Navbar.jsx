import React from "react";
import "../App.css";

// challenge: build the navbar component

function Navbar() {
  return (
    <>
      <nav>
        <div id="container">
          <img src="../public/Airbnb.png" alt="logo" />

          <ul>
            <li>
              <a href="#" className="active">
                Stays
              </a>
            </li>
            <li>
              <a href="#">Experiences</a>
            </li>
            <li>
              <a href="#">Online Experiences</a>
            </li>
          </ul>
          <div className="end-bar">
            <p>Airbnb your home</p>
            <i className="fa fa-globe"></i>
            <button>
              <i className="fa fa-bars"></i>
              <i className="fa fa-user-circle" style={{ color: "grey" }}></i>
            </button>
          </div>
        </div>
        <div className="searchbar">
          <button className="check-in" id="where-btn">
            <p>Where</p>
            <span>Search destinations</span>
          </button>
          <button className="check-out" id="in">
            <p>check-in</p>
            <span>Add dates</span>
          </button>
          <button className="check-out">
            <p>check-out</p>
            <span>Add dates</span>
          </button>
          <button className="check-in" id="who-btn">
            <p>Who</p>
            <span>Add guest</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
