import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = 'Marilyn Sadler';
const title =
  "It's Not Easy Being a Bunny: An Easter Book for Kids and Toddlers(Beginner Books(R))";

const img = './images/book.jpg';
const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
