const Book = (props) => {
  const { img, title, author } = props;
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e); // event object
    console.log(e.target); // tells us what we're clicking on
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h4 onClick={() => console.log(title)}>{title}</h4>
      <h6>{author}</h6>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;

// if used export default you can export only 1 function from 1 file and you can rename it whatever you wish

// And if you use export default then you have to import it this way into the index.js
// import Book from './books';
//
