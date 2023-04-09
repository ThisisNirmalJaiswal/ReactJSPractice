// import React from 'react';
// import { data } from '../../../data';
// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = (id) => {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <div>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={() => removeItem(id)}>remove</button>
//           </div>
//         );
//       })}
//       <button
//         className='btn'
//         style={{ marginTop: '2rem' }}
//         onClick={() => setPeople([])}
//       >
//         clear items
//       </button>
//     </div>
//   );
// };

// export default UseStateArray;

import { useState } from 'react';
import { data } from '../../../data';
import React from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    // console.log(id);
    // const newPeople = people.filter((person) => person.id !== id);
    setPeople(people.filter((person) => person.id !== id));
  };

  // const clearAllItems = () => {
  //   setPeople([]);
  // };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        {
          /* console.log(person); */
        }
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        className='btn'
        onClick={() => setPeople([])}
      >
        Remove ALL Items
      </button>
    </>
  );
};

export default UseStateArray;
