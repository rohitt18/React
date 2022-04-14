import React, { useState } from "react";
// useState - basically useState is a function which we get from react
// this applies to all the hooks -
// starts with use
// component name must be uppercase
// must be in function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1]; // this handler will be the func that controls the value that we have in our state
  // console.log(value, handler);

  // basic syntax
  // const [value,setValue] = useState('random title') // we invoke it & pass in the whatever is going to be our default value

  const [text, setText] = useState("random title");

  const clickHandler = () => {
    if (text === "random title") {
      setText("Hello people");
      // console.log(text);
    } else {
      setText("random title");
    }
  };
  // once we click on the button, we invoke the clickHandler & in the clickHandler we have our setText func
  // which is the func we're getting back from the useState()
  // And every time we invoke the setText() func we can change the state value (i.e, text)
  // All this happens beautifully bec once we click we trigger the re-render and the value changes

  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={clickHandler}>
        change name
      </button>
    </>
  );
};

export default UseStateBasics;
