export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  video: string;
  description: string;
  amenities: string[];
  featured: boolean;
  agent: {
    name: string;
    role: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Skyborne Villa",
    location: "Neo Tokyo, High Orbit, Sector 4",
    type: "Sky Villa",
    price: "$15,000,000",
    beds: 4,
    baths: 5,
    area: "12,000 sq ft",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Experience the pinnacle of anti-gravity architecture. The Skyborne Villa features self-sustaining energy fields, biometric security integration, and unbroken panoramic views of Neo Tokyo. Its floating structure uses state-of-the-art magnetic levitation technology, providing a completely serene and vibration-free living environment.",
    amenities: ['Anti-Gravity Drive', 'Holographic Deck', 'Bio-filtered Atmosphere', 'Quantum Secure Vault', 'Hyper-elevator Access', 'Solar Sails'],
    featured: true,
    agent: {
      name: 'Elena Vance',
      role: 'Elite Broker',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 2,
    title: "Lunar Oasis Estate",
    location: "Sea of Tranquility, Sector 9",
    type: "Orbital Estate",
    price: "$8,500,000",
    beds: 6,
    baths: 7,
    area: "24,000 sq ft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "A serene sanctuary featuring bio-integrated oxygen systems and lunar-dust filtration. This estate offers a unique lunar experience with sub-surface exploration tunnels and a private observatory for deep space viewing.",
    amenities: ['Oxygen Garden', 'Lunar Dust Shield', 'Deep Space Telescope', 'Mag-lev Transport', 'Thermal Insulation', 'Crater Views'],
    featured: false,
    agent: {
      name: 'Dr. Julius Aris',
      role: 'Lunar Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 3,
    title: "Aura Penthouse",
    location: "New York, Sector 7, Skyline",
    type: "Penthouse",
    price: "$22,000,000",
    beds: 3,
    baths: 3,
    area: "6,500 sq ft",
    image: "https://images.unsplash.com/photo-1600607687931-cebf0746e48e?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Ultra-luxurious sky-living with smart-glass transparency control and private landing pad. The Aura Penthouse is situated at the very peak of the Skyline Tower, offering unparalleled prestige and a 24/7 robotic butler service.",
    amenities: ['Smart Glass Walls', 'Private Landing Pad', 'Robotic Butler', 'Sky Pool', 'Zero-G Gym', 'Quantum Security'],
    featured: true,
    agent: {
      name: 'Sophia Lin',
      role: 'Skyline Expert',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 4,
    title: "Nebula Retreat",
    location: "Mars Alpha Colony, Red Basin",
    type: "Sky Villa",
    price: "$5,200,000",
    beds: 5,
    baths: 4,
    area: "8,000 sq ft",
    image: "https://images.unsplash.com/photo-1628108398466-93d43d395ecb?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Eco-friendly Mars habitat with integrated geothermal heating and red-planet aesthetics. This villa is designed for sustainable off-world living, featuring a pressurized greenhouse for organic food production.",
    amenities: ['Geothermal Power', 'Bio-Greenhouse', 'Pressurized Entry', 'Mars Rover Port', 'Radiation Shield', 'Sandstorm Deflector'],
    featured: false,
    agent: {
      name: 'Marcus Sterling',
      role: 'Mars Ambassador',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 5,
    title: "Zenith Apex Tower",
    location: "London, Sky District, Upper Tier",
    type: "Penthouse",
    price: "$18,500,000",
    beds: 4,
    baths: 4,
    area: "9,200 sq ft",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "The pinnacle of London sky-living with automated climate adjustment and butler AI. The Zenith Apex offers a historic yet futuristic view of the Thames from 200 floors above.",
    amenities: ['Butler AI', 'Climate Control', 'Cloud Terrace', 'Sound Isolation', 'High-Speed Lift', 'London Views'],
    featured: true,
    agent: {
      name: 'Elena Vance',
      role: 'Elite Broker',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 6,
    title: "Ceres Bio-Dome",
    location: "Asteroid Belt, Sector Prime",
    type: "Orbital Estate",
    price: "$42,000,000",
    beds: 8,
    baths: 10,
    area: "100,000 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Massive orbital estate with artificial gravity parks and deep-space observation decks. The Ceres Bio-Dome is a self-sustaining city-state for the ultra-wealthy, offering complete autonomy in deep space.",
    amenities: ['Artificial Gravity', 'Space Observation', 'Self-Sustaining Biome', 'Deep Space Comms', 'Medical Suite', 'Private Shuttle'],
    featured: false,
    agent: {
      name: 'Marcus Sterling',
      role: 'Visionary Lead',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 7,
    title: "Horizon Skyline Loft",
    location: "Dubai, Sky Marina, Sector 12",
    type: "Penthouse",
    price: "$12,800,000",
    beds: 3,
    baths: 4,
    area: "7,200 sq ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "A breathtaking Dubai sky-loft with panoramic desert-to-sea views, holographic infinity pool, and climate-controlled terraces. The Horizon features an advanced home automation system controlled by voice and gesture.",
    amenities: ['Holographic Pool', 'Desert Views', 'Voice Automation', 'Climate Terrace', 'Private Helipad', 'Panoramic Glass'],
    featured: false,
    agent: {
      name: 'Sophia Lin',
      role: 'Skyline Expert',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 8,
    title: "Quantum Reef Station",
    location: "Pacific Trench, Deep Blue Sector",
    type: "Orbital Estate",
    price: "$31,000,000",
    beds: 7,
    baths: 8,
    area: "45,000 sq ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "The world's first deep-sea luxury estate, built at the edge of the Pacific Trench. Features pressurized coral gardens, bioluminescent lighting systems, and submarine docking bays for personal aquatic exploration.",
    amenities: ['Submarine Bay', 'Coral Gardens', 'Bioluminescent Lights', 'Pressure Shield', 'Aqua Observatory', 'Deep Sea Comms'],
    featured: true,
    agent: {
      name: 'Dr. Julius Aris',
      role: 'Aquatic Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 9,
    title: "Olympus Citadel",
    location: "Mars, Olympus Mons Summit",
    type: "Sky Villa",
    price: "$28,500,000",
    beds: 6,
    baths: 6,
    area: "18,000 sq ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Perched atop the tallest volcano in the solar system, the Olympus Citadel offers unmatched views of the Martian landscape. Features a self-contained atmospheric dome with Earth-standard climate and a private research laboratory.",
    amenities: ['Atmospheric Dome', 'Research Lab', 'Volcanic Views', 'Earth Climate', 'Emergency Pod', 'Mars Rover Fleet'],
    featured: false,
    agent: {
      name: 'Marcus Sterling',
      role: 'Mars Ambassador',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
    }
  },
  {
    id: 10,
    title: "Aurora Borealis Suite",
    location: "Reykjavik, Arctic Sky Ring, Sector 1",
    type: "Penthouse",
    price: "$9,750,000",
    beds: 4,
    baths: 5,
    area: "11,500 sq ft",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
    video: '/hero-video.mp4',
    description: "Suspended above the Arctic Circle, this suite offers nightly views of the Northern Lights through its retractable crystal dome ceiling. Features geothermal-powered heating and an ice-crystal spa for ultimate relaxation.",
    amenities: ['Crystal Dome Ceiling', 'Aurora Views', 'Geothermal Power', 'Ice Spa', 'Retractable Roof', 'Arctic Observatory'],
    featured: true,
    agent: {
      name: 'Elena Vance',
      role: 'Elite Broker',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
    }
  },
];
