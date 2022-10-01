import React from "react";
type GreetProps = {
  name: string;
  messagerCount: number;
};
const Greet = (props: GreetProps) => {
  return (
    <div>
      Welcome to {props.name} app, you've {props.messagerCount} messagers
    </div>
  );
};

export default Greet;
