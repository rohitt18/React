// useReducer hook is used whenever we have a more complicated setup as far as the state
// if you have a simple to-do list, its not useful
// however, if your app gets complicated then its better to use useReducer as it adds more structure to your setup

// after understanding useReducer, its going to be very easy to pick up Redux bec
// alot of lingo & functionality is exactly the same
 
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    // if i want to add that item to the people i would need to do that when im submiting the form
    // so i would wanna check if the name is true
    // and if its an empty string(false) then ofc i would wanna display the modal
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
