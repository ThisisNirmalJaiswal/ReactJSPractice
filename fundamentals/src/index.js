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
      {/* <p>{let p = 6 }</p> // it will doesn't work bcuz it not a value. */}
      {/* <p>{6 + 6}</p> // it will work bcuz it's have some value. */}
    </article>
  );
};

// const Author = () => {
//   return (inlineHeadingsStyle = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   });
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
