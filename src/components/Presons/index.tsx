import React from "react";
type PresonsProps = {
  names: {
    first: string;
    last: string;
  }[];
};
const Presons = (props: PresonsProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default Presons;
