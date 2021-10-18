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
        <p className="sailmap-item-description--1">{line1}</p>
        <p className="sailmap-item-description--2">{line2}</p>
      </div>
    </div>
  );
};

export default SaleMapItem;
