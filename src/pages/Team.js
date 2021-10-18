import React from "react";
import TeamLogo from "../assets/team.svg";

const Team = () => {
  return (
    <section id="team" className="team">
      <img src={TeamLogo} alt="" className="team-image" />
      <div className="team-content">
        <h2>Team</h2>
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
    </section>
  );
};

export default Team;
