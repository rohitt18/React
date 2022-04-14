import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }); // here we dont need the clean up func if we use the empty dependancy list.
  // therefore we'll use the useEffect only once we render the component

  console.log("render");

  // so this is how it works -
  // we have our initial render
  // then we invoke the useEffect
  // and then again, once we trigger re-render i.e, once we render the component one more time
  // before we call that useEffect, so before we add that another eventListener, essentially we clean it up, we remove that eventListener
  // So ofc we can see this by console logging & thats how the clean up func works

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

// remember you need to understand that the cleanup func is very imp, you will come to know
// when we start dealing with component appearing & disappearing, meaning there's going to be conditional rendering

// When the component is all the time on the screen, setting up a dependancy array makes sense (once the component renders, we will set up event listener & life is great)
// however we need to understand that there's going to be component that, for eg, are displayed and they are removed
