
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg border border-stone-200">
      <h1 className="text-5xl font-bold text-center mb-8 text-stone-900">About Spagyria.co.uk</h1>
      
      <div className="prose prose-lg prose-stone max-w-none mx-auto text-stone-700 leading-relaxed">
        <p>
          Spagyria.co.uk was founded from a deep reverence for the wisdom of Nature and the timeless traditions of alchemy. Our founder, an alchemist with over two decades of experience in both laboratory work and hermetic philosophy, sought to create a source for genuine, high-quality spagyric preparations made with integrity and intention.
        </p>
        
        <h2 className="text-brand-green">Our Philosophy: Solve et Coagula</h2>
        <p>
          The core of our practice is the alchemical maxim "Solve et Coagula" – Dissolve and Coagulate. We believe that to truly understand something, whether a plant or a part of ourselves, we must first break it down to its essential components. By separating the plant's Salt, Sulphur, and Mercury, we can purify each part individually, removing impurities and elevating its nature. 
        </p>
        <p>
          Then, we recombine these purified essences. The result is not merely a mixture, but a resurrected being—a holistic remedy that is more than the sum of its parts. This is the heart of our work: to create preparations that are potent, pure, and resonate with the vital force of life itself.
        </p>
        
        <h2 className="text-brand-red">Our Commitment</h2>
        <ul>
          <li><strong>Quality Botanicals:</strong> We source our plants from organic or wildcrafted suppliers, harvesting with respect for the environment and at astrologically significant times.</li>
          <li><strong>Authentic Processes:</strong> Our methods are rooted in classical alchemical texts and hands-on laboratory practice, avoiding modern shortcuts that compromise the integrity of the work.</li>
          <li><strong>Education:</strong> We are committed to sharing the knowledge of this profound art, helping to demystify alchemy and make its benefits accessible to all who are called to it.</li>
        </ul>

        <p className="text-center italic mt-12 border-t border-gold pt-6 text-gold">
            "Natura non facit saltus." <br /> (Nature does not make leaps.)
        </p>

      </div>
    </div>
  );
};

export default AboutPage;
