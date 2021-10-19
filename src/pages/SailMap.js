import React from "react";
import SaleMapItem from "../components/SaleMapItem";
import LightHouseAnimate from "../assets/final-lighthouse.svg";
import WaveBoat from "../assets/CO-ICON_SHIP.png";

const SailMap = () => {
  return (
    <section id="sailmap" className="sailmap">
      <div className="sailmap-animate">
        <div className="boat-animate">
          <img src={WaveBoat} alt="" />
        </div>
        <div>
          <img className="lighthouse_to" src={LightHouseAnimate} alt="" />
        </div>
      </div>
      <div className="sailmap-wrapper">
        <h2 className="heading-primary">Sail Map</h2>
        <p className="heading-primary--sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nostrum illo recusandae odit, reprehenderit sunt asperiores
          perferendis dicta molestias beatae!
        </p>
        <SaleMapItem
          year={2021}
          month={"Aug"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Sep"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Oct"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Nov"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Dec"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Dec"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Dec"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Dec"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
        <SaleMapItem
          year={2021}
          month={"Dec"}
          line1={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
          }
          line2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, aliquam."
        />
      </div>
    </section>
  );
};

export default SailMap;
