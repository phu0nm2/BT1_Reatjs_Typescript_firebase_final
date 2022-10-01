import React from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = React.useState<AuthUser>({} as AuthUser);

  const handleLogIn = () => {
    setUser({
      name: "Hoa",
      email: "hoa@gmail.com",
    });
  };
  //   const handleLogOut = () => {
  //     setUser(null);
  //   };
  return (
    <div>
      <button onClick={handleLogIn}>Log In</button>
      {/* <button onClick={handleLogOut}>Log Out</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
