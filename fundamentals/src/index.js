import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src='./images/book.jpg'
      alt="It's Not Easy Being a Bunny: An Easter Book for Kids and Toddlers (Beginner
    Books(R))"
    />
  );
};
const Title = () => (
  <h2>
    It's Not Easy Being a Bunny: An Easter Book for Kids and Toddlers (Beginner
    Books(R))
  </h2>
);
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0' }}>
    Marilyn Sadler
  </h4>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
