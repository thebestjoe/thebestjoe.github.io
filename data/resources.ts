import { ResourceCategory } from '../types';

export const resources: ResourceCategory[] = [
  {
    title: 'Online Portals & Communities',
    description: 'Digital spaces dedicated to the study and practice of alchemy and herbal arts.',
    items: [
      {
        title: 'The Spagyricus Institute',
        url: 'https://www.spagyricus.com',
        description: 'A comprehensive online resource offering courses and articles on the theory and practice of spagyrics, founded by a well-known modern alchemist.',
      },
      {
        title: 'Alchemi-Culture',
        url: 'https://www.alchemy-culture.com',
        description: 'A modern blog and community forum exploring the intersections of alchemy, herbalism, and personal transformation in today\'s world.',
      },
      {
        title: 'Herbal Cunning',
        url: 'https://www.herbalcunning.org',
        description: 'A forum and archive dedicated to traditional Western herbalism, folk magic, and plant lore. A great place for deep-dive discussions.',
      },
    ],
  },
  {
    title: 'Essential Texts & Grimoires',
    description: 'Fundamental books for any serious student. These works provide the philosophical and practical foundations of the Great Work.',
    items: [
      {
        title: 'The Alchemist\'s Handbook',
        author: 'Frater Albertus',
        description: 'A foundational manual of practical laboratory alchemy. It is considered an essential text for any aspiring practitioner.',
      },
      {
        title: 'Real Alchemy: A Primer of Practical Alchemy',
        author: 'Robert Allen Bartlett',
        description: 'An excellent and accessible introduction to the physical operations of alchemy, bridging historical context with modern lab techniques.',
      },
      {
        title: 'The Herbal Medicine-Maker\'s Handbook',
        author: 'James Green',
        description: 'While not strictly alchemical, this book is an invaluable guide to creating potent herbal remedies, providing a solid foundation in plant preparation.',
      },
      {
        title: 'The Book of Lambspring',
        author: 'Anonymous (15th Century)',
        description: 'A classic and beautifully illustrated alchemical text that uses symbolic imagery to describe the process of achieving the Philosopher\'s Stone.',
      },
    ],
  },
];
