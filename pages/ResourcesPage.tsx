import React from 'react';
import { resources } from '../data/resources';
import { ResourceCategory, ResourceItem } from '../types';

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 inline-block align-baseline text-gray-400 group-hover:text-red-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ResourceCard: React.FC<{ item: ResourceItem }> = ({ item }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:border-red-100 transition-all duration-300 flex flex-col">
    {item.url ? (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="group">
        <h3 className="text-xl font-bold text-gray-800 font-serif group-hover:text-red-600 transition-colors">{item.title}<ExternalLinkIcon /></h3>
      </a>
    ) : (
      <h3 className="text-xl font-bold text-gray-800 font-serif">{item.title}</h3>
    )}
    {item.author && <p className="text-md font-medium text-gray-500 mt-1 font-serif italic">by {item.author}</p>}
    <p className="mt-3 text-gray-600 leading-relaxed flex-grow">{item.description}</p>
  </div>
);


const ResourcesPage: React.FC = () => {
  return (
    <div className="py-12 animate-fadeIn space-y-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">Library of Whispers</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A curated collection of resources for the aspiring alchemist and herbalist.</p>
      </div>
      
      {resources.map((category) => (
        <section key={category.title}>
          <div className="mb-8 pb-4 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">{category.title}</h2>
            <p className="mt-2 text-gray-600 max-w-3xl">{category.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.items.map(item => (
              <ResourceCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ResourcesPage;
