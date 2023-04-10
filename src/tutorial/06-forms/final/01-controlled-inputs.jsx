// import { useState } from 'react';
// const ControlledInputs = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

// import { useState } from 'react';

//   // const handleChange = (e) => {
//   //   // for now we won't use it
//   //   const name = e.target.name;
//   //   const value = e.target.value;
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something
//     console.log(name, email);
//   };
//   return (
//     <form className='form' onSubmit={handleSubmit}>
//       <h4>controlled inputs</h4>
//       <div className='form-row'>
//         <label htmlFor='name' className='form-label'>
//           name
//         </label>
//         <input
//           type='text'
//           className='form-input'
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           id='name'
//         />
//       </div>
//       <div className='form-row'>
//         <label htmlFor='email' className='form-label'>
//           Email
//         </label>
//         <input
//           type='email'
//           className='form-input'
//           id='email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button type='submit' className='btn btn-block'>
//         submit
//       </button>
//     </form>
//   );
// };
// export default ControlledInputs;

import { useState } from 'react';

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          id='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email' id='email' className='form-label'>
          Email
        </label>
        <input
          type='text'
          id='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className='btn btn-block' type='submit'>
          submit
        </button>
      </div>
    </form>
  );
};
export default ControlledInputs;
