import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

// JS to JSX
// setup variables
const author = "Amelia Hepworth";
const title = "I Love You to the Moon and Back";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4> {/* to write JS into JSX  we write it into {} */}
      <h6>{author}</h6>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
