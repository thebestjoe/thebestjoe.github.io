import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Spagyria.co.uk. All rights reserved.</p>
        <p className="text-sm mt-2">Crafted with intention, from nature to you.</p>
      </div>
    </footer>
  );
};

export default Footer;