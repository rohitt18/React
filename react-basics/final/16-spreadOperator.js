import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL200_SR200,200_.jpg",
    title: "Ugly Love: A Novel",
    author: "Colleen Hoover",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/610QYM5NxRL._AC_UL200_SR200,200_.jpg",
    title: "Verity",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
        // so now I'm not passing anymore this book property as an object instead im passing this in a separate
        // properties & in that way i dont need to use anymore of this book property altogether
        // *** its better to use the spread operator to spread out all the properties that are coming from the book on my props
      })}
    </section>
  );
}

// ** SO INSTEAD OF PASSING A BOOK AS AN OBJECT & THEN ACCESSING THOSE PROPERTIES ONE BY ONE,
// I CAN SAY HOW MANY PROPERTIES I HAVE DOESN'T MATTER, JUST SPREAD THEM OUR AS PROPS & THEN OFC I CAN ACCESS THEM **

const Book = (props) => {
  console.log(props);
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
