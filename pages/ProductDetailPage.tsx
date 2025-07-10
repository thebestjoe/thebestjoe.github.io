import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products.ts';
import { Product } from '../types.ts';

const ChevronRightIcon = () => (
    <svg className="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
);


const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = products.find(p => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (product) {
      setSelectedImage(product.imageUrl);
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center py-20 animate-fadeIn">
        <h1 className="text-4xl font-bold font-serif text-gray-800">Product Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">The elixir you seek is not in our collection.</p>
        <Link to="/products" className="mt-8 inline-block text-red-600 font-semibold py-2 px-6 border-b-2 border-red-600 hover:bg-red-50 rounded-t-lg transition-colors duration-300">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-gray-500 text-sm">
            <li>
              <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
            </li>
            <li><ChevronRightIcon /></li>
            <li>
              <Link to="/products" className="hover:text-red-600 transition-colors">Products</Link>
            </li>
            <li><ChevronRightIcon /></li>
            <li>
              <span className="font-medium text-gray-700">{product.tincture}</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="lg:col-span-3">
             <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                <img src={selectedImage} alt={product.tincture} className="w-full h-full object-cover object-center transition-opacity duration-300"/>
              </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.galleryUrls.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(url)}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === url ? 'border-red-600 shadow-md' : 'border-transparent hover:border-red-300'}`}
                >
                  <img src={url} alt={`${product.name} gallery image ${index + 1}`} className="w-full h-full object-cover"/>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2 flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 font-serif">{product.tincture}</h1>
            <p className="mt-2 text-xl text-red-600 font-serif">{product.name}</p>
            
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-base">
                <p>{product.longDescription}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold font-serif text-gray-800 border-b border-gray-200 pb-2">Key Benefits</h3>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                {product.keyBenefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold font-serif text-gray-800 border-b border-gray-200 pb-2">Planetary Influence</h3>
              <p className="mt-4 text-gray-700">{product.planetaryInfluence}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;