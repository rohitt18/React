import React, { useState, useEffect } from "react";

// useEffect hook allows you to do the side effect (any work ourside of the component)
// now that work could be changing document title, signing up for subscription, fetching data, setting up an eventListener
// by default runs after every re-render
// cleanup function
// second parameter (list of dependencies)
// we cannot call hooks conditionally

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // whatever functionality we'll place within this callback func, that will run after every re-render
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Message(${value})`;
    }
  }, [value]);
  // if we leave this list of dependencies blank than that means it will only run on the initial render
  // each n every time that dependancy(here it - value) will change, then useEffect will also run

  console.log("render component"); // so as you can see,once we render the component we also call the useEffect

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
