
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="mt-4">The alchemical preparation you seek has vanished into the ether.</p>
        <Link to="/products" className="mt-6 inline-block text-brand-red hover:underline">
          Return to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-12 rounded-lg shadow-lg border border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
                <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-md" />
            </div>
            <div>
                <Link to="/products" className="text-sm text-gold hover:underline mb-2 block">&larr; Back to Products</Link>
                <h1 className="text-4xl lg:text-5xl font-bold font-serif text-stone-900">{product.name}</h1>
                <p className="text-lg text-gold font-semibold mt-2">{product.category}</p>
                <span className="block text-3xl font-bold text-stone-800 mt-4">£{product.price.toFixed(2)}</span>
                
                <div className="mt-6 prose prose-stone max-w-none text-stone-700 leading-relaxed">
                    <p className="font-semibold">{product.shortDescription}</p>
                    <p>{product.longDescription}</p>
                </div>

                <button className="mt-8 w-full bg-brand-red text-white font-bold tracking-wider uppercase text-sm px-8 py-4 rounded-md hover:bg-black transition-colors duration-300 shadow-lg">
                    Add to Basket (Placeholder)
                </button>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailPage;
