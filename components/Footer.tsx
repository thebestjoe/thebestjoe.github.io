
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Spagyria.co.uk. All Rights Reserved.</p>
          <p className="mt-2">The art of nature perfected.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
