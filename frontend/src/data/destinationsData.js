/**
 * Shared Authentic Destinations Data for Sunil Tours N Travels
 * Serves as the central repository for destination cards, search/filter, and detail views.
 * Supports offline/static fallback and seamless synchronization with backend API.
 */

export const defaultDestinations = [
  {
    _id: '1',
    id: '1',
    name: 'Mullayanagiri Peak',
    slug: 'mullayanagiri-peak',
    aliases: ['mullayanagiri', 'mullayanagiri-temple'],
    category: 'Nature',
    subCategory: 'Viewpoints',
    tags: ['nature', 'viewpoints', 'adventure', 'mountain'],
    location: 'Chikkamagaluru (22 km)',
    duration: '2-3 Hours',
    description: 'Highest peak in Karnataka standing tall at 1,930m. Enjoy panoramic green mountain ridges, misty valleys, and serene temple views at the summit.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/25/Mullayanagiri_in_Chikmagalur_district_of_Karnataka.jpg',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    visitorInfo: 'Best visited during early morning hours for breathtaking sunrise and cloud bed vistas. Requires climbing approximately 500 steps from the vehicle parking area.',
    additionalFees: 'Local parking and hill entry fee applicable locally.',
    published: true,
    featured: true
  },
  {
    _id: '2',
    id: '2',
    name: 'Hebbe Waterfalls',
    slug: 'hebbe-waterfalls',
    aliases: ['hebbe', 'hebbe-falls'],
    category: 'Waterfalls',
    subCategory: 'Nature',
    tags: ['waterfalls', 'nature', 'adventure', 'safari'],
    location: 'Kemmanagundi (65 km)',
    duration: '3-4 Hours',
    description: 'Spectacular 2-stage waterfall cascading 168 meters inside dense coffee estate rainforests, reachable via an adventurous 4x4 off-road jeep trek.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hebbe_Falls.JPG',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80'
    ],
    visitorInfo: 'Forest department licensed 4x4 jeep ride is mandatory from the Kemmanagundi base checkpoint. Please wear slip-resistant trekking shoes.',
    additionalFees: 'Forest department jeep tickets and eco-fee applicable locally.',
    published: true,
    featured: true
  },
  {
    _id: '3',
    id: '3',
    name: 'Belur Chennakeshava Temple',
    slug: 'belur-chennakeshava-temple',
    aliases: ['belur', 'belur-temple', 'chennakeshava-temple'],
    category: 'Heritage',
    subCategory: 'Temples',
    tags: ['heritage', 'temples', 'architecture'],
    location: 'Belur, Hassan (26 km)',
    duration: '2 Hours',
    description: 'Famed 12th-century star-shaped stone temple on the Yagachi River, renowned for detailed Hoysala architectural carvings, bracket maidens, and history.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/60/The_magestic_Chennakeshava_temple%2C_Belur%2C_Karnataka%2C_India.jpg'
    ],
    visitorInfo: 'Certified archaeological guides and authorized audio tours are available at the entrance courtyard. Strict dress code applies inside the inner sanctum.',
    additionalFees: 'Entry is free. Optional ASI guide fees and shoe-keeping tokens.',
    published: true,
    featured: true
  },
  {
    _id: '4',
    id: '4',
    name: 'Halebidu Hoysaleswara Temple',
    slug: 'halebidu-hoysaleswara-temple',
    aliases: ['halebidu', 'halebidu-temple', 'hoysaleswara-temple'],
    category: 'Heritage',
    subCategory: 'Temples',
    tags: ['heritage', 'temples', 'architecture'],
    location: 'Halebidu (31 km)',
    duration: '2 Hours',
    description: 'Intricately carved twin Hoysala temple dedicated to Lord Shiva with ancient mythological relief friezes, soapstone pillars, and majestic Nandi monoliths.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg'
    ],
    visitorInfo: 'Well-maintained green lawns surround the monument. Ideal visiting hours are early morning or late afternoon for photography.',
    additionalFees: 'Free entry for all domestic and international visitors.',
    published: true,
    featured: true
  },
  {
    _id: '5',
    id: '5',
    name: 'Kalhatti Falls',
    slug: 'kalhattagiri-waterfalls',
    aliases: ['kalhatti-falls', 'kallathigiri-falls', 'kalhatti-waterfalls', 'kallathigiri-waterfalls'],
    category: 'Waterfalls',
    subCategory: 'Nature',
    tags: ['waterfalls', 'nature', 'temples'],
    location: 'Kemmanagundi (55 km)',
    duration: '2 Hours',
    description: 'Cascading waters falling over ancient rock-cut Veerabhadra temple near Kemmanagundi hill station surrounded by verdant hill scenery.',
    mainImage: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg'
    ],
    visitorInfo: 'Pilgrims take a holy dip in the falls before visiting the cave temple. Exercise caution while navigating wet slippery rocks.',
    additionalFees: 'Entry is free.',
    published: true,
    featured: false
  },
  {
    _id: '6',
    id: '6',
    name: 'Kemmanagundi & Z Point',
    slug: 'kemmanagundi-z-point',
    aliases: ['kemmanagundi', 'z-point', 'kemmannugundi'],
    category: 'Adventure',
    subCategory: 'Viewpoints',
    tags: ['adventure', 'nature', 'viewpoints'],
    location: 'Tarikere Taluk, Kemmanagundi (55 km)',
    duration: '4-5 Hours',
    description: 'A scenic hill station once the summer retreat of Maharaja Krishnaraja Wodeyar IV. Features lush Raj Bhavan rose gardens, deep valleys, and Z Point sunset trek.',
    mainImage: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    visitorInfo: '3 km thrilling ridge trek to Z Point offering magnificent Western Ghats valley panoramas. Sturdy footwear and hydration recommended.',
    additionalFees: 'Raj Bhavan ornamental garden entry tickets (~₹20/person) payable at gate.',
    published: true,
    featured: true
  },
  {
    _id: '7',
    id: '7',
    name: '4x4 Off-Road Jeep Trek',
    slug: 'off-road-jeep-trek',
    aliases: ['4x4-off-road-jeep-trek', 'jeep-trek', '4x4-jeep-trek', 'offroad-jeep-trek'],
    category: 'Adventure',
    subCategory: 'Nature',
    tags: ['adventure', 'nature', 'safari'],
    location: 'Western Ghats Trails',
    duration: '3-5 Hours',
    description: 'Thrilling 4x4 off-road jeep safari through rugged Western Ghats trails, coffee estates, stream crossings, and panoramic mountain viewpoints.',
    mainImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    visitorInfo: 'Handled by seasoned local four-wheel-drive mountaineering drivers. Early reservations advised for weekend batches and holiday rush.',
    additionalFees: 'Vehicle rental includes private jeep, driver, and estate passage permissions.',
    published: true,
    featured: true
  },
  {
    _id: '8',
    id: '8',
    name: 'Jhari Waterfalls (Dabbadabba)',
    slug: 'jhari-waterfalls',
    aliases: ['jhari-falls', 'buttermilk-falls', 'dabbadabba-falls'],
    category: 'Waterfalls',
    subCategory: 'Nature',
    tags: ['waterfalls', 'nature', 'adventure'],
    location: 'Attigundi, Chikkamagaluru (24 km)',
    duration: '2-3 Hours',
    description: 'Known as Buttermilk Falls due to its milky white cascading streams surrounded by dense forest and coffee estates. Accessible via thrilling 4x4 offroad jeep ride.',
    mainImage: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80'
    ],
    visitorInfo: 'Personal non-4x4 vehicles halt at the Attigundi gate. Dedicated off-road jeeps ferry passengers downhill to the spray zone.',
    additionalFees: 'Jeep trek fee (~₹500-₹700 per jeep) payable at the local cooperative desk.',
    published: true,
    featured: true
  }
];

