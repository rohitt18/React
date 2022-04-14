// remember in JSX we need to use the curly braces {} in order to access the variables
// useState() => it returns an array
// and that array consist of the state value & the func. and the func will control the state value
// [value, setValue] => here value is the state value & setValue() is the func which will control value
// syntax- const [value,setValue] = useState(default); (here default can be string,num,boolean,array,obj,anything)
// you can check it by console.log(useState("hellow world"))

import React, { useState } from "react";

const ErrorExample = () => {
  let title = "random title";
  // console.log(useState("hello world"));
  // console.log(useState()[1]);
  const handleClick = () => {
    let title = "hello people";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
