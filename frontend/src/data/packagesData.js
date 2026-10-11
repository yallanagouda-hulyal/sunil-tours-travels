/**
 * Shared Authentic Packages Data for Sunil Tours N Travels
 * Contains verified day-wise tour circuits, group excursions, and adventure packages.
 * Synchronizes with backend API and provides resilient offline fallback.
 */

export const defaultPackages = [
  {
    _id: 'pkg-1',
    id: 'pkg-1',
    name: 'Day 1: Mullayanagiri & Bababudangiri Circuit',
    slug: 'day-1',
    duration: 'Full Day (8-9 Hours)',
    description: 'Explore Karnataka’s highest peak Mullayanagiri, adventure zipline, Jhari waterfalls via 4x4 off-road jeep, Honnamanahalla falls, Shooting Point, Bababudangiri caves, and Z Point trek.',
    category: 'Sightseeing',
    categories: ['Sightseeing', 'Adventure'],
    price: 3500,
    priceLabel: 'Vehicle charges',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Hills, Waterfalls & Off-Road Jeep Safari',
        places: [
          'Mullayanagiri Peak (1,930m)',
          'Adventure Zipline Spot',
          'Honnamanahalla Waterfalls',
          'Jhari Waterfalls (4x4 Jeep Safari)',
          'Shooting Point Viewpoint',
          'Bababudangiri Sacred Caves',
          'Z Point Sunset Trek'
        ],
        description: 'Morning pickup from hotel/homestay in Chikkamagaluru. Drive to Mullayanagiri peak for morning cloud bed, experience local offroad 4x4 jeep trek to Jhari waterfall, visit historic Bababudangiri caves and end with Z Point sunset view.'
      }
    ],
    locationCards: [
      {
        name: 'Mullayanagiri Peak',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
        description: 'Highest peak in Karnataka (1,930m) with misty cloud walk and Shiva temple summit.',
        badge: '1,930m Summit'
      },
      {
        name: 'Zipline & High Rope Adventure',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        description: 'Thrilling aerial zipline flying fox across green mountain valleys.',
        badge: 'Adventure Thrill'
      },
      {
        name: 'Honnamanahalla Waterfalls',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg',
        description: 'Scenic roadside waterfall surrounded by lush green mountain vegetation.',
        badge: 'Roadside Falls'
      },
      {
        name: 'Jhari Waterfalls (Dabbadabba)',
        image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
        description: 'Milky buttermilk waterfalls deep inside coffee rainforest reached by 4x4 jeep.',
        badge: '4x4 Jeep Safari'
      },
      {
        name: 'Shooting Point Viewpoint',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Famous movie shooting spot with sweeping green hill valley backgrounds.',
        badge: 'Scenic Viewpoint'
      },
      {
        name: 'Bababudangiri Caves & Dattapeetha',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mullayanagiri_in_Chikmagalur_district_of_Karnataka.jpg',
        description: 'Sacred mountain range and cave shrine of Sufi saint Baba Budan who brought coffee to India.',
        badge: 'Heritage Cave'
      },
      {
        name: 'Z Point Sunset Viewpoint',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: '3 km ridge trek offering breathtaking sunset and cloud valley panoramas.',
        badge: 'Sunset Trek'
      }
    ],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/2/25/Mullayanagiri_in_Chikmagalur_district_of_Karnataka.jpg',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Start early by 7:00 AM to enjoy cloud bed walk at Mullayanagiri Peak.',
      'Wear comfortable shoes for climbing ~500 steps to the summit temple.',
      'Carry light woollens or jacket as mountain top weather is cool and breezy.',
      'Jhari waterfall 4x4 jeep safari fee (~₹500-700/jeep) is payable at forest checkpoint.'
    ],
    activities: [
      'Mullayanagiri Peak Trekking',
      '4x4 Off-Road Jeep Safari',
      'Zipline Flying Fox Activity',
      'Cave & Mountain Photography'
    ],
    inclusions: [
      'Private Sightseeing Vehicle (Sedan/SUV/Tempo according to group size)',
      'Experienced Local Driver cum Guide',
      'Fuel charges, Tolls & Driver allowances',
      'Pickup & Drop within Chikkamagaluru town limits'
    ],
    exclusions: [
      'Waterfall entry & parking tickets',
      'Jhari Waterfalls 4x4 Jeep ride fare (~₹500/jeep)',
      'Zipline & adventure activity charges',
      'Food, snacks & personal expenses'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Mullayanagiri_Peak_%288322117350%29.jpg',
    published: true,
    featured: true
  },
  {
    _id: 'pkg-2',
    id: 'pkg-2',
    name: 'Day 2: Kemmanagundi & Waterfalls Circuit',
    slug: 'day-2',
    duration: 'Full Day (9-10 Hours)',
    description: 'Visit Siri Cafe statue landmark, Devaramane temple viewpoint, Kalhatti falls, Kemmanagundi Raj Bhavan gardens, Z Point trail, and Hebbe falls estate jeep safari.',
    category: 'Sightseeing',
    categories: ['Sightseeing', 'Adventure'],
    price: 4000,
    priceLabel: 'Vehicle charges',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Royal Hill Station & Rainforest Waterfalls',
        places: [
          'Siri Cafe & Chikkamagaluru Statue',
          'Devaramane Temple & Viewpoint',
          'Kalhattagiri Waterfalls & Temple',
          'Kemmanagundi Raj Bhavan Gardens',
          'Z Point Trekking Trail',
          'Hebbe Waterfalls (Forest Jeep Safari)'
        ],
        description: 'Morning departure towards Kemmanagundi hill station via Siri Cafe selfie point, Devaramane green valleys, cascading Kalhattagiri temple falls, and Hebbe waterfalls inside coffee estate.'
      }
    ],
    locationCards: [
      {
        name: 'Siri Cafe & Statue Landmark',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Famous Mother Nature green statue garden & coffee selfie point.',
        badge: 'Landmark Selfie'
      },
      {
        name: 'Devaramane Temple & Viewpoint',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Historic hilltop temple offering panoramic views of rolling Western Ghats valleys.',
        badge: 'Valley Viewpoint'
      },
      {
        name: 'Kalhatti Waterfalls & Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg',
        description: 'Cascading waters falling over the ancient rock-cut Veerabhadreshwara Temple.',
        badge: 'Temple Waterfall'
      },
      {
        name: 'Kemmanagundi Raj Bhavan Gardens',
        image: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=800&q=80',
        description: 'Maharaja summer retreat featuring Raj Bhavan rose gardens and deep mountain valley vistas.',
        badge: 'Royal Hill Station'
      },
      {
        name: 'Hebbe Waterfalls & Forest Jeep Route',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
        description: 'Spectacular 168m two-tiered waterfall surrounded by rainforest and coffee plantations.',
        badge: 'Rainforest Safari'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/a/ad/Hebbe_falls%2C_Chikmagalur%2C_Karnataka.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Kallathigiri_falls_%2828204534956%29.jpg',
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Hebbe Falls forest department jeep tickets are issued at Kemmanagundi base checkpoint.',
      'Watch your step near slippery rock steps at Kalhattagiri temple waterfalls.',
      'Great day tour for families, couples, photographers and nature lovers.'
    ],
    activities: [
      'Rainforest Waterfall Bathing',
      'Forest Jeep Safari to Hebbe Falls',
      'Raj Bhavan Botanical Garden Walk',
      'Siri Cafe Selfie Photography'
    ],
    inclusions: [
      'Private Vehicle with dedicated local driver',
      'Fuel charges & driver allowances',
      'Hotel pickup & drop within town limits'
    ],
    exclusions: [
      'Hebbe Falls forest department jeep ticket',
      'Garden entry tickets (~₹20 per person)',
      'Meals, snacks & personal purchases'
    ],
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
    published: true,
    featured: true
  },
  {
    _id: 'pkg-3',
    id: 'pkg-3',
    name: 'Day 3: Heritage & Temples Circuit',
    slug: 'day-3',
    duration: 'Full Day (7-8 Hours)',
    description: 'Discover world-famous 12th-century Hoysala stone architecture at Hiremagalur, Belur Chennakeshava, Halebidu Hoysaleswara, and Belavadi temples along with Yagachi Dam water sports.',
    category: 'Sightseeing',
    categories: ['Sightseeing', 'Group'],
    price: 3500,
    priceLabel: 'Vehicle charges',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Hoysala Architecture & Water Sports',
        places: [
          'Hiremagalur Kodandarama Temple',
          'Belur Chennakeshava Temple',
          'Halebidu Hoysaleswara Temple',
          'Belavadi Veera Narayana Temple',
          'Yagachi Dam & Water Sports'
        ],
        description: 'Journey through ancient Hoysala empire capitals. Admire detailed Madanika stone carvings at Belur & Halebidu, visit quiet Belavadi temple, and enjoy jet ski / speed boat ride at Yagachi Dam.'
      }
    ],
    locationCards: [
      {
        name: 'Hiremagalur Kodandarama Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
        description: 'Ancient temple where Lord Rama is portrayed with Sita on his right side.',
        badge: 'Sacred Heritage'
      },
      {
        name: 'Belur Chennakeshava Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
        description: '12th-century stone carving masterpiece with Madanika bracket maidens and star-shaped base.',
        badge: 'UNESCO Heritage'
      },
      {
        name: 'Halebidu Hoysaleswara Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg',
        description: 'Twin Shiva temple featuring relief friezes of elephants, lions, and mythological scenes.',
        badge: 'Twin Shrine'
      },
      {
        name: 'Belavadi Veera Narayana Temple',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/60/The_magestic_Chennakeshava_temple%2C_Belur%2C_Karnataka%2C_India.jpg',
        description: 'Trikuta (three-shrine) Hoysala temple surrounded by green village fields.',
        badge: 'Trikuta Temple'
      },
      {
        name: 'Yagachi Dam & Water Activities',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        description: 'Water sports reservoir offering Jet Ski, Speed Boat rides, Banana Ride, and Bumper Rides.',
        badge: 'Water Sports'
      }
    ],
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/9/90/Hoysaleswara_temple%2C_Halebidu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/60/The_magestic_Chennakeshava_temple%2C_Belur%2C_Karnataka%2C_India.jpg',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Hire an official ASI guide at Belur to learn the stories behind stone carvings.',
      'Remove footwear before entering temple inner stone sanctums.',
      'Bring extra dry clothes if participating in Yagachi Dam water sports.'
    ],
    activities: [
      'Hoysala Stone Heritage Exploration',
      'Architectural & Monument Photography',
      'Yagachi Dam Jet Ski & Speed Boating',
      'Local Handicraft & Artifact Shopping'
    ],
    inclusions: [
      'Private Sightseeing Vehicle',
      'Driver charges, fuel & tolls',
      'Hotel pickup & drop'
    ],
    exclusions: [
      'Yagachi Dam water sports activity tickets',
      'Guide fees at Belur/Halebidu',
      'Lunch, beverages & camera tickets'
    ],
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Chennakeshava_Temple_at_Belur.jpg',
    published: true,
    featured: true
  },
  {
    _id: 'pkg-4',
    id: 'pkg-4',
    name: 'Day 4: Custom Sightseeing & Adventure',
    slug: 'day-4',
    duration: 'Full Day (Flexible Hours)',
    description: 'Tailor your own custom sightseeing plan across Chikkamagaluru, coffee plantation estates, off-road mountain jeep trails, or shopping markets.',
    category: 'Custom',
    categories: ['Custom', 'Adventure', 'Sightseeing'],
    price: 3500,
    priceLabel: 'Vehicle charges',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Customized Sightseeing & Coffee Estate Tour',
        places: [
          'Custom Viewpoint Circuit',
          'Coffee Estate Walk & Tasting',
          'Off-Road Jeep Adventure',
          'Spices & Coffee Purchasing Market'
        ],
        description: 'Customized private day tour planned according to your exact preferences. Spend extra time at coffee estates, viewpoints, or relaxing with family.'
      }
    ],
    locationCards: [
      {
        name: 'Custom Mountain & Off-Road Circuit',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
        description: 'Explore scenic offroad mountain trails at your own comfortable pace.',
        badge: 'Custom Circuit'
      },
      {
        name: 'Coffee Plantation Estate Tour',
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
        description: 'Walk through green Arabica coffee plantations and sample fresh roasted filter coffee.',
        badge: 'Coffee Estate'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Discuss your preferred destinations with the driver in the morning.',
      'Ideal option for families with senior citizens or small children wanting flexible timing.'
    ],
    activities: [
      'Estate Coffee Tasting & Walk',
      'Tailored Family Sightseeing',
      'Chikkamagaluru Coffee & Spices Shopping',
      'Custom Photography Tour'
    ],
    inclusions: [
      'Private Vehicle with driver for full day',
      'Fuel charges & driver allowances',
      'Flexible pickup & drop location'
    ],
    exclusions: [
      'Entry tickets & optional activity charges',
      'Food & personal expenses'
    ],
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
    published: true,
    featured: true
  },
  {
    _id: 'pkg-5',
    id: 'pkg-5',
    name: 'Student College Group Special Tour',
    slug: 'student-college-group-tour',
    duration: '2-3 Days',
    description: 'Budget-friendly group travel package for college and school trips with 50-seater luxury bus hire, campfire, trekking & sightseeing.',
    category: 'Student',
    categories: ['Student', 'Group', 'Adventure'],
    price: 950,
    priceLabel: 'Per student (approx for large groups)',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival & Peak Trekking',
        places: ['Mullayanagiri', 'Jhari Falls Jeep Safari', 'Campfire & Music'],
        description: 'Morning arrival, sightseeing on 4x4 jeeps, and evening group bonfire.'
      }
    ],
    locationCards: [
      {
        name: 'College Group Bus Transport',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
        description: '50-Seater luxury bus with surround sound & comfortable pushback seats.',
        badge: '50-Seater Bus'
      },
      {
        name: 'Campfire & Evening DJ Music',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        description: 'Evening bonfire, music, and group dinner at estate stay.',
        badge: 'Group Bonfire'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Advance booking recommended for college group bus permits.',
      'Custom student food menu arrangements available.'
    ],
    activities: ['Group Trekking', 'Campfire & Music', 'Educational Heritage Sightseeing'],
    inclusions: ['50-Seater Bus Transport', 'Group Coordination', 'Tolls & Driver Allowances'],
    exclusions: ['Personal entry tickets'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    published: true,
    featured: true
  },
  {
    _id: 'pkg-6',
    id: 'pkg-6',
    name: 'Corporate Team Outing & Retreat Package',
    slug: 'corporate-team-outing-package',
    duration: '2 Days / 1 Night',
    description: 'Tailored corporate getaway package with doorstep Bangalore/Mysore pickup, 10/50-seater transport, 3-star lodge/resort stay assistance & team trekking.',
    category: 'Corporate',
    categories: ['Corporate', 'Group', 'Adventure'],
    price: 2500,
    priceLabel: 'Per person (Customizable)',
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Doorstep Pickup, Resort Check-in & Jeep Safari',
        places: ['Doorstep AC Transport', '3-Star Resort Check-in', 'Off-Road Jeep Trek', 'Buffet Dinner'],
        description: 'Pickup from office premises, comfortable travel, resort stay and team building.'
      }
    ],
    locationCards: [
      {
        name: '3-Star Resort & Lodge Stay',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        description: 'Clean, comfortable 3-star lodge & resort rooms with modern bathrooms.',
        badge: 'Resort Stay'
      },
      {
        name: 'Authentic South Indian Buffet Meal',
        image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
        description: 'Delicious Malnad style buffet lunch and dinner spread for corporate teams.',
        badge: 'Buffet Meals'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80'
    ],
    travelTips: [
      'Doorstep pickup from Bangalore / Mysore corporate campuses.',
      'Custom itinerary and team building activities organized.'
    ],
    activities: ['Team Off-Road Trekking', 'Resort Lawn Bonfire', 'Coffee Estate Walk'],
    inclusions: ['Luxury AC Transport', 'Bangalore/Mysore Pickup & Drop', 'Tour Manager Support'],
    exclusions: ['Resort stay & meals quoted separately on request'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    published: true,
    featured: true
  }
];

