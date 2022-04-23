// == Import style
import './menu.scss';
import MenuBurger from '../../assets/icons/menu.svg';

// == Import utils
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const MobileMenu = () => {
  // Action to toggle mobile menu
  const [open, setOpen] = useState(false);

  const  toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <button onClick={toggleMenu} className="menu-burger">
          <img src={MenuBurger} alt="" />
        </button>
      </div>
      {open && <div className='menu'>
        <nav className='menu-navbar'>
          <NavLink to='/' className='menu-navbar-nav'>Home</NavLink>
          <NavLink to='/competences' className='menu-navbar-nav'>Compétences</NavLink>
          <NavLink to='/projets' className='menu-navbar-nav'>Projets</NavLink>
          <NavLink to='/contact' className='menu-navbar-nav'>Contact</NavLink>
        </nav>
      </div>}
    </div>
  );
};

export default MobileMenu;
