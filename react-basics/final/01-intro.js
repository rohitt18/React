// App.js => where eventually all our components will meet
// App.css => where there will be the css for our application
// index.js => this is where all our application is going to live, we'll render our app in the index.js
// index.js is a Javascript entry point so we'll have to add some additional code

import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  // func name is Capital so that way react will know this is special
  return <h4>this is rohit & this is my first component</h4>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));

// start react adventure

// 1. Create our first component
//   In order to do that we'll need only 2 things, import React from react dependency,
//   a function which will be the component where the name of the func will start w a capital letter
//   so that react knows that this is not some regular func its one of the component.
//   And then from the component, were returning HTML, which officially is called JSX

// 2. Inject your Javascript into the index.html by importing ReactDom and then we have render() func
//    and in that func we pass in 2 things- a) whatever we're going to render b) where we're going to render
