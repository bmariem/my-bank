import React from "react";

const Operation = (props) => {
  return (
    <div className="operation">
      <span className="operation-date">{props.operation.date}</span>
      <span className="operation-description">
        {props.operation.description}
      </span>
      <span className="operation-amount">{props.operation.amount}</span>
    </div>
  );
};

export default Operation;
