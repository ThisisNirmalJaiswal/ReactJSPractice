const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button>Display Title</button>
      <h2>{author}</h2>
    </article>
  );
};

export default Book;
