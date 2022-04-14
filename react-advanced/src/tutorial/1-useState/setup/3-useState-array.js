import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); // another method instead of importing {useState} from 'react'
  // we could pass an empty array OR the data array as default value

  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      // all the items whose ids are not matching to the id passed in, those ones are returned to the newPeople
      return person.id !== id;
    });
    // console.log(newPeople);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        // JSX ke andar JS likhna ho toh {iske andar likhna padta hai}
        const { id, name } = person; // object destructuring bec those are coming from the person
        return (
          <div key={id} className="item">
            {/* to render a list we need to have this key prop w a unique*/}
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                // logic- this runs only when we click the button so the item with that specific id would get removed
                removeItem(id); // its better to set up a handler when you have to remove a single item
                // bec there's more functionality attached to it
              }}
            >
              remove item
            </button>
          </div>
        );
      })}
      {/* button right next to the people */}
      <button
        type="button"
        className="btn"
        onClick={() => {
          // this button is calling the set people func
          setPeople([]); // in which we pass an empty array so when the user clicks on it, we'll show an empty array
        }}
      >
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
