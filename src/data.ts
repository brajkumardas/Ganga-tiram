export interface GangaPlace {
  id: number;
  name: string;
  state: string;
  description: string;
  features: string[];
  cuisine: string;
  art: string;
  heritage: string;
}

export const gangaPlaces: GangaPlace[] = [
  {
    id: 1,
    name: "Gomukh",
    state: "Uttarakhand",
    description: "The source of the Bhagirathi river, one of the primary headstreams of the Ganges.",
    features: ["Glacier", "Trekking", "High Altitude"],
    cuisine: "Local Pahadi food",
    art: "Natural Ice structures",
    heritage: "Purest form of the river"
  },
  {
    id: 2,
    name: "Gangotri",
    state: "Uttarakhand",
    description: "One of the four sites in the Chota Char Dham pilgrimage circuit.",
    features: ["Temple", "Spiritual", "Snowy Peaks"],
    cuisine: "Garhwali Cuisine",
    art: "Temple Architecture",
    heritage: "Ancient shrine of Ganga"
  },
  {
    id: 3,
    name: "Uttarkashi",
    state: "Uttarakhand",
    description: "Known as the 'Kashi of the North', famous for its Kashi Vishwanath temple.",
    features: ["Temples", "Riverside Ghats", "Adventure"],
    cuisine: "Pahadi snacks",
    art: "Wood carving",
    heritage: "Religious Significance"
  },
  {
    id: 4,
    name: "Devprayag",
    state: "Uttarakhand",
    description: "The confluence of Bhagirathi and Alaknanda rivers, where the Ganga officially begins.",
    features: ["Sangam", "Raghunathji Temple", "Suspension Bridges"],
    cuisine: "Traditional Uttarakhandi sweets",
    art: "Stone inscriptions",
    heritage: "Birthplace of Ganga name"
  },
  {
    id: 5,
    name: "Rishikesh",
    state: "Uttarakhand",
    description: "The Yoga Capital of the World and a gateway to the Himalayas.",
    features: ["Yoga", "Rafting", "Ganga Aarti"],
    cuisine: "Ayurvedic Food",
    art: "Wall murals",
    heritage: "Ashram culture"
  },
  {
    id: 6,
    name: "Haridwar",
    state: "Uttarakhand",
    description: "One of the seven holiest places in Hinduism, where Ganga enters the plains.",
    features: ["Har Ki Pauri", "Kumbh Mela", "Mansa Devi"],
    cuisine: "Aloo Puri, Lassi",
    art: "Handmade Diya making",
    heritage: "Ancient Gate of the Gods"
  },
  {
    id: 7,
    name: "Kanpur",
    state: "Uttar Pradesh",
    description: "A major industrial hub on the banks of Ganga, showing the river's economic importance.",
    features: ["Industrial Heritage", "Bithoor", "JK Temple"],
    cuisine: "Street food, Thaggu Ke Laddu",
    art: "Leather Craft",
    heritage: "Historical 1857 Mutiny sites"
  },
  {
    id: 8,
    name: "Prayagraj",
    state: "Uttar Pradesh",
    description: "The site of the Triveni Sangam, the confluence of Ganga, Yamuna, and the mythical Saraswati.",
    features: ["Triveni Sangam", "Kumbh Mela", "Anand Bhawan"],
    cuisine: "Guava (Allahabadi Surkha)",
    art: "Kumbh Art",
    heritage: "Cultural hub of India"
  },
  {
    id: 9,
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "One of the world's oldest continuously inhabited cities, the spiritual heart of India.",
    features: ["Kashi Vishwanath", "84 Ghats", "Banarasi Saree"],
    cuisine: "Banarasi Paan, Chaat, Kachori Sabzi",
    art: "Banarasi Silk Weaving",
    heritage: "Living Heritage City"
  },
  {
    id: 10,
    name: "Patna",
    state: "Bihar",
    description: "Ancient Pataliputra, the capital of Maurya and Gupta empires.",
    features: ["Golghar", "Gandhi Maidan", "Patna Saheb"],
    cuisine: "Litti Chokha",
    art: "Madhubani Painting (region)",
    heritage: "Imperial History"
  },
  {
    id: 11,
    name: "Munger",
    state: "Bihar",
    description: "Famous for its fort and the Bihar School of Yoga.",
    features: ["Munger Fort", "Yoga School", "Hot Springs"],
    cuisine: "Thekua, Bihari snacks",
    art: "Gun making (historical)",
    heritage: "Ancient Anga Kingdom"
  },
  {
    id: 12,
    name: "Sultanganj",
    state: "Bihar",
    description: "Known for the Ajgaibi Nath Temple situated on a rock in the middle of Ganga.",
    features: ["Rock Temple", "Shravani Mela", "Pilgrimage"],
    cuisine: "Local sweets",
    art: "Terracotta (Vikramshila nearby)",
    heritage: "Kanwar Yatra starting point"
  },
  {
    id: 13,
    name: "Bhagalpur",
    state: "Bihar",
    description: "The Silk City, famous for its Tussar silk and as a hub for river dolphin conservation.",
    features: ["Silk Weaving", "Vikramshila", "Dolphin Sanctuary"],
    cuisine: "Fish curry",
    art: "Manjusha Art",
    heritage: "Ancient University ruins"
  },
  {
    id: 14,
    name: "Mayapur",
    state: "West Bengal",
    description: "The spiritual headquarters of ISKCON.",
    features: ["Grand Palace", "Kirtan", "Museum"],
    cuisine: "Satvic Prasadam",
    art: "Devotional Music",
    heritage: "Chaitanya Mahaprabhu birthplace"
  },
  {
    id: 15,
    name: "Kolkata",
    state: "West Bengal",
    description: "The City of Joy, with a rich colonial and cultural history along the Hooghly.",
    features: ["Dakshineswar", "Howrah Bridge", "Victoria Memorial"],
    cuisine: "Rosogolla, Mishti Doi, Fish Fry",
    art: "Kalighat Painting",
    heritage: "Renaissance of Bengal"
  },
  {
    id: 16,
    name: "Gangasagar",
    state: "West Bengal",
    description: "Where the holy Ganga meets the Bay of Bengal.",
    features: ["Sagar Sangam", "Kapil Muni Temple", "Sagar Mela"],
    cuisine: "Bengali delicacies",
    art: "Coir craft",
    heritage: "Ultimate Pilgrimage point"
  }
];

export const contribFACE = [
  {
    letter: "F",
    title: "Festivals",
    description: "Celebrate and promote the grand festivals like Kumbh Mela and Ganga Aarti that showcase India's soul.",
    icon: "Sparkles",
    image: "/src/assets/images/ganga_festivals_aarti_1777100934524.png"
  },
  {
    letter: "A",
    title: "Arts",
    description: "Support the local artisans and traditional crafts like Banarasi weaving and Madhubani painting.",
    icon: "Palette",
    image: "/src/assets/images/ganga_art_crafts_1777100912325.png"
  },
  {
    letter: "C",
    title: "Culture",
    description: "Experience and preserve the diverse cuisines, music, and philosophical traditions of the Ganga basin.",
    icon: "Music",
    image: "/src/assets/images/ganga_culture_heritage_1777100835789.png"
  },
  {
    letter: "E",
    title: "Environmental Preservation",
    description: "Join the mission to clean Mother Ganga, protect river dolphins, and restore the ecosystem.",
    icon: "Leaf",
    image: "/src/assets/images/ganga_environment_preservation_1777100892208.png"
  }
];
