import React, { useState, useEffect } from "react";

// CONDITIONAL RENDERING - essentially it means that we will display different components
// or different content based on some condition

// it means that we can have multiple returns and then based on some condition, i can for eg return one piece of content
// and if the condition is not met, then ofc i can return something else

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  // // to setup our fetch req where we'll control our conditions

  // const getUsers = async () => {
  //   const response = await fetch(url);
  //   const user = await response.json();
  //   // console.log(user);
  //   const { login } = user; // since the user is an object it cannot be a children
  //   setUser(login); // therefore we destructure it first
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getUsers(user);
  // }, []);

  // OR

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user; // since user is an object we'll destructure it
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    // default case
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
