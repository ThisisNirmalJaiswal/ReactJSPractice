import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src='https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL600_SR600,400_.jpg' />
  );
};
const Title = () => (
  <h2>
    It's Not Easy Being a Bunny: An Easter Book for Kids and Toddlers (Beginner
    Books(R))
  </h2>
);
const Author = () => <h4> Marilyn Sadler</h4>;

// const Person = () => <h2>Nirmal Jaiswal</h2>;
// const Message = () => {
//   return <p>This is my Message</p>;
// };

// function Greeting() {
//   return React.createElement('h2', {}, 'hellow World');
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
