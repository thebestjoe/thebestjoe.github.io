
import React from 'react';
import { events } from '../data/events';

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-stone-900">Events & Workshops</h1>
        <p className="mt-4 max-w-2xl mx-auto text-stone-600">
          Join us to learn and share in the Great Work. We offer a range of online and in-person events to deepen your understanding of alchemy and spagyrics.
        </p>
      </div>

      <div className="space-y-12">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-8 rounded-lg shadow-lg border border-gold/30">
            <h2 className="text-3xl font-bold font-serif text-stone-900">{event.title}</h2>
            <div className="mt-2 text-sm text-stone-500 font-semibold space-x-4">
              <span>{event.date}</span>
              <span>&bull;</span>
              <span>{event.location}</span>
            </div>
            <p className="mt-4 text-stone-700 leading-relaxed">{event.description}</p>
            <button className="mt-6 bg-brand-red text-white font-bold tracking-wider uppercase text-xs px-6 py-2 rounded-md hover:bg-black transition-colors duration-300">
                Register Interest
            </button>
          </div>
        ))}
         {events.length === 0 && (
            <p className="text-center text-stone-500">There are no upcoming events scheduled. Please check back soon.</p>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
