import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  // we could filter out which person i actually clicked on and then just change the name
  // so that way we can always be sure whether that was peter,anna or john
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
    console.log(newPerson);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to people
      </Link>
    </div>
  );
};

export default Person;
