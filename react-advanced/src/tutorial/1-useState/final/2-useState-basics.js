import React, { useState } from "react";
// useState - basically useState is a function
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1]; // this handler will be the func that controls the value that we have in our state
  // console.log(value, handler);

  // basic syntax
  // const [value,setValue] = useState('random title') // we invoke it & pass in the whatever is going to be our default value
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
