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

// how to iterate over the array that has the objects

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        // here we couldn't render the object therefore we specifically need to look for those properties
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}

// OR we can simply pass in the object as a prop

const Book = (props) => {
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
