import React from "react";
import LogoMain from "../assets/logo_main.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="navigation-logo" src={LogoMain} />
      <ul>
        <li>Join</li>
        <li>
          <a href="#mintbox">Mintbox</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#donation">Donation</a>
        </li>
        <li>
          <a href="#sailmap">Sail Map</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#play-to-earn">Play To Earn</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
      </ul>
      {/* <div className="for_flex_hide">
        <button className="">
          <svg
            onClick={() => setToggle(!toggle)}
            width="20"
            height="20"
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
      </div>
      <div className="for_mobile">
        <ul>
          <li>Join</li>
          <li>
            <a href="#mintbox">Mintbox</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#donation">Donation</a>
          </li>
          <li>
            <a href="#sailmap">Sail Map</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#play-to-earn">Play To Earn</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
        </ul>
      </div> */}
      <button className="navigation-contactbtn">Contact Us</button>
    </nav>
  );
};

export default Navigation;
