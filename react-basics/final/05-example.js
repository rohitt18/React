import React from "react";
import ReactDom from "react-dom";

// CSS
import "./06-addingCss.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h4>I Love You to the Moon and Back</h4>;

const Author = () => (
  <h6 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Amelia Hepworth
  </h6>
);

ReactDom.render(<BookList />, document.getElementById("root"));
