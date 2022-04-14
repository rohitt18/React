import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

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
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h4>{props.title}</h4> {/* to write JS into JSX  we write it into {} */}
      <h6>{props.author}</h6>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