/**
 * Serial weight helper for strict ordering
 */
export const getSerialWeight = (pkg) => {
  if (!pkg) return 10;
  const slug = (pkg.slug || '').toLowerCase();
  const name = (pkg.name || '').toLowerCase();
  if (slug === 'day-1' || name.startsWith('day 1')) return 1;
  if (slug === 'day-2' || name.startsWith('day 2')) return 2;
  if (slug === 'day-3' || name.startsWith('day 3')) return 3;
  if (slug === 'day-4' || name.startsWith('day 4')) return 4;
  if (slug.includes('3-day') || name.includes('3-day') || name.includes('complete')) return 5;
  if ((pkg.category || '').toLowerCase() === 'student' || name.includes('student')) return 6;
  if ((pkg.category || '').toLowerCase() === 'corporate' || name.includes('corporate')) return 7;
  return 10;
};

/**
 * Robust category matching function
 * Supports category keys: All, Sightseeing, Group, Student, Corporate, Adventure, Custom
 */
export const matchPackageCategory = (pkg, selectedCategory) => {
  if (!pkg) return false;
  if (!selectedCategory || selectedCategory === 'All') return true;

  const target = selectedCategory.toLowerCase().trim();
  const cat = (pkg.category || '').toLowerCase().trim();
  const cats = Array.isArray(pkg.categories) ? pkg.categories.map((c) => c.toLowerCase().trim()) : [];
  const name = (pkg.name || '').toLowerCase();
  const slug = (pkg.slug || '').toLowerCase();
  const desc = (pkg.description || '').toLowerCase();
  const activities = Array.isArray(pkg.activities) ? pkg.activities.map((a) => a.toLowerCase()) : [];

  // 1. Direct or multi-category match
  if (cat === target || cats.includes(target)) {
    return true;
  }

  // 2. Group tours filter: Student & Corporate excursions, multi-seater group trips
  if (target === 'group') {
    return (
      cat === 'group' ||
      cat === 'student' ||
      cat === 'corporate' ||
      cats.includes('group') ||
      name.includes('group') ||
      name.includes('student') ||
      name.includes('corporate') ||
      desc.includes('group')
    );
  }

  // 3. Student trips filter
  if (target === 'student') {
    return (
      cat === 'student' ||
      cats.includes('student') ||
      name.includes('student') ||
      desc.includes('student') ||
      desc.includes('college')
    );
  }

  // 4. Corporate trips filter
  if (target === 'corporate') {
    return (
      cat === 'corporate' ||
      cats.includes('corporate') ||
      name.includes('corporate') ||
      desc.includes('corporate')
    );
  }

  // 5. Adventure tours filter
  if (target === 'adventure') {
    return (
      cat === 'adventure' ||
      cats.includes('adventure') ||
      name.includes('adventure') ||
      desc.includes('adventure') ||
      desc.includes('jeep') ||
      desc.includes('trek') ||
      activities.some((a) => a.includes('trek') || a.includes('jeep') || a.includes('safari') || a.includes('zipline'))
    );
  }

  // 6. Custom tours filter
  if (target === 'custom') {
    return (
      cat === 'custom' ||
      cats.includes('custom') ||
      name.includes('custom') ||
      desc.includes('custom')
    );
  }

  // 7. Day Sightseeing circuits filter
  if (target === 'sightseeing') {
    return (
      cat === 'sightseeing' ||
      cats.includes('sightseeing') ||
      name.startsWith('day') ||
      slug.startsWith('day-') ||
      name.includes('day 1') ||
      name.includes('day 2') ||
      name.includes('day 3') ||
      name.includes('day 4') ||
      name.includes('circuit')
    );
  }

  return false;
};

