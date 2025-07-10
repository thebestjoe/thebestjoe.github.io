
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-white rounded-lg shadow-sm border border-stone-200">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight">The Soul of the Plant</h1>
          <p className="mt-6 text-lg md:text-xl text-stone-600 leading-relaxed">
            Discover the ancient art of Spagyrics, an alchemical tradition that seeks to separate, purify, and recombine the essence of plants to create potent, holistic remedies.
          </p>
          <Link
            to="/products"
            className="mt-10 inline-block bg-brand-red text-white font-bold tracking-wider uppercase text-sm px-8 py-4 rounded-md hover:bg-black transition-colors duration-300 shadow-lg"
          >
            Explore Our Creations
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-stone-900 mb-12">Featured Preparations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/products" className="text-brand-red hover:text-black font-semibold">
                View All Products &rarr;
            </Link>
        </div>
      </section>

      {/* What is Spagyria Section */}
      <section className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-stone-200">
        <h2 className="text-4xl font-bold text-stone-900 text-center">What is Spagyria?</h2>
        <div className="mt-6 max-w-4xl mx-auto text-stone-700 leading-loose space-y-4">
            <p>
                Spagyria (from Greek: spao, to separate, and ageiro, to reunite) is a branch of practical laboratory alchemy applied to the plant kingdom. It is a holistic process where the three essential principles of a plant—<span className="font-semibold text-gold">Sulphur (the soul, or essential oil)</span>, <span className="font-semibold text-silver">Mercury (the spirit, or alcohol)</span>, and <span className="font-semibold text-stone-800">Salt (the body, or mineral salts)</span>—are separated, purified, and then recombined.
            </p>
            <p>
                This intricate process creates a preparation that is more potent, biocompatible, and energetically complete than a simple tincture or extract. It is a remedy that works on the physical, energetic, and spiritual levels, honoring the complete being of the plant to nourish the complete being of a person.
            </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
