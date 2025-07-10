
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="overflow-hidden">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <h3 className="text-xl font-semibold font-serif text-stone-900">{product.name}</h3>
          <p className="text-sm text-gold font-semibold mt-1">{product.category}</p>
          <p className="mt-2 text-stone-600 text-sm flex-grow">{product.shortDescription}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-stone-800">£{product.price.toFixed(2)}</span>
            <span className="text-sm font-medium text-brand-red group-hover:text-black transition-colors">View Details &rarr;</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
