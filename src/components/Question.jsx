import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
const Card = ({ data }) => {
  console.log(data);
  const [toggle, setToggle] = useState(false);

  const handleClick = function () {
    setToggle(!toggle);
  };

  return (
    <div className="card-group">
      <div className="card">
        <div className="ques-answer">
          <h5> {data.question} </h5>
          <button
            onClick={handleClick}
            className={!toggle ? "btn-minus" : "btn-minus-1"}
          >
            {toggle && arrowup}
            {!toggle && arrowdown}
          </button>
        </div>

        {toggle && <p>{data.answer} </p>}
      </div>
    </div>
  );
};

export default Card;
