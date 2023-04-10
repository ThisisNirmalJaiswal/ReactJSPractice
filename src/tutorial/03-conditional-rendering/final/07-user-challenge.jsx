// import { useState } from 'react';

// const UserChallenge = () => {
//   const [user, setUser] = useState(null);

//   const login = () => {
//     // normally connect to db or api
//     setUser({ name: 'vegan food truck' });
//   };
//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h4>hello there, {user.name}</h4>
//           <button className='btn' onClick={logout}>
//             logout
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h4>Please Login</h4>
//           <button className='btn' onClick={login}>
//             login
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserChallenge;

import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Nirmal' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello There, {user.name}</h4>
          <button className='btn' onClick={logout}>
            Log out
          </button>
        </div>
      ) : (
        <div>
          <h4>Log In</h4>
          <button className='btn' onClick={login}>
            Log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
