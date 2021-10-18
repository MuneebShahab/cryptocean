import React from "react";
import footerBg from "../assets/footer-bg.png";
import twitter from "../assets/twitter-icon.png";
import discord from "../assets/discord-icon.png";
import insta from "../assets/insta-icon.png";
import LogoMain from "../assets/logo_main.svg";

const Footer = () => {
  return (
    <footer style={{ backgroundImage: `url(${footerBg})` }} className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-content-logo">
            <img src={LogoMain} alt="" />
          </div>
          <p className="footer-content-text">
            Join The Ocean <br /> Don't miss out on our limited collection of{" "}
            <br />
            Magic Staffs
          </p>
        </div>
        <div className="footer-icons">
          <div className="footer-icon-wrapper">
            <img src={twitter} alt="" />
          </div>
          <div className="footer-icon-wrapper">
            <img src={insta} alt="" />
          </div>
          <div className="footer-icon-wrapper">
            <img src={discord} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
