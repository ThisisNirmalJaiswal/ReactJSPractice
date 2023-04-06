import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    id: 1,
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
  },
  {
    id: 2,
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/513RN9tL-AL._SX329_BO1,204,203,200_.jpg',
  },
];

// how to render a list of names or any data

// const names = ['nirmal', 'ajay', 'vikash'];

// const newNames = names.map((name) => {
//   console.log(names);
//   return <h1>{name}</h1>;
// });
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book {...book} key={id} />;
        {
          /* return <Book book={book} key={id} />; */
        }
      })}
    </section>
  );
};

// 1st option
// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// 2nd option
// const Book = ({ book: { img, title, author } }) => {
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h2>{author}</h2>
//     </article>
//   );
// };

// 3rd option using spread operator
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2>{author}</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
