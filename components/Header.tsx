
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from './icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Events', path: '/events' },
  { name: 'About', path: '/about' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#A18A68',
    borderBottom: '2px solid #A18A68'
  };

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-white hover:text-gold transition-colors duration-300">
                <div className="flex items-center space-x-3">
                    <SunIcon className="h-6 w-6 text-gold" />
                    <span className="text-2xl font-semibold font-serif tracking-wider">SPAGYRIA</span>
                    <MoonIcon className="h-6 w-6 text-silver" />
                </div>
            </NavLink>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium tracking-widest uppercase pb-1"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
