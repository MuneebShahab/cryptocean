import React from "react";
import PlayLogo from "../assets/play_to_win.svg";

const PlayToEarn = () => {
  return (
    <section id="play-to-earn" className="play">
      <div className="play-content">
        <h2>Play</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, in
          magni ducimus veritatis similique et culpa placeat quaerat libero
          harum repellendus totam porro ipsa molestias, voluptatibus corporis
          minima voluptates natus.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, in
          magni ducimus veritatis similique et culpa placeat quaerat libero
          harum repellendus.
        </p>
      </div>
      <img src={PlayLogo} alt="" className="play-image" />
    </section>
  );
};

export default PlayToEarn;
