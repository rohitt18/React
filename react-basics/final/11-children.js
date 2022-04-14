// children prop - Content in between the opening & closing tag
// & remember the name is special you have to write children only.

import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

// JS to JSX
// setup variables
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/613KCs7szvL._AC_UL200_SR200,200_.jpg",
  title: "Ugly Love: A Novel",
  author: "Colleen Hoover",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          adipisci eaque dolorum quia voluptatum culpa atque ullam! Laborum
          quasi eos natus hic officiis magnam reiciendis assumenda. Aperiam ea
          nostrum enim?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // the name children is very imp
  // both of them are exactly the same
  // const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h6>{author}</h6>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
