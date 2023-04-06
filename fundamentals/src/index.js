import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Marilyn Sadler',
  title:
    "It's Not Easy Being a Bunny: An Easter Book for Kids and Toddlers(Beginner Books(R))",
  img: './images/book.jpg',
};

const secondBook = {
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  img: 'https://m.media-amazon.com/images/I/513RN9tL-AL._SX329_BO1,204,203,200_.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      ></Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

// // first method of using props by destructure
// const Book = (props) => {
//   const { title, img, author } = props;
//   console.log(props);
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// second method of using props by destructure
const Book = ({ title, img, author }) => {
  //   const { title, img, author } = props;
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
