import React from "react";

const Greet = (props) => {
  //console.log(props);
  const { name, quote } = props;
  return (
    <div>
      <h1>Hello {name},</h1>
      <i>{props.quote}</i>
    </div>
  );
};

export default Greet;
