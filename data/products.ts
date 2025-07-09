import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Melissa Officinalis',
    tincture: 'Elixir of Joy',
    description: 'A calming spagyric of Lemon Balm, known to uplift the spirit and soothe the nervous system.',
    imageUrl: 'https://picsum.photos/400/500?image=106',
    galleryUrls: [
      'https://picsum.photos/400/500?image=106',
      'https://picsum.photos/800/600?image=102',
      'https://picsum.photos/800/600?image=103',
      'https://picsum.photos/800/600?image=104',
    ],
    longDescription: 'Our Elixir of Joy is a potent spagyric preparation of Melissa officinalis, cherished through the ages for its ability to gladden the heart and quiet a restless mind. We harvest the lemon-scented leaves at dawn, when their volatile oils are most abundant, and begin the alchemical work of separating, purifying, and recombining its essence. This process yields a holistic remedy that addresses not just the physical body but the emotional and energetic as well, bringing a sense of sunlit calm to your inner world.',
    keyBenefits: [
      'Soothes the nervous system',
      'Uplifts mood and dispels melancholy',
      'Promotes restful sleep',
      'Eases digestive tension related to stress'
    ],
    planetaryInfluence: 'Jupiter - Its expansive, joyful, and optimistic energy is concentrated in this elixir, helping to broaden one\'s perspective and foster a sense of well-being.',
  },
  {
    id: 2,
    name: 'Artemisia Absinthium',
    tincture: 'Tincture of Vision',
    description: 'Wormwood spagyric, traditionally used for purification and enhancing intuitive clarity.',
    imageUrl: 'https://picsum.photos/400/500?image=206',
    galleryUrls: [
      'https://picsum.photos/400/500?image=206',
      'https://picsum.photos/800/600?image=201',
      'https://picsum.photos/800/600?image=202',
      'https://picsum.photos/800/600?image=203',
    ],
    longDescription: 'The Tincture of Vision is a powerful preparation of Artemisia absinthium, a plant long associated with divination and the clearing of psychic channels. This spagyric is not for the faint of heart; its energy is sharp, clarifying, and profoundly purifying. It works to strip away illusion and self-deception, allowing for a more direct connection to one\'s intuition and inner wisdom. It is an ideal ally for dream work, meditation, and any practice that requires unclouded perception.',
    keyBenefits: [
      'Enhances intuitive clarity and insight',
      'Supports vivid and meaningful dream recall',
      'Clears energetic stagnation',
      'Aids in scrying and divinatory practices'
    ],
    planetaryInfluence: 'Mars - The cutting, direct, and purifying energy of Mars is harnessed here, providing the force needed to sever ties with what no longer serves and to see truth with stark clarity.',
  },
  {
    id: 3,
    name: 'Rosa Damascena',
    tincture: 'Essence of the Heart',
    description: 'A gentle yet profound spagyric of Rose, harmonizing the heart and emotional body.',
    imageUrl: 'https://picsum.photos/400/500?image=305',
    galleryUrls: [
      'https://picsum.photos/400/500?image=305',
      'https://picsum.photos/800/600?image=301',
      'https://picsum.photos/800/600?image=302',
      'https://picsum.photos/800/600?image=304',
    ],
    longDescription: 'The Essence of the Heart is a sublime spagyric of Rosa damascena, the alchemical flower par excellence. This elixir works gently on the heart center, helping to soothe old wounds, soften emotional armor, and cultivate compassion for oneself and others. The delicate and painstaking process of creating a Rose spagyric captures its full spectrum, from the heavenly aroma of its soul to the mineral wisdom of its body. It is a balm for grief, anxiety, and feelings of disconnection.',
    keyBenefits: [
      'Opens and harmonizes the heart chakra',
      'Soothes grief and emotional distress',
      'Cultivates feelings of love and compassion',
      'Promotes emotional balance and grace'
    ],
    planetaryInfluence: 'Venus - This elixir is a pure embodiment of Venusian energy, governing love, beauty, connection, and the gentle unfolding of the heart.',
  },
  {
    id: 4,
    name: 'Achillea Millefolium',
    tincture: 'Elixir of Protection',
    description: 'Yarrow spagyric, a powerful ally for setting energetic boundaries and strengthening resolve.',
    imageUrl: 'https://picsum.photos/400/500?image=401',
    galleryUrls: [
      'https://picsum.photos/400/500?image=401',
      'https://picsum.photos/800/600?image=402',
      'https://picsum.photos/800/600?image=403',
      'https://picsum.photos/800/600?image=404',
    ],
    longDescription: 'Known as the "Wounded Warrior\'s Herb," Yarrow has a long history of use for protection on both physical and energetic levels. Our Elixir of Protection is a spagyric of Achillea millefolium, designed to fortify one\'s auric field and instill a sense of inner strength and resilience. It is an invaluable tool for sensitive individuals or anyone who feels easily drained by their environment. It helps to seal energetic leaks and create clear, healthy boundaries.',
    keyBenefits: [
      'Strengthens the energetic field (aura)',
      'Helps in establishing healthy boundaries',
      'Promotes courage and resilience',
      'Grounds and stabilizes one\'s energy'
    ],
    planetaryInfluence: 'Saturn - While often associated with Venus, the protective, boundary-setting aspect of Yarrow resonates strongly with Saturn\'s principles of structure, discipline, and containment.',
  },
   {
    id: 5,
    name: 'Hypericum Perforatum',
    tincture: 'Tincture of the Sun',
    description: 'St. John\'s Wort, capturing solar energy to dispel melancholy and bring inner light.',
    imageUrl: 'https://picsum.photos/400/500?image=503',
    galleryUrls: [
      'https://picsum.photos/400/500?image=503',
      'https://picsum.photos/800/600?image=501',
      'https://picsum.photos/800/600?image=502',
      'https://picsum.photos/800/600?image=504',
    ],
    longDescription: 'The Tincture of the Sun is a radiant preparation of Hypericum perforatum, a plant that blossoms at the peak of summer, its yellow flowers like tiny captured suns. This spagyric is created to be a vessel of solar light, designed to illuminate the darker corners of the psyche and burn away the fog of melancholy. It works to restore inner brightness and optimism, reconnecting one to their own source of vitality and creative fire. It is a remedy for the seasonal and emotional winter.',
    keyBenefits: [
      'Brings light to feelings of sadness',
      'Restores optimism and vitality',
      'Supports a healthy nervous system',
      'Connects one to their inner radiance'
    ],
    planetaryInfluence: 'Sun - As its common name implies, this plant is a pure vessel of Solar energy. The elixir captures this power, offering light, clarity, vitality, and consciousness.',
  },
  {
    id: 6,
    name: 'Lavandula Angustifolia',
    tincture: 'Essence of Serenity',
    description: 'A classic Lavender spagyric, perfect for promoting deep relaxation and restful sleep.',
    imageUrl: 'https://picsum.photos/400/500?image=602',
    galleryUrls: [
      'https://picsum.photos/400/500?image=602',
      'https://picsum.photos/800/600?image=601',
      'https://picsum.photos/800/600?image=603',
      'https://picsum.photos/800/600?image=604',
    ],
    longDescription: 'The Essence of Serenity is a spagyric that captures the soul of Lavender, a plant universally recognized for its calming and restorative properties. Our alchemical process elevates its effects, creating a remedy that works on a profound level to release tension from the mind, body, and spirit. It is the perfect companion for meditation, evening rituals, or any moment when a deep sense of peace is desired. It helps to clear mental chatter and prepare the way for profound rest.',
    keyBenefits: [
      'Promotes deep relaxation and calm',
      'Eases mental and physical tension',
      'Supports a restful and rejuvenating sleep cycle',
      'Clears the mind for meditation'
    ],
    planetaryInfluence: 'Mercury - Lavender\'s ability to clear the air and the mind aligns perfectly with the energy of Mercury, the planet of communication, intellect, and the transmission of information between realms.',
  },
];
