import React from "react";
import FAQItem from "../components/FAQItem";
import Horsie from "../assets/horsie.svg";

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="faq-wrapper">
        <h2 className="heading-primary faq-position-absolute">
          Frequently Asked Questions{" "}
          <img className="faq-icon" src={Horsie} alt="" />
        </h2>
        <p className="heading-primary--sub">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nostrum illo recusandae odit, reprehenderit sunt asperiores
          perferendis dicta molestias beatae!
        </p>

        <div className="faq-wrapper-item">
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
          <FAQItem />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
