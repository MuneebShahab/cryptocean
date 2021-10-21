import React from "react";

const SaleMapItem = ({ year, month, line1, line2 }) => {
  return (
    <div className="sailmap-item">
      <div>
        <p className="sailmap-item-year">{year}</p>
        <p className="sailmap-item-month">{month}</p>
      </div>
      <div></div>
      <div>
        <ul>
          <li className="sailmap-item-description--1">{line1}</li>
          <li className="sailmap-item-description--2">{line2}</li>
        </ul>
      </div>
    </div>
  );
};

export default SaleMapItem;
