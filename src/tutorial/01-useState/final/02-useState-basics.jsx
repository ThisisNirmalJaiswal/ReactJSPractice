// import { useState } from 'react';

// const UseStateBasics = () => {
//   // console.log(useState());
//   // console.log(useState('jo koy'));
//   // const value = useState()[0];
//   // const handler = useState()[1];
//   // console.log(value, handler);

//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     // console.log(count)
//     setCount(count + 1);
//     // be careful, we can set any value
//     // setCount('pants');
//   };
//   return (
//     <div>
//       <h4>You clicked {count} times</h4>
//       <button className='btn' onClick={handleClick}>
//         Click me
//       </button>
//     </div>
//   );
// };

// export default UseStateBasics;

import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h4>You clicked {count} times</h4>
      <button onClick={handleClick} className='btn'>
        Increase
      </button>
    </>
  );
};

export default UseStateBasics;
