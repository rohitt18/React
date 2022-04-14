import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "rohit",
    age: 21,
    message: "random message",
  });

  console.log(person);

  const { name, age, message } = person;

  const changeMessage = () => {
    if (message === "random message") {
      setPerson({ ...person, message: "object" }); // pehle voh object set karo(spread operator) fir uspe override karo
    } else {
      setPerson({ ...person, message: "random message" }); // always make sure that you preserve all these values using a spread operator & just choose which we want to override
    }
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
