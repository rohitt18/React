import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

// second argument

const UseEffectFetchData = () => {
  // useState - it preserves the value & it triggers re-render
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // calling this will --> update users & in return that will triggers re-render
    // And when the re-render takes place, useEffect runs & we're getting users & then again we're setting users
    // So essentially we're setting a infinite loop. Therefore the solution is to add the dependancy array in the useEffect
    // console.log(users);
  };

  // useEffect - it runs after every render
  useEffect(() => {
    getUsers(users);
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
