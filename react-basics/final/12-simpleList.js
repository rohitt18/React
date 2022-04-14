import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL200_SR200,200_.jpg",
    title: "Ugly Love: A Novel",
    author: "Colleen Hoover",
  },
];

// we can access this books array so in the booklist im gonna go back to JS so ill setup my curly braces
// and ill just type books

const names = ["rohit", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});

console.log(newNames);

function BookList() {
  return <section className="booklist">{newNames}</section>;
}
// so we learnt that in React, we can right away render the array, however that array ofc cannot be objects
// strings are good
// so we conclude that, objects are not valid as react child

const Book = (props) => {
  // both of them are exactly the same
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h6>{author}</h6>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
