import React from "react";

// Components
import Logo from "./Logo";
import User from "./User";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Logo />
        <User userName={props.userName} />
      </div>
    </header>
  );
};

export default Header;
