import React from "react";
import Logo from "../assets/CRYPTOCEAN-LOGO-RGB_ICON.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <img src={Logo} alt="" className="about-image" />
      <div className="about-content">
        <h2 className="heading-primary heading-primary--purple">The Story</h2>
        <h3 className="heading-primary-sub">
          CryptOcean is the Underwater Ecosystem for Rare NFT art.
        </h3>
        <p>
          Our metaverse is growing every month, with limited edition ocean
          creatures, created by 3D artists. All NFT creatures can be used in our
          play to earn game, going live on cryptocean.game in 2022.
        </p>
      </div>
    </section>
  );
};

export default About;
