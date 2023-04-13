import { useState, createContext, useContext } from 'react';
import Navlinks from './Navlinks';

export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Nirmal' });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
