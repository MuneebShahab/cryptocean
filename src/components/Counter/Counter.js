import React, { useState } from "react";
import Button from "./Button";
import "./styles/style.css";
export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count === 25) {
        return;
      }
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div>
        <div
          class="buttons"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems:"center",
          }}
        >
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            title={"-"}
            action={decrementCount}
          />
          <div
            style={{
            //   display: "flex",
              fontSize: 20,
            //   alignItems: "center",
              color: "white",
            }}
          >
            {" "}
            {count}{" "}
          </div>
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            title={"+"}
            action={incrementCount}
          />
        </div>
      </div>
    </div>
  );
}
