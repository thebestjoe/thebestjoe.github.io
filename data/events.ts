import { Event } from '../types';

export const events: Event[] = [
  {
    id: 1,
    title: 'Introduction to Spagyrics: A Practical Workshop',
    date: 'Saturday, August 10, 2024 - 10:00 AM',
    description: 'Join us for a hands-on workshop where you will learn the fundamental principles of spagyrics. Participants will get to see the alchemical process firsthand and create a simple tincture to take home.',
    type: 'Workshop',
    price: 150,
  },
  {
    id: 2,
    title: 'Planetary Correspondences in Herbalism',
    date: 'Wednesday, September 4, 2024 - 7:00 PM (Online)',
    description: 'Discover how ancient astrologers linked plants to planets and how you can use this knowledge to enhance your herbal preparations. This is an online webinar accessible from anywhere.',
    type: 'Webinar',
    price: 45,
  },
  {
    id: 3,
    title: 'Personal Alchemical Consultation',
    date: 'By Appointment',
    description: 'A one-on-one consultation to discuss your personal wellness journey and how spagyric remedies can be tailored to support your specific constitution and goals. Book your session below.',
    type: 'Consultation',
  },
];
