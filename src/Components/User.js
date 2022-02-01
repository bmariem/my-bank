import React from "react";

// Components
import UserIcon from "./UserIcon";

const User = (props) => {
  return (
    <div className="user">
      <p>{props.userName}</p>
      <UserIcon />
    </div>
  );
};

export default User;
