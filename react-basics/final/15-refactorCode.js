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

// how to iterate over my array that has the objects & for each n every object, I'm returning that book

// So whatever items we will have in array, now ofc we're displaying them. And for each n every item that we have
// we're using that book component & we set up the map method so now we dont need to manually keep on adding this
// book component each n every time & we dont need to manually keep on adding img,title & author
// Instead just grab our parameter (book) which will always point back to that item in the array which in our case
// is an object & then ofc just pass in the whole object as a prop

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
        // So one of the ways was setting up this book as an object prop where i have the book prop & then im passing
        // in this book object
      })}
    </section>
  );
}

// OR we can simply pass in the whole object as a prop

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h6>{author}</h6>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

// But here 1 thing is nagging which is the warning that each child in a list should have a unique 'key' prop
// So essentially each n every time in react you have a list, you need to add a key prop with a unique value
