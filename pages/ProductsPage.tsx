
import React from 'react';
import { products } from '../data/products.ts';
import ProductCard from '../components/ProductCard.tsx';

const ProductsPage: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-stone-900">Our Alchemical Products</h1>
        <p className="mt-4 max-w-2xl mx-auto text-stone-600">
          Each of our spagyric preparations is crafted with intention, following ancient alchemical principles to bring forth the plant's fullest potential.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;