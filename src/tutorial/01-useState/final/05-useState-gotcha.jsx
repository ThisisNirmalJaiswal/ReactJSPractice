// import { useState } from 'react';

// const UseStateGotcha = () => {
//   const [value, setValue] = useState(0);

//   const handleClick = () => {
//     // setTimeout(() => {
//     // console.log('clicked the button');
//     //   setValue(value + 1);
//     // }, 3000);
//     setTimeout(() => {
//       console.log('clicked the button');
//       setValue((currentState) => {
//         return currentState + 1;
//       });
//     }, 3000);
//   };
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button className='btn' onClick={handleClick}>
//         increase
//       </button>
//     </div>
//   );
// };

// export default UseStateGotcha;

import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  // const currentState = value + 1;

  const handleClick = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });
    // console.log(currentState);

    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);

    setTimeout(() => {}, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className='btn' type='button' onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
