// import { useEffect, useState } from 'react';

// const MultipleReturnsBasics = () => {
//   // while fetching data
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       // done fetching data
//       setIsLoading(false);
//     }, 3000);
//   }, []);

//   // can return entire app
//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return <h2>My App</h2>;
// };
// export default MultipleReturnsBasics;

import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
