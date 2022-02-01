import React from "react";

// Components
import Operation from "./Operation";
import Button from "./Button";

const Account = (props) => {
  return (
    <div className="account">
      <div
        className="account-header"
        style={{ backgroundColor: props.account.color }}
      >
        <p className="name">{props.account.name}</p>
        <p className="balance">
          {props.account.balance} <span>€</span>
        </p>
      </div>
      <div className="operations">
        {props.account.operations.map((operation, index) => {
          return <Operation operation={operation} key={index} />;
        })}
      </div>
      <div className="account-footer">
        <Button />
      </div>
    </div>
  );
};

export default Account;
