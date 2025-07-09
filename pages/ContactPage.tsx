import React, { useState } from 'react';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to a server.
        console.log('Contact form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    };

    return (
        <div className="py-12 animate-fadeIn">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-gray-800">Get in Touch</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Whether you have a question about our elixirs, our process, or just want to connect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                {/* Contact Info Section */}
                <div className="md:col-span-2 bg-gray-100 rounded-lg p-8 space-y-8">
                    <h2 className="text-3xl font-serif text-gray-800">Contact Information</h2>
                    <div className="space-y-6 text-gray-700">
                        <div className="flex items-start">
                            <LocationIcon />
                            <div className="ml-4">
                                <h3 className="font-semibold">Our Apothecary</h3>
                                <p>123 Alchemical Lane<br />Forest of Whispers, PNW 98765</p>
                                <p className="text-sm text-gray-500 mt-1">(By appointment only)</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MailIcon />
                            <div className="ml-4">
                                <h3 className="font-semibold">Email Us</h3>
                                <a href="mailto:connect@spagyria.co.uk" className="hover:text-red-600 transition-colors">connect@spagyria.co.uk</a>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <PhoneIcon />
                            <div className="ml-4">
                                <h3 className="font-semibold">Call Us</h3>
                                <p>(555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="md:col-span-3">
                    {isSubmitted ? (
                        <div className="bg-white h-full flex flex-col justify-center items-center text-center p-8 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-2xl font-serif text-black">Message Sent!</h3>
                            <p className="mt-2 text-gray-700">Thank you for reaching out. We have received your message and will get back to you as soon as the stars align.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" required rows={5} value={formData.message} onChange={handleInputChange} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;