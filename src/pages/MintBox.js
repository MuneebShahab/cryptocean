import React from "react";
import render_1 from "../assets/render_1.svg";
// import minusBtn from "../assets/minus.png";
// import addBtn from "../assets/add.png";

const MintBox = () => {
  return (
    <section id="mintbox" className="mintbox">
      <div className="mintbox-margin"></div>
      <div className="mintbox-box">
        <div className="mintbox-clock">
          <div>
            <p>Day</p>
            <p>3</p>
          </div>
          <p className="colun">:</p>
          <div>
            <p>Hour</p>
            <p>16</p>
          </div>
          <p className="colun">:</p>
          <div>
            <p>Minutes</p>
            <p>30</p>
          </div>
          <p className="colun">:</p>
          <div>
            <p>Seconds</p>
            <p>50</p>
          </div>
        </div>
        <h2>Mint Box</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem quam
          recusandae tempora pariatur? Consectetur omnis accusantium at
          praesentium modi veritatis libero eaque numquam nulla nobis soluta,
          iure quia laudantium voluptates similique, dolor expedita!
          Reprehenderit minima facere necessitatibus eligendi beatae, dolorum
          eos rerum optio autem numquam voluptas at voluptates consectetur
          inventore!
        </p>
        <div className="mintbox-box-body">
          <img src={render_1} alt="" className="mintbox-box-render" />
          <div className="mintbox-box-controls">
            <p className="mintbox-box-controls--heading">Price Per Each</p>
            <p className="mintbox-box-controls--units">0.1 ETH</p>
            <div>
              {/* <img src={minusBtn} alt="" /> */}
              <p>1</p>
              {/* <img src={addBtn} alt="" /> */}
            </div>
            <button className="mint-btn">
              <p>Mint</p>
            </button>
          </div>
        </div>
        <button className="tunned-btn">
          <p className="tunned-btn-text">STAY TUNNED</p>
        </button>
      </div>
    </section>
  );
};

export default MintBox;
