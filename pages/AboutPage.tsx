import React, { useState } from 'react';

const AboutPage: React.FC = () => {
  const galleryUrls = [
    'https://picsum.photos/800/600?alchemy,lab',
    'https://picsum.photos/800/600?nature,herbs',
    'https://picsum.photos/800/600?vintage,apothecary',
    'https://picsum.photos/800/600?astrology,chart'
  ];
  const [selectedImage, setSelectedImage] = useState(galleryUrls[0]);

  return (
    <div className="py-12 animate-fadeIn">
      {/* Our Philosophy Section */}
      <section className="mb-16 md:mb-24">
        <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">Our Philosophy</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Solve et Coagula: Separate and Recombine</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-12 items-start">
            <div className="text-left space-y-6 text-gray-700 leading-relaxed">
                <p>
                    At Spagyria, we see each plant as a universe unto itself, a perfect manifestation of cosmic forces and terrestrial life. Our work is a reverent dialogue with this intelligence. We do not merely extract compounds; we seek to understand and liberate the plant's essential nature.
                </p>
                <p>
                    Our process is slow, deliberate, and meditative. We believe the consciousness of the practitioner is a key ingredient in the medicine. By purifying and recombining the three essentials—the Mercury (Spirit), Sulphur (Soul), and Salt (Body)—we create a remedy that is more than the sum of its parts. It is a vitalized, coherent being, ready to harmonize with your own.
                </p>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
                <img src={selectedImage} alt="Our alchemical philosophy" className="w-full h-full object-cover object-center transition-opacity duration-300"/>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {galleryUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(url)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === url ? 'border-red-600 shadow-md' : 'border-transparent hover:border-red-300'}`}
                  >
                    <img src={url} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover"/>
                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;