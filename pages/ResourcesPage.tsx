
import React from 'react';

const resources = [
  {
    title: "The Alchemist's Handbook",
    author: "Frater Albertus",
    description: "A foundational and practical guide to laboratory alchemy. Considered essential reading for any aspiring spagyrist."
  },
  {
    title: "Real Alchemy: A Primer of Practical Alchemy",
    author: "Robert Allen Bartlett",
    description: "An excellent modern guide that bridges the gap between ancient texts and contemporary laboratory practice."
  },
  {
    title: "The Path of Alchemy: Energetic Healing & the World of Natural Magic",
    author: "Mark Stavish",
    description: "Explores the spiritual, philosophical, and practical applications of alchemy in daily life."
  },
  {
    title: "Spagyrics: The Alchemical Preparation of Medicinal Essences, Tinctures, and Elixirs",
    author: "Manfred M. Junius",
    description: "A detailed and scholarly work on the subject, covering both the history and the practical techniques of plant alchemy."
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-stone-900">Resources & Reading</h1>
        <p className="mt-4 max-w-2xl mx-auto text-stone-600">
          The path of alchemy is one of lifelong learning. Here are some trusted resources to guide your journey into the Great Work.
        </p>
      </div>
      
      <div className="space-y-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-stone-200">
            <h2 className="text-2xl font-bold font-serif text-brand-red">{resource.title}</h2>
            <p className="text-sm font-semibold text-stone-500 mt-1">by {resource.author}</p>
            <p className="mt-3 text-stone-700 leading-relaxed">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