/**
 * Package lookup by slug, ID, or name
 */
export const findPackage = (slugOrId, dataset = defaultPackages) => {
  if (!slugOrId) return null;
  const target = String(slugOrId).trim().toLowerCase();

  // 1. Direct slug match
  let found = dataset.find((p) => (p.slug || '').toLowerCase() === target);
  if (found) return found;

  // 2. Direct ID match
  found = dataset.find((p) => String(p._id) === target || String(p.id) === target);
  if (found) return found;

  // 3. Day prefix match (e.g. 'day-1-mullayanagiri-tour' -> 'day-1')
  const matchDay = target.match(/^(day-\d)/i);
  if (matchDay) {
    found = dataset.find((p) => (p.slug || '').toLowerCase() === matchDay[1]);
    if (found) return found;
  }

  // 4. Sanitized name match
  found = dataset.find((p) => {
    const nameSlug = (p.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return nameSlug === target;
  });
  if (found) return found;

  // 5. Partial keyword match
  if (target.includes('day-1') || target.includes('mullayanagiri')) {
    return dataset.find((p) => p.slug === 'day-1') || null;
  }
  if (target.includes('day-2') || target.includes('kemmanagundi')) {
    return dataset.find((p) => p.slug === 'day-2') || null;
  }
  if (target.includes('day-3') || target.includes('belur') || target.includes('heritage')) {
    return dataset.find((p) => p.slug === 'day-3') || null;
  }
  if (target.includes('day-4') || target.includes('custom')) {
    return dataset.find((p) => p.slug === 'day-4') || null;
  }
  if (target.includes('student') || target.includes('college')) {
    return dataset.find((p) => p.slug === 'student-college-group-tour') || null;
  }
  if (target.includes('corporate') || target.includes('retreat')) {
    return dataset.find((p) => p.slug === 'corporate-team-outing-package') || null;
  }

  return null;
};
