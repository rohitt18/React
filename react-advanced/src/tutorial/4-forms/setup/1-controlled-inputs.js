import React, { useState } from "react";

// Forms in JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// Forms in React
// value (property), onChange (eventListener)

// combine controlled inputs to our list

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]); // since people is a list, therefore empty array as default
  // once we submit the form i want to add that new person that im creating to my people array
  // now connect the input to the state values

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      // if the key name matches the variable that holds the value, i can write firstName instead of firstName:firstName
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            // id just to set unique key to avoid any issues (in projects we'll use the uuid package for id)
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
