import React, { useState } from 'react';
import { events } from '../data/events.ts';
import { Event } from '../types.ts';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const PriceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col">
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 self-start ${event.type === 'Workshop' ? 'bg-yellow-100 text-yellow-800' : event.type === 'Webinar' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}`}>
            {event.type}
        </span>
        <h3 className="text-2xl font-bold text-gray-800 font-serif mb-2">{event.title}</h3>
        <div className="text-gray-600 mb-4 space-y-2">
            <div className="flex items-center">
                <CalendarIcon />
                <span>{event.date}</span>
            </div>
            {event.price && (
                <div className="flex items-center">
                    <PriceIcon />
                    <span>${event.price}</span>
                </div>
            )}
        </div>
        <p className="text-gray-700 flex-grow">{event.description}</p>
        <button className="mt-6 w-full bg-black text-white font-semibold py-2.5 rounded-lg hover:bg-gray-800 transition-colors">
            Book Now
        </button>
    </div>
);

const EventsPage: React.FC = () => {
    const [booking, setBooking] = useState({ name: '', email: '', date: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBooking(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        console.log('Booking requested:', booking);
        setIsSubmitted(true);
        setBooking({ name: '', email: '', date: '', message: '' }); // Reset form
    };

    return (
        <div className="py-12 animate-fadeIn space-y-16 md:space-y-24">
            {/* Events Section */}
            <section>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800">Workshops & Events</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Deepen your knowledge and connect with a community of like-minded individuals.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {events.filter(e => e.type !== 'Consultation').map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </section>

            {/* Booking Section */}
            <section className="bg-gray-100 rounded-lg p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800">Book a Personal Consultation</h2>
                        <p className="mt-4 text-lg text-gray-600">Schedule a one-on-one session with our alchemist to explore how spagyrics can support your personal path to wellness.</p>
                    </div>

                    {isSubmitted ? (
                        <div className="mt-8 text-center bg-white p-8 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-2xl font-serif text-black">Thank You!</h3>
                            <p className="mt-2 text-gray-700">Your booking request has been sent. We will contact you via email within 48 hours to confirm the details.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" id="name" required value={booking.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" required value={booking.email} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date & Time</label>
                                <input type="text" name="date" id="date" required value={booking.date} onChange={handleInputChange} placeholder="e.g., Week of August 5th, afternoons" className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">What you'd like to discuss (optional)</label>
                                <textarea name="message" id="message" rows={4} value={booking.message} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors">
                                    Request Booking
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default EventsPage;