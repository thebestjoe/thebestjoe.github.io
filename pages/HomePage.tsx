import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fadeIn space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: "url('https://picsum.photos/1600/900?nature,greenery')" }}
        ></div>
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Soul of the Plant</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Discover the transformative power of spagyrics, where ancient alchemy meets modern herbalism.</p>
          <Link
            to="/products"
            className="mt-8 inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300"
          >
            Explore Our Elixirs
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800">What is Spagyrics?</h2>
        <div className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 space-y-4 leading-relaxed">
          <p>
            Derived from the Greek words 'spao' (to separate) and 'ageiro' (to combine), spagyrics is a holistic alchemical process. We gently separate the three core principles of a plant—its essential oils (Soul), alcohol (Spirit), and mineral salts (Body)—purify them, and reunite them to create a potent, energetically complete elixir.
          </p>
          <p>
            This method captures the full spectrum of the plant's healing potential, creating remedies that work on the physical, energetic, and spiritual levels.
          </p>
        </div>
         <Link
            to="/about"
            className="mt-8 inline-block text-red-600 font-semibold py-2 px-6 border-b-2 border-red-600 hover:bg-red-50 rounded-t-lg transition-colors duration-300"
          >
            Learn Our Philosophy
          </Link>
      </section>

      {/* Featured Section */}
      <section className="py-16 md:py-20 bg-gray-100 rounded-lg">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800">From Seed to Bottle</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Our commitment is to purity, potency, and planetary harmony.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Organic & Wildcrafted</h3>
                    <p className="mt-2 text-gray-600">We source our plants from certified organic farms or ethically wildcraft them from pristine environments, ensuring the highest vibrational quality.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Alchemical Process</h3>
                    <p className="mt-2 text-gray-600">Following timetested traditions, our preparations are aligned with planetary cycles to enhance the specific virtues of each plant.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Holistic Wellness</h3>
                    <p className="mt-2 text-gray-600">Our spagyrics are designed to support balance and harmony within the body's interconnected systems, promoting true well-being.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;