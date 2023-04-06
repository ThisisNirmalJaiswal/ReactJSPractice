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
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
