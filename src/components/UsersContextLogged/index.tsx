import React from "react";
import { UserContext } from "../UserContext";

const UsersContextLogged = () => {
  const userContext = React.useContext(UserContext);
  const handleLogIn = () => {
    if (userContext) {
      userContext.setUser({
        name: "Tep",
        email: "Tep@gmail.com",
      });
    }
  };
  const handleLogOut = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};

export default UsersContextLogged;
