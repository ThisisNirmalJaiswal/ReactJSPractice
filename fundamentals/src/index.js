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

const BookList = () => {
  return (
    <section className='booklist'>
      <EventExamples />
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book {...book} key={id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle button clicked');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type='text' name='example' style={{ margin: '1rem 0' }} />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  );
};

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
