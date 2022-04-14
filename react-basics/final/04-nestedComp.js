import React from "react";
import ReactDom from "react-dom";

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// Components ke andar kitne bhi components ho sakte hai
// like Greeting ke andar person aur message & person ke andar aur 2 component bhi ho sakte hai

const Person = () => <h2>rohit gupta</h2>;
const Message = () => {
  return <p>this is my message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
