import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

// OR

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "hello world")
//   );
// };

// they both are the same things
// So you can probably see that it can get messy really really fast bec right now
//  we're just talking about a div that has the heading1 but ofc keep in mind that
// your normal structure for the component is going to be way more messier.
// Thats why its way better to use the first method, this was just for you to know
// that whats happening under the hood.

// Just keep in mind that the reason why you have this HTML syntax is so its easier
// for you to set up your return in your component

ReactDom.render(<Greeting />, document.getElementById("root"));
