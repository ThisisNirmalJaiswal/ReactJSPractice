// import { useState } from 'react';

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'peter',
//     age: 24,
//     hobby: 'read books',
//   });

//   const displayPerson = () => {
//     setPerson({ name: 'john', age: 28, hobby: 'scream at the computer' });
//     // be careful, don't overwrite
//     // setPerson({ name: 'susan' });
//     // setPerson({ ...person, name: 'susan' });
//   };
//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h4>Enjoys To: {person.hobby}</h4>
//       <button className='btn' onClick={displayPerson}>
//         show john
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 28,
    hobby: 'read books',
  });
  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('read books');
  const displayPerson = () => {
    setPerson({
      name: 'john',
      age: 28,
      hobby: 'scream at the computer',
    });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
