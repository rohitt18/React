import React, { useEffect, useRef } from "react";

// Used - when we're not setting up a controlled input
// so in this case we dont have the state value that reflects the value that is going to be in the input
// & we dont call onChange each n every time we type something in the input, instead we use useRef()
// and we add the ref attribute in the input element

// works alot like useState
// preserves value
// but DOES NOT trigger re-render

// use-cases
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value); // to access the value of the current key
    console.log(divContainer.current); // so if you want to do something specific to this particular dom node, you can use useRef
  };
  // console.log(refContainer); // its an object of property current
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

// you can add this ref attribute to any of the html elements, youre not limited to just the input
// & in order to access it you just have to go with refContainer and then the current.

// Once we have a general understanding of useRef hook we can apply the focus method on our input the moment our app renders

export default UseRefBasics;
