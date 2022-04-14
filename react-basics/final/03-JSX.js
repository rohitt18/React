import React from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single elements
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
