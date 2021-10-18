import React from "react";
import Expend from "../assets/expend.png";

const FAQItem = ({ text }) => {
  return (
    <>
      <div className="faq-item">
        <p className="faq-item-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, est.
        </p>
        <span>
          <img src={Expend} alt="" />
        </span>
      </div>
      <div className="faq-item-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam,
          numquam! Deleniti cum suscipit a voluptates voluptatum nisi
          praesentium minima modi necessitatibus esse placeat magnam nesciunt
          autem, exercitationem officia vero nam!
        </p>
      </div>
    </>
  );
};

export default FAQItem;
