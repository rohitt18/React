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
      <Book job="developer" />
      <Book title="random title" number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4> {/* to write JS into JSX  we write it into {} */}
      <h6>{author}</h6>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
