import React, { useEffect, useState } from "react";
import FAQItem from "../components/FAQItem";

import Expend from "../assets/expend.png";
import Horsie from "../assets/horsie.svg";

const FAQ = () => {
  const [data, setData] = useState([
    { id: 0, selected: false },
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
    { id: 5, selected: false },
  ]);
  const [itemData, setItemData] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = (id, item) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] == data[id]) {
        if (data[id].selected == true) {
          data[id].selected = false;
          setToggle(false);
        } else {
          data[id].selected = true;
          setToggle(true);
        }
      } else if (data[i] != data[id]) {
        data[i].selected = false;
      }
    }
    console.log(data);
    setItemData(data[id]);
    setData(data);
  };
  useEffect(() => {
    console.log("RE RENDER!");
  });

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
          {/* <FAQItem /> */}

          {/* start  */}

          {data.map((item) => (
            <div>
              <div
                className="faq-item"
                onClick={() => {
                  handleToggle(item.id, item);
                }}
              >
                <p className="faq-item-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, est.
                </p>
                <span>
                  <img src={Expend} alt="" />
                </span>
              </div>
              {data[item.id].selected == true ? (
                <div className="faq-item-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam, numquam! Deleniti cum suscipit a voluptates voluptatum
                    nisi praesentium minima modi necessitatibus esse placeat
                    magnam nesciunt autem, exercitationem officia vero nam!
                  </p>
                </div>
              ) : null}
            </div>
          ))}

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
