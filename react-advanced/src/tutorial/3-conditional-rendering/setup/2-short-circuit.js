import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState(""); // And ofc this is falsy bec it is an empty string
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world"; // if text is falsy value then we return "hello world" & vice-a-versa
  // const secondValue = text && "hello world"; // if text is truthy value then we return "hello world" & vice-a-versa

  return (
    <>
      {/* if(){console.log("hello")}      this will throw an error therefore we'll use short-circuit evaluation */}

      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      {/* short-circuit || operator */}
      <h1>{text || "rohit gupta"}</h1>

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>

      {/* short-circuit && operator */}
      {/* {text && <h1>hello world</h1>} */}
      {/* {!text && <h1>hello world</h1>} */}
      {isError && <h1>Error...</h1>}

      {/* ternary operator */}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>no error</h2>
        </div>
      )}
    </>
  );

  // CONCLUSION -

  //   {text || "hello world"} => if text is true then we return text & if text is false then we return 'hello world'

  //   {text && <h1>hello world</h1>} => if text is true then return <h1>hello world</> element
  //   {!text && <h1>hello world</h1>} => if text is false then return <h1>hello world</> element
};

export default ShortCircuit;
