import React, { useEffect, useRef } from "react";
import render_1 from "../assets/murmaid_1.png";
import wave_1 from "../assets/wave_1.svg";
import wave_2 from "../assets/wave_2.svg";
import wave_3 from "../assets/wave_3.svg";
import wave_4 from "../assets/wave_4.svg";
import DiscordBtn from "../components/DiscordBtn";
import Rellax from "rellax";
import Parallax from "parallax-js";

const Header = () => {
  const scene1 = useRef(null);
  const scene2 = useRef(null);
  const scene3 = useRef(null);
  const scene4 = useRef(null);
  const scene5 = useRef(null);

  useEffect(() => {
    if (
      scene1.current != null &&
      scene2.current != null &&
      scene3.current != null &&
      scene4.current != null &&
      scene5.current != null
    ) {
      new Parallax(scene1.current);
      new Parallax(scene2.current);
      new Parallax(scene3.current);
      new Parallax(scene4.current);
      new Parallax(scene5.current);
    }
    // new Rellax("#wave-1", {
    //   // <---- Via class name
    //   speed: -10,
    //   center: false,
    //   wrapper: null,
    //   round: true,
    //   vertical: false,
    //   horizontal: true,
    // });
  }, []);

  return (
    <section className="header">
      <div className="header-content">
        <h1 className="header-heading">Ocean Life</h1>
        <p className="header-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          dolorum? Nam laborum earum expedita magni voluptate deserunt vero in
          iure. Qui libero quaerat enim facere? Ducimus similique aperiam alias
          sunt.
        </p>
        <DiscordBtn />
      </div>
      <div className="header_images">
        <div id="scene-wrapper-5">
          <div ref={scene5} id="scene-5">
            <img
              data-depth="0.6"
              className="header-render"
              src={render_1}
              alt=""
            />
          </div>
        </div>

        <div id="scene-wrapper-1">
          <div id="scene-1" ref={scene1}>
            <img
              data-depth="0.4"
              className="header-wave"
              id="wave-1"
              src={wave_1}
              alt=""
            />
          </div>
        </div>
        <div id="scene-wrapper-2">
          <div id="scene-2" ref={scene2}>
            <img
              data-depth="-0.4"
              className="header-wave"
              id="wave-2"
              src={wave_2}
              alt=""
            />
          </div>
        </div>
        <div id="scene-wrapper-3">
          <div id="scene-1" ref={scene3}>
            <img
              data-depth="0.4"
              className="header-wave"
              id="wave-3"
              src={wave_3}
              alt=""
            />
          </div>
        </div>
        <div id="scene-wrapper-4">
          <div id="scene-1" ref={scene4}>
            <img
              data-depth="-0.4"
              className="header-wave"
              id="wave-4"
              src={wave_4}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