/**
 * Robust destination lookup by slug, ID, alias, or sanitized name
 */
export const findDestination = (slugOrId, dataset = defaultDestinations) => {
  if (!slugOrId) return null;
  const target = String(slugOrId).trim().toLowerCase();

  // 1. Exact slug match
  let found = dataset.find((item) => (item.slug || '').toLowerCase() === target);
  if (found) return found;

  // 2. Exact ID match (_id or id)
  found = dataset.find((item) => String(item._id) === target || String(item.id) === target);
  if (found) return found;

  // 3. Known aliases match
  found = dataset.find((item) => item.aliases && item.aliases.some((alias) => alias.toLowerCase() === target));
  if (found) return found;

  // 4. Normalized slug without dashes or special chars
  const normalizedTarget = target.replace(/[^a-z0-9]/g, '');
  found = dataset.find((item) => {
    const itemSlugNorm = (item.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return itemSlugNorm === normalizedTarget;
  });
  if (found) return found;

  // 5. Sanitized name match
  found = dataset.find((item) => {
    const nameSlug = (item.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return nameSlug === target;
  });
  if (found) return found;

  // 6. Fuzzy / partial keyword heuristics
  if (target.includes('mullayanagiri')) {
    return dataset.find((item) => item.slug === 'mullayanagiri-peak') || null;
  }
  if (target.includes('hebbe')) {
    return dataset.find((item) => item.slug === 'hebbe-waterfalls') || null;
  }
  if (target.includes('belur')) {
    return dataset.find((item) => item.slug === 'belur-chennakeshava-temple') || null;
  }
  if (target.includes('halebid') || target.includes('halebeed')) {
    return dataset.find((item) => item.slug === 'halebidu-hoysaleswara-temple') || null;
  }
  if (target.includes('kalhatti') || target.includes('kallathi')) {
    return dataset.find((item) => item.slug === 'kalhattagiri-waterfalls') || null;
  }
  if (target.includes('kemmanagundi') || target.includes('z-point')) {
    return dataset.find((item) => item.slug === 'kemmanagundi-z-point') || null;
  }
  if (target.includes('jhari') || target.includes('buttermilk')) {
    return dataset.find((item) => item.slug === 'jhari-waterfalls') || null;
  }
  if (target.includes('jeep') || target.includes('offroad') || target.includes('off-road')) {
    return dataset.find((item) => item.slug === 'off-road-jeep-trek') || null;
  }

  return null;
};

/**
 * Helper to obtain related sightseeing spots
 */
export const getRelatedDestinations = (currentDest, dataset = defaultDestinations, limit = 3) => {
  if (!currentDest) return [];
  const currSlug = currentDest.slug || '';
  const currCat = (currentDest.category || '').toLowerCase();

  // Prefer items in the same category
  const sameCategory = dataset.filter((d) => d.slug !== currSlug && (d.category || '').toLowerCase() === currCat);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // Complement with other featured/verified destinations
  const others = dataset.filter((d) => d.slug !== currSlug && (d.category || '').toLowerCase() !== currCat);
  return [...sameCategory, ...others].slice(0, limit);
};
