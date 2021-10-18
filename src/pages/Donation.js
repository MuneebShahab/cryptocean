import React from "react";
import DonationLogo from "../assets/donation.svg";

const Donation = () => {
  return (
    <section id="donation" className="donation">
      <div className="donation-content">
        <h2 className="heading-primary heading-primary--purple">Donation</h2>
        <h3 className="heading-primary-sub">
          The Metaverse is Protecting The Universe.
        </h3>
        <p>
          Our ocean's marine life is racing extinction, unless we turn the tide
          urgently. The Oceanic Preservation Society collaborate with
          award-winning producers to create educational films that expose this
          extensive global threat.
        </p>
        <br />
        <p>
          Our donations to OPS are dedicated to sponsoring these films. Our
          featured tagline 'Stop killing them, start minting instead' highlights
          awareness and gives us a way to support the planet, whilst investing
          in NFT.
        </p>
      </div>
      <img src={DonationLogo} alt="" className="donation-image" />
    </section>
  );
};

export default Donation;
