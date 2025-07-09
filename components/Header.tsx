import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SpagyriaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-red-600">
        <path d="M12 21v-4"/>
        <path d="M12 9.4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.4"/>
        <path d="M12 5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v.4"/>
        <path d="m5 11 2.3 2.3c.3.3.7.3 1 0L12 9.4l3.7 3.7c.3.3.7.3 1 0L19 11"/>
        <path d="M5 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1"/>
        <path d="M19 11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1"/>
    </svg>
);


const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = "text-lg text-gray-600 hover:text-red-600 transition-colors duration-300 pb-2";
    const activeClasses = "text-red-600 font-semibold border-b-2 border-red-600";
    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
};

const Header: React.FC = () => {
  return (
    <header className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-3">
          <SpagyriaIcon/>
          <span className="font-serif text-2xl font-bold tracking-tight text-black">Spagyria</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={getNavLinkClass}>
            Products
          </NavLink>
          <NavLink to="/events" className={getNavLinkClass}>
            Events
          </NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/about" className={getNavLinkClass}>
            About
          </NavLink>
          <NavLink to="/resources" className={getNavLinkClass}>
            Resources
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;