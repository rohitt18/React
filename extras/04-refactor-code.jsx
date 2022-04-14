// useReducer hook is used whenever we have a more complicated setup as far as the state
// if you have a simple to-do list, its not useful
// however, if your app gets complicated then its better to use useReducer as it adds more structure to your setup

// after understanding useReducer, its going to be very easy to pick up Redux bec
// alot of lingo & functionality is exactly the same

import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "./data";
// reducer function
const reducer = (state, action) => {
  // state - state right before the update & action - what we're trying to do
  // keep in mind that you always need to return some kind of state from reducer otherwise none of the functionality will work

  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type == "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "please enter value" };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => {
      return person.id !== action.payload;
    });
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item removed",
    };
  }

  throw new Error("No matching action type");
  // return state; // alternative
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  // we have a state which is an object & in the object we have multiple properties like people,isModalOpen,etc

  // in order to affect anything in our state, we need to dispatch
  const handleSubmit = (e) => {
    e.preventDefault();
    // and i will dispatch if the name is there (i,e. if name is true)
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem }); // so action is gonna be our obj & in that obj we have the property type
      // and once you dispatch your action, in the reducer you need to handle it
      // and payload bec I need to be specific, which item i wanna add
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
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
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;

// useReducer logic -
// initial state(default one) --> dispatch the action -->
// then the action went to reducer --> and in reducer we return the new state
