import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { products } from '../data/products';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white flex flex-col">
      <div className="overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
      </div>
      <div className="p-6 text-center flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-800">{product.tincture}</h3>
        <p className="text-md font-medium text-gray-600 mt-1 font-serif">{product.name}</p>
        <p className="mt-4 text-gray-600 h-20 flex-grow">{product.description}</p>
        <Link to={`/products/${product.id}`} className="mt-6 w-full inline-block bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
            View Details
        </Link>
      </div>
    </div>
  );
};


const ProductsPage: React.FC = () => {
  return (
    <div className="py-12 animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">Our Spagyric Collection</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Handcrafted elixirs designed to harmonize body, mind, and spirit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;