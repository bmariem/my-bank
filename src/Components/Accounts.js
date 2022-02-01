import React from "react";

// Components
import Account from "./Account";

const Accounts = (props) => {
  return (
    <div className="accounts">
      {props.accounts.map((account, index) => {
        return <Account account={account} key={index} />;
      })}
    </div>
  );
};

export default Accounts;
