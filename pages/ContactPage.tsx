
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-stone-900">Get in Touch</h1>
        <p className="mt-4 max-w-2xl mx-auto text-stone-600">
          We welcome questions, inquiries about custom preparations, or correspondence with fellow seekers on the path.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold font-serif text-stone-800">Contact Information</h2>
            <p className="mt-4 text-stone-600">
              For all inquiries, please feel free to reach out to us. We aim to respond within 2-3 business days.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-brand-green">Email</h3>
                <a href="mailto:inquiries@spagyria.co.uk" className="text-gold hover:underline">inquiries@spagyria.co.uk</a>
              </div>
              <div>
                <h3 className="font-semibold text-brand-green">Location</h3>
                <p className="text-stone-600">Based in the heart of Somerset, UK</p>
              </div>
            </div>
          </div>
          <form>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email Address</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
                <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-red text-white font-bold tracking-wider uppercase text-sm px-8 py-3 rounded-md hover:bg-black transition-colors duration-300 shadow-lg">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
