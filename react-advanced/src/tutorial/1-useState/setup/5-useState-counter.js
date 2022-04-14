import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    // in setTimeout we need to pass in 2 things a callback func which is going to run in a certain amount of time
    // and the second thing we pass in is the time value in ms
    setTimeout(() => {
      // setValue(value + 1); // this set function is async therefore we use the functional approach shown below
      // even if i click 3-4 times ill get the same value

      //  functional approach

      setValue((prevState) => {
        // its happening bec in this case we're getting that correct old value
        // in thise case it gets the current one that is right before the update
        return prevState + 1; // whatever you'll return from that func will be that new state value
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2> regular counter </h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2> more complex counter </h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
