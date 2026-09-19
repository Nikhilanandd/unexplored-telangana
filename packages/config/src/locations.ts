/**
 * Unexplored Telangana — Location Dataset
 * ========================================
 *
 * TO ADD A NEW LOCATION:
 * Copy the TEMPLATE below, fill in the fields, and append to this array.
 *
 * REQUIRED FIELDS:
 *   title            — display name
 *   slug             — kebab-case unique id (used in URLs)
 *   district         — district slug (see districts list below)
 *   category         — one of: waterfalls, forts, temples, lakes, reservoirs,
 *                       archaeological, eco-tourism, food, viewpoints,
 *                       wildlife, camping, museums, hidden-gems
 *   coordinates      — { lat, lng } from OpenStreetMap
 *   bestSeason       — e.g. "October – March"
 *   accessibility    — brief access description
 *   description      — 2-3 sentence overview
 *   travelTips       — array of 3 tips
 *   nearbyAttractions — array of 3 nearby places
 *   osmLink          — OpenStreetMap node/way/relation URL
 *
 * DISTRICT SLUGS (33 total):
 *   adilabad, bhadradri-kothagudem, hyderabad, jagtial, jangaon,
 *   jayashankar-bhupalpally, jogulamba-gadwal, kamareddy, karimnagar,
 *   khammam, komaram-bheem-asifabad, mahabubabad, mahabubnagar,
 *   mancherial, medak, medchal-malkajgiri, mulugu, nagarkurnool,
 *   nalgonda, narayanpet, nirmal, nizamabad, peddapalli,
 *   rajanna-sircilla, rangareddy, sangareddy, siddipet, suryapet,
 *   vikarabad, wanaparthy, warangal, yadadri-bhuvanagiri
 */

import type { Category } from '@ut/types'

export interface LocationData {
  title: string
  slug: string
  district: string
  category: Category
  coordinates: { lat: number; lng: number }
  bestSeason: string
  accessibility: string
  description: string
  travelTips: string[]
  nearbyAttractions: string[]
  osmLink: string
  entryFee?: string
  openingHours?: string
  facilities?: string[]
  howToReach?: string
  image?: string
}

/**
 * ── TEMPLATE: Copy, fill, and append ──
 */
// {
//   title: '...',
//   slug: '...',
//   district: '...',
//   category: '...',
//   coordinates: { lat: 0, lng: 0 },
//   bestSeason: 'October – March',
//   accessibility: '',
//   description: '',
//   travelTips: ['', '', ''],
//   nearbyAttractions: ['', '', ''],
//   osmLink: 'https://www.openstreetmap.org/...',
// },

export const LOCATIONS: LocationData[] = [
  // ═══════════════════════════════════════
  // ADILABAD (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Kuntala Waterfalls',
    slug: 'kuntala-waterfalls',
    district: 'adilabad',
    category: 'waterfalls',
    coordinates: { lat: 19.289, lng: 78.5 },
    bestSeason: 'August – December',
    accessibility: 'Steps descent to the base; moderate difficulty',
    description:
      'The highest waterfall in Telangana at 45 meters, cascading down rocky cliffs within the dense Sahyadri forests.',
    travelTips: [
      'Wear sturdy shoes for the descent',
      'Visit early morning to avoid crowds',
      'Pack a picnic — there are scenic spots at the base',
    ],
    nearbyAttractions: ['Pochera Falls', 'Kawal Wildlife Sanctuary', 'Nagoba Temple'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 5:30 PM',
    osmLink: 'https://www.openstreetmap.org/node/4694725366',
  },
  {
    title: 'Pochera Waterfalls',
    slug: 'pochera-waterfalls',
    district: 'adilabad',
    category: 'waterfalls',
    coordinates: { lat: 19.195, lng: 78.324 },
    bestSeason: 'August – January',
    accessibility: 'Short trek from parking area; slippery in monsoon',
    description:
      'A hidden cascade in a deep gorge of the Sahyadri range, famous for its thunderous roar during peak monsoon.',
    travelTips: [
      'Avoid swimming — currents are strong',
      'Best photographed from the viewing platform',
      'Combine with Kuntala Falls (30 min drive)',
    ],
    nearbyAttractions: ['Kuntala Falls', 'Kawal Wildlife Sanctuary', 'Basar Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/4694725375',
  },

  // ═══════════════════════════════════════
  // BHADRADRI KOTHAGUDEM (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Kinnerasani Wildlife Sanctuary',
    slug: 'kinnerasani-sanctuary',
    district: 'bhadradri-kothagudem',
    category: 'wildlife',
    coordinates: { lat: 17.674, lng: 80.693 },
    bestSeason: 'November – March',
    accessibility: 'Forested roads; guided safari recommended',
    description:
      'A scenic 635 sq km sanctuary on the Kinnerasani River, home to tigers, leopards, gaur, and hundreds of bird species.',
    travelTips: [
      'Book the forest safari through the Telangana Forest Dept website',
      'The dam views are spectacular at sunrise',
      'Best visited December–February for migrating birds',
    ],
    nearbyAttractions: ['Bhadrachalam Temple', 'Parnasala', 'Kinnerasani Dam'],
    entryFee: '₹50 per person, ₹200 for camera',
    openingHours: '7:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/relation/3305928',
  },
  {
    title: 'Bhadrachalam Temple',
    slug: 'bhadrachalam-temple',
    district: 'bhadradri-kothagudem',
    category: 'temples',
    coordinates: { lat: 17.67, lng: 80.883 },
    bestSeason: 'Year-round (Sri Rama Navami is peak)',
    accessibility: 'On Godavari riverbank; level access',
    description:
      'The sacred Sri Sita Ramachandra Swamy temple on the Godavari banks, built in the 17th century by the saint-composer Kancherla Gopanna.',
    travelTips: [
      'Visit during Sri Rama Navami for the celestial wedding ceremony',
      'Boat ride on Godavari from the temple ghat',
      'Parnasala is 35 km — a must-visit',
    ],
    nearbyAttractions: ['Parnasala', 'Kinnerasani Sanctuary', 'Godavari river ghats'],
    entryFee: 'Free',
    openingHours: '4:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384509',
  },

  // ═══════════════════════════════════════
  // HYDERABAD (5 places)
  // ═══════════════════════════════════════
  {
    title: 'Golconda Fort',
    slug: 'golconda-fort',
    district: 'hyderabad',
    category: 'forts',
    coordinates: { lat: 17.3833, lng: 78.4011 },
    bestSeason: 'October – February',
    accessibility: 'Steep climb to the top; moderate difficulty',
    description:
      'The legendary diamond capital of the world, spanning 11 km of fortified walls with incredible acoustic design.',
    travelTips: [
      'Book the evening sound and light show',
      'Wear comfortable walking shoes',
      'Hire an ASI guide for the hidden escape tunnels story',
    ],
    nearbyAttractions: ['Qutb Shahi Tombs', 'Taramati Baradari', 'Hussain Sagar'],
    entryFee: '₹25 for Indians, ₹300 for foreigners',
    openingHours: '8:00 AM – 5:30 PM (closed Mondays)',
    osmLink: 'https://www.openstreetmap.org/way/30805650',
  },
  {
    title: 'Charminar',
    slug: 'charminar',
    district: 'hyderabad',
    category: 'hidden-gems',
    coordinates: { lat: 17.3616, lng: 78.4747 },
    bestSeason: 'Year-round (avoid summer afternoons)',
    accessibility: 'In Old City; narrow crowded streets; motorable to the base',
    description:
      'The iconic 1591 monument with four minarets. The surrounding Laad Bazaar is a labyrinth of pearl shops and Irani chai cafés.',
    travelTips: [
      'Climb the minaret for panoramic Old City views',
      'Explore Laad Bazaar for pearls and bangles',
      'Try Irani chai at Nimrah Cafe across the road',
    ],
    nearbyAttractions: ['Chowmahalla Palace', 'Mecca Masjid', 'Salar Jung Museum'],
    entryFee: '₹25 for Indians, ₹300 for foreigners',
    openingHours: '9:30 AM – 5:30 PM',
    osmLink: 'https://www.openstreetmap.org/way/154316712',
  },
  {
    title: 'Hussain Sagar Lake',
    slug: 'hussain-sagar-lake',
    district: 'hyderabad',
    category: 'lakes',
    coordinates: { lat: 17.4239, lng: 78.4738 },
    bestSeason: 'Year-round (evenings are best)',
    accessibility: 'Fully urban; multiple entry points; boating from Lumbini Park',
    description:
      'The heart-shaped lake built in 1563, connecting Hyderabad and Secunderabad. The giant monolithic Buddha statue at its center is a city icon.',
    travelTips: [
      'Boat ride to the Buddha statue from Lumbini Park',
      'Evening walk along Necklace Road',
      'Visit Sanjeevaiah Park for birdwatching',
    ],
    nearbyAttractions: ['Lumbini Park', 'Birla Mandir', 'Snow World'],
    entryFee: 'Free (boating ₹50–₹200)',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/relation/6341605',
  },
  {
    title: 'Chowmahalla Palace',
    slug: 'chowmahalla-palace',
    district: 'hyderabad',
    category: 'museums',
    coordinates: { lat: 17.3577, lng: 78.4715 },
    bestSeason: 'Year-round',
    accessibility: 'Fully accessible; in Old City near Charminar',
    description:
      'The seat of the Nizams of Hyderabad — four palaces around a grand courtyard with 19 Belgian crystal chandeliers in the Durbar Hall.',
    travelTips: [
      'Buy a combined ticket with Charminar',
      'Allow 2 hours minimum',
      'The Durbar Hall photography is breathtaking',
    ],
    nearbyAttractions: ['Charminar', 'Mecca Masjid', 'Laad Bazaar'],
    entryFee: '₹100 for Indians, ₹200 for foreigners',
    openingHours: '10:00 AM – 5:00 PM (closed Mondays)',
    osmLink: 'https://www.openstreetmap.org/way/154316713',
  },
  {
    title: 'Salar Jung Museum',
    slug: 'salar-jung-museum',
    district: 'hyderabad',
    category: 'museums',
    coordinates: { lat: 17.3714, lng: 78.4803 },
    bestSeason: 'Year-round',
    accessibility: 'Fully accessible; elevator and ramps available',
    description:
      "One of India's three National Museums — 43,000 art objects, 50,000 books, and the famous Veiled Rebecca marble statue.",
    travelTips: [
      'Plan at least 3 hours — the collection is enormous',
      'The audio guide greatly enhances the experience',
      'Closed on Fridays',
    ],
    nearbyAttractions: ['Charminar', 'Chowmahalla Palace', 'Nizam Museum'],
    entryFee: '₹20 for Indians, ₹500 for foreigners',
    openingHours: '10:00 AM – 5:00 PM (closed Fridays)',
    osmLink: 'https://www.openstreetmap.org/way/154316714',
  },

  // ═══════════════════════════════════════
  // JAGTIAL (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Kondagattu Anjaneya Temple',
    slug: 'kondagattu-temple',
    district: 'jagtial',
    category: 'temples',
    coordinates: { lat: 18.756, lng: 78.889 },
    bestSeason: 'October – March',
    accessibility: 'Hilltop temple with road access and steps',
    description:
      'A hilltop Hanuman temple surrounded by dense forests, believed to be self-manifested.',
    travelTips: [
      'Saturdays are extremely crowded — weekdays are better',
      'The forest views from the hilltop are stunning',
      'Free meals served at the temple',
    ],
    nearbyAttractions: ['Vemulawada Temple', 'Dharmapuri Temple', 'Mid Manair Dam'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768175',
  },

  // ═══════════════════════════════════════
  // JANGAON (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Zaffergadh Fort',
    slug: 'zaffergadh-fort',
    district: 'jangaon',
    category: 'forts',
    coordinates: { lat: 17.769, lng: 79.486 },
    bestSeason: 'October – February',
    accessibility: 'Hilltop fort with moderate trek; 30-40 min climb to the top',
    description:
      'An 18th-century hill fort in Zaffergadh village, originally known as Velpugonda. Features a 5 km stone rampart with deep moat, three grand darwazas, and a Swayambhu Sri Lakshminarasimha Swamy Temple atop Peddagutta hill. Contains Rashtrakuta inscriptions, a Trikuta temple, and Kakatiya-era ruins.',
    travelTips: [
      'Start the trek early morning before 10 AM — summer temperatures reach 44°C',
      'Wear sturdy trekking shoes — the path to the Narasimha temple requires rock scrambling',
      'Carry water and packed food; no restaurants in Zaffergadh village',
    ],
    nearbyAttractions: ['Kolanupaka Jain Temple', 'Bhadrakali Temple Warangal', 'Ramappa Temple'],
    entryFee: 'Free',
    openingHours: 'Open all days; avoid climbing after dark',
    osmLink: 'https://www.openstreetmap.org/node/2453768200',
  },
  {
    title: 'Palakurthi Someshwara Temple',
    slug: 'palakurthi-someshwara-temple',
    district: 'jangaon',
    category: 'temples',
    coordinates: { lat: 17.659, lng: 79.433 },
    bestSeason: 'October – February',
    accessibility: '365 steps or motorable road to the hilltop shrine',
    description:
      'A legendary cave shrine on a hillock in Palakurthi, housing both Lord Shiva and Lord Vishnu in adjacent caves — symbolizing the unity of Shaivism and Vaishnavism. Dating back over 800 years, it is the birthplace of the renowned 12th-century poet Palkuriki Somanatha.',
    travelTips: [
      'A motorable road is now available for those who cannot climb',
      'Visit the narrow passage behind the temple — legend says only the pure-hearted can pass through',
      'Combine with a visit to Bammera Pothana birthplace nearby',
    ],
    nearbyAttractions: ['Bammera Pothana birthplace', 'Zaffergadh Fort', 'Jeedikal Temple'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768201',
  },
  {
    title: 'Jeedikal Ramachandra Swamy Temple',
    slug: 'jeedikal-ramachandra-swamy-temple',
    district: 'jangaon',
    category: 'temples',
    coordinates: { lat: 17.607, lng: 79.161 },
    bestSeason: 'October – February',
    accessibility: 'Hilltop temple with road access',
    description:
      'An ancient temple in Jeedikal village where Lord Rama is believed to have shot the demon Maricha disguised as a golden deer. Features a Swayambhu idol of Lord Rama, the sacred Deer Rock, and a miraculous natural spring called Uttar Ganga that never dries.',
    travelTips: [
      'Clear dust from the small rock hole to feel the "Utar Ganga" eternal spring',
      'Visit during Rama-Sita wedding ceremony at Bhadrachalam to witness a special phenomenon',
      'Carry drinking water; limited facilities near the temple',
    ],
    nearbyAttractions: ['Palakurthi Someshwara Temple', 'Bammera village', 'Warangal Fort'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768202',
  },

  // ═══════════════════════════════════════
  // JAYASHANKAR BHUPALPALLY (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Pandavula Gutta',
    slug: 'pandavula-gutta',
    district: 'jayashankar-bhupalpally',
    category: 'archaeological',
    coordinates: { lat: 18.315, lng: 80.002 },
    bestSeason: 'October – March',
    accessibility: 'Moderate trek through forest — guide recommended',
    description:
      "Telangana's premier prehistoric rock art site — cave paintings dating back to the Mesolithic period, over 10,000 years old.",
    travelTips: [
      'Hire a local guide — the caves are hard to find',
      'Wear trekking shoes and carry water',
      "Do not touch the paintings — they're fragile",
    ],
    nearbyAttractions: ['Laknavaram Lake', 'Ramappa Temple', 'Eturnagaram Sanctuary'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768170',
  },

  // ═══════════════════════════════════════
  // JOGULAMBA GADWAL (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Jurala Dam',
    slug: 'jurala-dam',
    district: 'jogulamba-gadwal',
    category: 'reservoirs',
    coordinates: { lat: 16.34, lng: 77.792 },
    bestSeason: 'August – February',
    accessibility: 'Paved road to the dam; viewpoints along the wall',
    description:
      'Built across the Krishna River, the Jurala Dam creates a vast scenic reservoir. Crocodile sightings are common in the backwaters.',
    travelTips: [
      'Visit in monsoon to see the gates open',
      'Boating available on weekends',
      'Crocodile spotting from a safe distance',
    ],
    nearbyAttractions: ['Gadwal Fort', 'Jogulamba Temple', 'Beechupally Anjaneya Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/35384501',
  },
  {
    title: 'Jogulamba Temple',
    slug: 'jogulamba-temple',
    district: 'jogulamba-gadwal',
    category: 'temples',
    coordinates: { lat: 16.233, lng: 77.796 },
    bestSeason: 'October – March',
    accessibility: 'In Alampur town; level access',
    description:
      'One of the 18 Shakti Peethas in India. The adjacent Nava Brahma temples showcase exquisite 7th-century Badami Chalukya architecture.',
    travelTips: [
      'Visit all 9 Nava Brahma temples in a single circuit',
      'The ASI museum nearby has excellent sculpture displays',
      'Alampur is a no-alcohol, no-meat pilgrimage town',
    ],
    nearbyAttractions: ['Nava Brahma Temples', 'Sangameswara Temple', 'Alampur ASI Museum'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384502',
  },

  // ═══════════════════════════════════════
  // KAMAREDDY (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Domakonda Fort',
    slug: 'domakonda-fort',
    district: 'kamareddy',
    category: 'forts',
    coordinates: { lat: 18.27, lng: 78.438 },
    bestSeason: 'October – March',
    accessibility: 'In Domakonda village; level walk from parking',
    description:
      'An 18th-century fortified palace by the Reddy Rajas, blending Rajasthani, Mughal, and Deccan styles.',
    travelTips: [
      'The mahal inside the fort is now a heritage hotel',
      'Visit the nearby Shiva temple inside the fort',
      'Combine with Pocharam Sanctuary',
    ],
    nearbyAttractions: ['Pocharam Sanctuary', 'Medak Cathedral', 'Pocharam Dam'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768190',
  },

  // ═══════════════════════════════════════
  // KARIMNAGAR (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Elgandal Fort',
    slug: 'elgandal-fort',
    district: 'karimnagar',
    category: 'forts',
    coordinates: { lat: 18.456, lng: 79.067 },
    bestSeason: 'October – March',
    accessibility: 'Hilltop fort; steep climb on foot',
    description:
      'A millennium-old fort on the Manair River banks, occupied by Kakatiyas, Qutb Shahis, and Asaf Jahis.',
    travelTips: [
      'Visit at sunrise or sunset for the best light',
      'The mosque and stepwell inside the fort are highlights',
      'Carry water — no facilities at the top',
    ],
    nearbyAttractions: ['Lower Manair Dam', 'Karimnagar Deer Park', 'Rajiv Gandhi Deer Park'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384504',
  },
  {
    title: 'Lower Manair Dam',
    slug: 'lower-manair-dam',
    district: 'karimnagar',
    category: 'reservoirs',
    coordinates: { lat: 18.392, lng: 79.134 },
    bestSeason: 'October – March',
    accessibility: 'Drive-up access with parking area',
    description:
      "A scenic dam on the Manair River with manicured gardens and a children's park. Popular with families for boating and sunsets.",
    travelTips: [
      'Boating available on weekends',
      'The gardens are well-maintained — great for families',
      'Visit the deer park nearby',
    ],
    nearbyAttractions: ['Elgandal Fort', 'Karimnagar Deer Park', 'Rajiv Gandhi Deer Park'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/35384505',
  },

  // ═══════════════════════════════════════
  // KHAMMAM (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Khammam Fort',
    slug: 'khammam-fort',
    district: 'khammam',
    category: 'forts',
    coordinates: { lat: 17.242, lng: 80.146 },
    bestSeason: 'October – March',
    accessibility: 'In Khammam town center; moderate climb',
    description:
      'A 10th-century hilltop fort by the Kakatiyas and later expanded by the Qutb Shahis, offering commanding town views.',
    travelTips: [
      'Early mornings have the best light for photos',
      'Combine with a visit to Lakaram Lake',
      'Local street food around the fort is excellent',
    ],
    nearbyAttractions: ['Lakaram Lake', 'Narasimhaswamy Temple', 'Kinnerasani Wildlife Sanctuary'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/446917297',
  },

  // ═══════════════════════════════════════
  // KOMARAM BHEEM ASIFABAD (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Kerameri Ghats',
    slug: 'kerameri-ghats',
    district: 'komaram-bheem-asifabad',
    category: 'viewpoints',
    coordinates: { lat: 19.447, lng: 79.009 },
    bestSeason: 'October – February',
    accessibility: '6 km ghat road; drive carefully on S-bends',
    description:
      'A picturesque ghat road passing through the tribal heartland of northern Telangana. The Kerameri hills offer breathtaking layered views of green fields, autumn leaves, and blue mountain ranges. A watchtower at the top provides panoramic views extending to the hills near Asifabad.',
    travelTips: [
      'Drive cautiously — the road has dangerous S-bends and U-turns with restricted visibility',
      'Stop at the Kerameri watchtower for the best panoramic photography',
      'Visit the weekly tribal haat at Kerameri for forest produce and handcrafted items',
    ],
    nearbyAttractions: ['Asifabad Fort', 'Kawal Tiger Reserve', 'Jodeghat memorial'],
    entryFee: 'Free',
    openingHours: 'Accessible all day; best driven during daylight',
    osmLink: 'https://www.openstreetmap.org/node/2453768203',
  },
  {
    title: 'Kadem Dam',
    slug: 'kadem-dam',
    district: 'komaram-bheem-asifabad',
    category: 'reservoirs',
    coordinates: { lat: 19.108, lng: 78.791 },
    bestSeason: 'October – February',
    accessibility: 'Paved road to the dam site with parking',
    description:
      'A major reservoir on the Kadem River with a surface area of 24.7 sq km. Surrounded by forested hills and lush greenery, it offers boating facilities including 4-seater speed boats and 12-seater boats. The teal-coloured water between hillocks is spectacular.',
    travelTips: [
      'Try the speed boat ride through the waterway between hillocks',
      'Visit the dam gates for panoramic downstream views',
      'End your visit with chai served in clay pots on the banks',
    ],
    nearbyAttractions: ['Kuntala Waterfall', 'Pochera Waterfall', 'Kawal Tiger Reserve'],
    entryFee: 'Free entry; boating charges apply',
    openingHours: '9:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768204',
  },
  {
    title: 'Sapthagundala Waterfalls',
    slug: 'sapthagundala-waterfalls',
    district: 'komaram-bheem-asifabad',
    category: 'waterfalls',
    coordinates: { lat: 19.32, lng: 79.52 },
    bestSeason: 'September – February',
    accessibility: '2 km trek from Pittaguda village through forest',
    description:
      'A spectacular series of seven pristine waterfalls hidden deep in the Mangi forests. Each cascade has its own character — including Rama Gundam, Sita Gundam, and the most powerful Bheema Gundam dropping from ~30 ft. Often compared to Kashmir for its rolling meadows and misty mornings.',
    travelTips: [
      'Hire a local guide from Pittaguda village — mobile networks drop in the forest',
      'Wear sturdy trekking shoes and carry water for the rocky stream crossings',
      'Avoid trekking after 3 PM as the return trail gets dark',
    ],
    nearbyAttractions: ['Kerameri Ghats', 'Kawal Tiger Reserve', 'Gangapur Balaji Temple'],
    entryFee: 'Free (forest guide fee voluntary but recommended)',
    openingHours: '7:00 AM – 4:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768205',
  },
  {
    title: 'Gangapur Balaji Temple',
    slug: 'gangapur-balaji-temple',
    district: 'komaram-bheem-asifabad',
    category: 'temples',
    coordinates: { lat: 19.25, lng: 79.55 },
    bestSeason: 'October – February',
    accessibility: '5 km from Rebbana mandal centre; local transport needed',
    description:
      'An ancient Sri Balaji Venkateshwara Swamy temple believed to have been built in the 13th century on the shores of a rivulet. The annual Magha Purnima Jathara is a three-day celebration drawing thousands of devotees from across the region.',
    travelTips: [
      'Plan your visit during the Magha Purnima Jathara for the full cultural experience',
      'Arrange local transport in advance — the temple is remote',
      'Carry offerings for puja; local shops sell traditional items',
    ],
    nearbyAttractions: ['Kerameri Ghats', 'Kadem Dam', 'Sirpur Forest Reserve'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768206',
  },

  // ═══════════════════════════════════════
  // MAHABUBABAD (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Kuravi Veerabhadra Swamy Temple',
    slug: 'kuravi-veerabhadra-swamy-temple',
    district: 'mahabubabad',
    category: 'temples',
    coordinates: { lat: 17.55, lng: 80.05 },
    bestSeason: 'October – February',
    accessibility: '11 km from Mahabubabad town; road access',
    description:
      'A historic Sri Veerabhadra Swamy temple built by the Vengi Chalukya Dynasty and later renovated by Kakatiya rulers. Marco Polo referenced this temple when it served as the Vengi Chalukya capital. Adjacent to the 100-acre Peddacheruvu lake.',
    travelTips: [
      'Visit on Monday to witness the weekly cattle fair (angadi)',
      'Attend Maha Shivaratri Brahmotsavam for the grandest celebration',
      'Explore Peddacheruvu (100-acre lake) adjacent to the temple',
    ],
    nearbyAttractions: ['Bheemuni Paadam Waterfalls', 'Mahabubabad town', 'Warangal Fort'],
    entryFee: 'Free',
    openingHours: '4:30 AM – 1:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768207',
  },
  {
    title: 'Bheemuni Paadam Waterfalls',
    slug: 'bheemuni-paadam-waterfalls',
    district: 'mahabubabad',
    category: 'waterfalls',
    coordinates: { lat: 17.65, lng: 79.85 },
    bestSeason: 'July – September',
    accessibility: 'Road access through thick forest; short walk from road',
    description:
      'A 70-foot waterfall cascading into a pool within a semi-circular enclosure. At sunrise and sunset, the water reflects rainbow colours. A cave beside the falls is believed to be 10 km long. Idols of Lord Shiva and Nagadevatha are installed near the falls.',
    travelTips: [
      'Visit during monsoon for the best waterfall experience',
      'Take the left turn at Bhupathipet from Manoharabad-Narsmapet road',
      'Exercise caution near the water — visit in groups',
    ],
    nearbyAttractions: ['Kuravi Temple', 'Warangal Ramappa Temple', 'Mahabubabad town'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768208',
  },
  {
    title: 'Bayyaram Kakatiya Tank',
    slug: 'bayyaram-kakatiya-tank',
    district: 'mahabubabad',
    category: 'archaeological',
    coordinates: { lat: 17.58, lng: 80.1 },
    bestSeason: 'October – February',
    accessibility: 'Road access; limited facilities in forest area',
    description:
      'A historic Kakatiya-era water tank showcasing the advanced engineering of medieval Telangana. The surrounding Bayyaram Iron Ore hills and a seasonal seven-step waterfall at Miryalapenta add geological and natural significance.',
    travelTips: [
      'Visit during or after monsoon to see the seven-step waterfall in full flow',
      'Explore the iron ore hills for unique geological formations',
      'Carry food and water — limited facilities in the forest area',
    ],
    nearbyAttractions: ['Bheemuni Paadam Waterfalls', 'Kuravi Temple', 'Mahabubabad town'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768209',
  },

  // ═══════════════════════════════════════
  // MAHABUBNAGAR (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Koilkonda Fort',
    slug: 'koilkonda-fort',
    district: 'mahabubnagar',
    category: 'forts',
    coordinates: { lat: 16.592, lng: 78.171 },
    bestSeason: 'October – February',
    accessibility: 'Hilltop fort with a steep climb; about 500 steps',
    description:
      'Perched at 1,200 feet, this 14th-century Qutb Shahi fort has seven tiers of fortifications rising dramatically from the plains.',
    travelTips: [
      'Carry 2L of water — no shops at the top',
      'Start before 7 AM in summer',
      'Club with Pillalamarri Banyan Tree (1 hr drive)',
    ],
    nearbyAttractions: ['Pillalamarri Banyan Tree', 'Jurala Dam', 'Beechupally Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768148',
  },
  {
    title: 'Pillalamarri Banyan Tree',
    slug: 'pillalamarri-banyan-tree',
    district: 'mahabubnagar',
    category: 'eco-tourism',
    coordinates: { lat: 16.722, lng: 78.036 },
    bestSeason: 'October – March',
    accessibility: 'Level walk from parking; well-maintained pathway',
    description:
      'A colossal 700-year-old banyan tree spread over 4 acres, with thousands of aerial roots creating a natural canopy labyrinth.',
    travelTips: [
      'Now protected — walking on roots is prohibited',
      'Bring a wide-angle lens for photography',
      'Accessible as a day trip from Hyderabad',
    ],
    nearbyAttractions: ['Koilkonda Fort', 'Jurala Dam', 'Uma Maheshwaram Temple'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768160',
  },

  // ═══════════════════════════════════════
  // MANCHERIAL (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Gandhari Khilla',
    slug: 'gandhari-khilla',
    district: 'mancherial',
    category: 'forts',
    coordinates: { lat: 18.92, lng: 79.42 },
    bestSeason: 'October – February',
    accessibility: 'Hire a local guide from Bokkalagutta village; partially hidden by forest',
    description:
      'A 10th-century hill fort built by tribal king Medaraju with Kakatiya assistance. Features an 8-foot Naga Seshu idol carved from a single rock, three perennial wells including an elephant well, and Kakatiya-style gateways. The biennial Gandhari Maisamma Jatara attracts thousands of tribals.',
    travelTips: [
      'Hire a local guide — the fort is partially hidden by forest and unmarked paths',
      'Visit during Magha masam (Jan–Feb) in a Jatara year for the tribal festival',
      "Don't miss the 8-foot Naga Seshu idol and the Elephant Well",
    ],
    nearbyAttractions: ['Ksheera Waterfalls', 'Gudem Gutta Temple', 'Kadem Dam'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768210',
  },
  {
    title: 'Gudem Gutta Temple',
    slug: 'gudem-gutta-temple',
    district: 'mancherial',
    category: 'temples',
    coordinates: { lat: 18.906, lng: 79.172 },
    bestSeason: 'October – February',
    accessibility: '32 km from Mancherial; road access to the hilltop',
    description:
      'A popular hilltop temple on the banks of the Godavari River, dedicated to Lord Satyanarayana Swamy. Also houses the Lord Ayyappa Abhinava Shabarimala temple, a unique replica of the Kerala shrine. Thousands visit during Karthika Masam for holy dips in the Godavari.',
    travelTips: [
      'Visit during Karthika Masam (November–December) for the full pilgrimage experience',
      'Climb the hill early morning to avoid crowds and enjoy sunrise over the Godavari',
      'Also visit the Ayyappa Shabarimala temple within the complex',
    ],
    nearbyAttractions: ['Gandhari Khilla', 'Mancherial town', 'Chennur Agastheeswara Temple'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768211',
  },
  {
    title: 'Chennur Agastheeswara Temple',
    slug: 'chennur-agastheeswara-temple',
    district: 'mancherial',
    category: 'temples',
    coordinates: { lat: 18.9, lng: 79.75 },
    bestSeason: 'October – February',
    accessibility: 'In Chennur town; road access',
    description:
      'An ancient Kakatiya-era Shiva temple on the Godavari banks where Sage Agastya is believed to have installed the Lingam. Chennur is famous for the rare "Panchkosha Uttara Wahini" — where the Godavari flows northward, making it highly auspicious for holy dips.',
    travelTips: [
      'Take a holy dip in the northward-flowing Godavari — a rare geographical phenomenon',
      'Examine the Kakatiya-era stone pillars with detailed Puranic carvings',
      'Visit during Maha Shivaratri for the grandest festival',
    ],
    nearbyAttractions: ['Kaleshwaram Temple', 'Gudem Gutta Temple', 'Shivaram Wildlife Sanctuary'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768212',
  },

  // ═══════════════════════════════════════
  // MEDAK (2 places)
  // ═══════════════════════════════════════
  {
    title: 'Medak Cathedral',
    slug: 'medak-cathedral',
    district: 'medak',
    category: 'hidden-gems',
    coordinates: { lat: 18.044, lng: 78.26 },
    bestSeason: 'Year-round (especially Christmas week)',
    accessibility: 'Ground level access; wheelchair friendly',
    description:
      'One of the largest churches in Asia — stunning Gothic Revival architecture with intricate Italian stained glass.',
    travelTips: [
      'Visit during Sunday service for the full experience',
      'The stained glass is best seen in morning light',
      'Medak Fort is 10 min away',
    ],
    nearbyAttractions: ['Medak Fort', 'Pocharam Wildlife Sanctuary', 'Pocharam Dam'],
    entryFee: 'Free',
    openingHours: 'Open all day (Sunday service 7:00 AM)',
    osmLink: 'https://www.openstreetmap.org/way/110537620',
  },
  {
    title: 'Pocharam Wildlife Sanctuary',
    slug: 'pocharam-sanctuary',
    district: 'medak',
    category: 'wildlife',
    coordinates: { lat: 18.194, lng: 78.148 },
    bestSeason: 'November – March',
    accessibility: 'Forest roads; 4x4 recommended in monsoon',
    description:
      'A 130 sq km haven for spotted deer, blackbuck, wild boar, and migratory birds wrapping around Pocharam reservoir.',
    travelTips: [
      'Book the forest department safari in advance',
      'Binoculars essential for birdwatching',
      'No food stalls inside — carry snacks',
    ],
    nearbyAttractions: ['Medak Cathedral', 'Pocharam Dam', 'Medak Fort'],
    entryFee: '₹50 per person',
    openingHours: '6:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/relation/3305917',
  },

  // ═══════════════════════════════════════
  // MEDCHAL-MALKAJGIRI (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Shamirpet Lake',
    slug: 'shamirpet-lake',
    district: 'medchal-malkajgiri',
    category: 'lakes',
    coordinates: { lat: 17.61, lng: 78.563 },
    bestSeason: 'October – March',
    accessibility: '27 km from Secunderabad; road access',
    description:
      "A beautiful artificial lake adjacent to Jawahar Deer Park, where herds of deer are frequently seen at the water's edge. Features forest cottages, diverse vegetation, and boating facilities. A paradise for photographers and birdwatchers.",
    travelTips: [
      'Visit early morning for the best deer sightings',
      'Carry binoculars for birdwatching',
      'Explore the rocky terrain beside the lake for photography',
    ],
    nearbyAttractions: ['Jawahar Deer Park', 'Keesaragutta Temple', 'BITS Pilani Hyderabad'],
    entryFee: 'Free',
    openingHours: 'Open all day (boating 6:00 AM – 6:00 PM)',
    osmLink: 'https://www.openstreetmap.org/relation/6341608',
  },
  {
    title: 'Keesaragutta Temple',
    slug: 'keesaragutta-temple',
    district: 'medchal-malkajgiri',
    category: 'temples',
    coordinates: { lat: 17.523, lng: 78.668 },
    bestSeason: 'October – March',
    accessibility: '35 km from Hyderabad; hilltop with steps',
    description:
      'An ancient hilltop temple with a self-manifested Shivalingam, believed to date from Treta Yuga. Lord Rama is said to have installed 101 Shivalingams here. Archaeological remains include a 5th-century Telugu inscription and 12 Jain Tirthankara idols.',
    travelTips: [
      'Climb the hill for panoramic sunrise views',
      'Explore the archaeological ruins scattered around the temple',
      'Carry water for the hill climb',
    ],
    nearbyAttractions: ['Shamirpet Lake', 'ECIL Metro Station', 'Laxmi Narasimha Temple'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 1:00 PM, 3:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768232',
  },
  {
    title: 'Medchal Jain Temple',
    slug: 'medchal-jain-temple',
    district: 'medchal-malkajgiri',
    category: 'temples',
    coordinates: { lat: 17.63, lng: 78.481 },
    bestSeason: 'October – March',
    accessibility: 'Near Medchal Railway Station; well-connected',
    description:
      'A newly built Jain temple gaining popularity among Jain pilgrims across India. Lord Tribhuvan Parswanath is the presiding deity. Provides residential and food facilities for visiting Jain pilgrims.',
    travelTips: [
      'Medchal is well-connected by railway and highway — easy day trip from Hyderabad',
      'Combine with ISKCON Temple Dabilpur nearby',
      'Carry traditional attire for temple visits',
    ],
    nearbyAttractions: ['ISKCON Temple Dabilpur', 'Medchal Nizam Mansion ruins', 'Hyderabad city'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768233',
  },

  // ═══════════════════════════════════════
  // MULUGU (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Ramappa Temple',
    slug: 'ramappa-temple',
    district: 'mulugu',
    category: 'temples',
    coordinates: { lat: 18.258, lng: 79.943 },
    bestSeason: 'October – February',
    accessibility: 'Paved road; wheelchair ramps at entrance',
    description:
      "13th-century Kakatiya masterpiece and Telangana's first UNESCO World Heritage Site. Famous for floating bricks and the monolithic Nandi.",
    travelTips: [
      'Hire the official guide for the full story',
      'Visit on weekdays to avoid crowds',
      "Don't miss the floating brick demo",
    ],
    nearbyAttractions: ['Laknavaram Lake', 'Bogatha Waterfall', 'Medaram Temple'],
    entryFee: '₹25 for Indians, ₹300 for foreigners',
    openingHours: '6:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/648258921',
  },
  {
    title: 'Bogatha Waterfall',
    slug: 'bogatha-waterfall',
    district: 'mulugu',
    category: 'waterfalls',
    coordinates: { lat: 18.261, lng: 80.316 },
    bestSeason: 'August – November',
    accessibility: 'Road access with short walk from parking',
    description:
      'Often called the Niagara of Telangana, this multi-tier waterfall on the Kadem river plunges dramatically over a wide horseshoe cliff face.',
    travelTips: [
      'Combine with a visit to Ramappa Temple',
      'Carry rain protection in monsoon',
      'Local stalls sell bamboo chicken',
    ],
    nearbyAttractions: ['Ramappa Temple', 'Laknavaram Lake', 'Medaram Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/4694725370',
  },
  {
    title: 'Eturnagaram Wildlife Sanctuary',
    slug: 'eturnagaram-sanctuary',
    district: 'mulugu',
    category: 'wildlife',
    coordinates: { lat: 18.305, lng: 80.225 },
    bestSeason: 'November – March',
    accessibility: 'Forested tracks; guided safaris only',
    description:
      "One of Telangana's oldest sanctuaries at the trijunction of Godavari tributaries. Leopards, sloth bears, and 160+ bird species.",
    travelTips: [
      'Book the forest safari 2 days ahead',
      'Stay at the forest guest house for the full experience',
      'Carry mosquito repellent',
    ],
    nearbyAttractions: ['Laknavaram Lake', 'Ramappa Temple', 'Medaram Temple'],
    entryFee: '₹50 per person',
    openingHours: '7:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/relation/3305925',
  },
  {
    title: 'Laknavaram Lake',
    slug: 'laknavaram-lake',
    district: 'mulugu',
    category: 'lakes',
    coordinates: { lat: 18.157, lng: 80.041 },
    bestSeason: 'October – March',
    accessibility: 'Well-paved road; suspension bridge to the island',
    description:
      'A stunning 10,000-acre lake with dozens of islands connected by a suspension bridge. Island cottages and camping available.',
    travelTips: [
      'Book the island cottages at least 2 weeks ahead',
      'Boating and kayaking available',
      'The suspension bridge at golden hour is pure magic',
    ],
    nearbyAttractions: ['Ramappa Temple', 'Bogatha Waterfall', 'Eturnagaram Sanctuary'],
    entryFee: 'Free (boating charges apply)',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/relation/6341606',
  },

  // ═══════════════════════════════════════
  // NAGARKURNOOL (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Mallela Theertham Waterfall',
    slug: 'mallela-theertham-waterfall',
    district: 'nagarkurnool',
    category: 'waterfalls',
    coordinates: { lat: 16.266, lng: 78.856 },
    bestSeason: 'July – October',
    accessibility: '185 km from Hyderabad; trek through Nallamala Forest',
    description:
      'A stunning 150-foot waterfall deep within the Nallamala Forest Range, where water cascades onto a natural Shiva Lingam. Surrounded by the largest undisturbed deciduous forest stretch in South India. Offers river crossing, trekking, and camping.',
    travelTips: [
      'Wear sturdy trekking shoes — the trail involves rocky, slippery terrain',
      'Carry drinking water and snacks; no shops near the waterfall',
      'Obtain forest entry permits from Amrabad Tiger Reserve before visiting',
    ],
    nearbyAttractions: ['Uma Maheswaram Temple', 'Amrabad Tiger Reserve', 'Srisailam'],
    entryFee: 'Nominal forest entry fee (check with Amrabad office)',
    openingHours: 'Daytime only; recommended to visit before sunset',
    osmLink: 'https://www.openstreetmap.org/node/2453768213',
  },
  {
    title: 'Somasila',
    slug: 'somasila',
    district: 'nagarkurnool',
    category: 'temples',
    coordinates: { lat: 16.052, lng: 78.323 },
    bestSeason: 'October – February',
    accessibility: 'Accessible by road and boat from Srisailam backwaters',
    description:
      'A serene heritage destination on the Krishna River banks featuring 15 ancient Shiva temples. The Sri Lalitha Someswara Swamy Temple dates to the 7th century. Telangana Tourism operates boating and waterfront cottages here.',
    travelTips: [
      'Book TSTDC Haritha cottages in advance — they fill up on weekends',
      'Take the boating experience through the backwaters for best hill views',
      'The Pushkara Snanam festival occurs once every 12 years',
    ],
    nearbyAttractions: ['Kollapur Madhava Swamy Temple', 'Srisailam Dam', 'Somasila View Point'],
    entryFee: 'Free entry to temples; boating charges apply',
    openingHours: 'Temples open early morning to evening; boating daytime',
    osmLink: 'https://www.openstreetmap.org/node/2453768214',
  },
  {
    title: 'Uma Maheswaram Temple',
    slug: 'uma-maheswaram-temple',
    district: 'nagarkurnool',
    category: 'temples',
    coordinates: { lat: 16.37, lng: 78.725 },
    bestSeason: 'October – March',
    accessibility: 'On NH44 Hyderabad–Srisailam highway; road access',
    description:
      "An ancient Shiva temple dating to the 2nd century AD, housing a unique two-colored Shivalingam. Constant water flow from hillocks cascades over the temple, earning it the nickname Poor Man's Ooty. Considered the northern gateway to Srisailam Jyotirlinga.",
    travelTips: [
      'Start early from Hyderabad — the temple is about 100 km on NH44',
      'Walk the 500-meter path to Papanasanam behind the sanctum for the sacred spring',
      'Temple timings are limited (9:30 AM – 4:00 PM) — plan accordingly',
    ],
    nearbyAttractions: ['Mallela Theertham Waterfall', 'Amrabad Tiger Reserve', 'Srisailam'],
    entryFee: 'Free',
    openingHours: '9:30 AM – 4:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768215',
  },
  {
    title: 'Amrabad Tiger Reserve',
    slug: 'amrabad-tiger-reserve',
    district: 'nagarkurnool',
    category: 'wildlife',
    coordinates: { lat: 16.33, lng: 78.81 },
    bestSeason: 'October – March',
    accessibility: 'Safari from Mannanur; book through official website',
    description:
      'The second-largest tiger reserve in India by core area (2,611 sq km) in the Nallamala Hills. Home to tigers, leopards, sloth bears, and the indigenous Chenchu tribal community. Eco-tourism activities include safari rides, forest trekking, and unique mud house/treehouse stays.',
    travelTips: [
      'Book safari and accommodation through the official Amrabad website or TSTDC',
      'The Chenchu community guides provide authentic forest experiences',
      'Carry binoculars and wear earth-toned clothing for better wildlife viewing',
    ],
    nearbyAttractions: [
      'Mallela Theertham Waterfall',
      'Uma Maheswaram Temple',
      'Mannanur Education Centre',
    ],
    entryFee: 'Safari packages ₹5,100–₹8,500 for two (includes accommodation)',
    openingHours: 'Safari: 6:00 AM – 10:00 AM, 3:00 PM – 6:00 PM (varies seasonally)',
    osmLink: 'https://www.openstreetmap.org/relation/3305920',
  },

  // ═══════════════════════════════════════
  // NALGONDA (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Nagarjuna Sagar Dam',
    slug: 'nagarjuna-sagar-dam',
    district: 'nalgonda',
    category: 'reservoirs',
    coordinates: { lat: 16.577, lng: 79.314 },
    bestSeason: 'October – March',
    accessibility: 'Well-paved road; viewpoints along the dam wall',
    description:
      "One of the world's largest masonry dams across the Krishna River. The adjacent Nagarjunakonda island museum houses remarkable Buddhist relics.",
    travelTips: [
      'Take the boat to Nagarjunakonda island (3 hrs round trip)',
      'Visit the museum first for context',
      'Gates open only during flood season',
    ],
    nearbyAttractions: ['Nagarjunakonda Museum', 'Ethipothala Falls', 'Macherla Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/28861563',
  },
  {
    title: 'Nagarjunakonda Museum',
    slug: 'nagarjunakonda-museum',
    district: 'nalgonda',
    category: 'museums',
    coordinates: { lat: 16.52, lng: 79.234 },
    bestSeason: 'October – March',
    accessibility:
      'Accessible only by boat from the mainland; well-maintained walkways on the island',
    description:
      'An extraordinary island museum containing Buddhist relics spanning from 3rd century BCE to 4th century CE.',
    travelTips: [
      'Boat service starts at 9:30 AM — plan to arrive early',
      'Allow 3-4 hours including the boat journey',
      'The museum is closed on Fridays',
    ],
    nearbyAttractions: ['Nagarjuna Sagar Dam', 'Ethipothala Falls', 'Anupu Buddhist site'],
    entryFee: '₹25 for Indians',
    openingHours: '9:30 AM – 5:00 PM (boat service starts 9:30 AM; closed Fridays)',
    osmLink: 'https://www.openstreetmap.org/node/2453768185',
  },
  {
    title: 'Ethipothala Falls',
    slug: 'ethipothala-falls',
    district: 'nalgonda',
    category: 'waterfalls',
    coordinates: { lat: 16.653, lng: 79.346 },
    bestSeason: 'August – December',
    accessibility: 'Stairs to the base; moderate climb',
    description:
      'A beautiful 70-foot cascade on the Chandravanka River. A crocodile breeding center is nearby.',
    travelTips: [
      'Combine with Nagarjuna Sagar Dam trip',
      'The crocodile breeding center is worth a quick visit',
      'Monsoon months are risky — check water conditions',
    ],
    nearbyAttractions: ['Nagarjuna Sagar Dam', 'Nagarjunakonda Museum', 'Phanigiri Buddhist site'],
    entryFee: '₹25 per person',
    openingHours: '8:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768195',
  },

  // ═══════════════════════════════════════
  // NARAYANPET (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Mudumal Megalithic Menhirs',
    slug: 'mudumal-megalithic-menhirs',
    district: 'narayanpet',
    category: 'archaeological',
    coordinates: { lat: 16.379, lng: 77.411 },
    bestSeason: 'October – February',
    accessibility: 'Last stretch unpaved; sturdy vehicle recommended',
    description:
      "A vast 3,500–4,000-year-old megalithic observatory on the Krishna River banks featuring ~80 standing stones (10–15 ft tall) and 3,000+ alignment stones. The only known megalithic site in India with a depiction of the Ursa Major constellation. Added to India's UNESCO tentative list in 2025.",
    travelTips: [
      'Hire a local guide — constellation carvings are hard to identify without expert narration',
      'Carry sun protection and water; the site is exposed with minimal shade',
      'The last stretch of road is unpaved; a sturdy vehicle is recommended',
    ],
    nearbyAttractions: [
      'Narayanpet handloom weaving',
      'Krishna River banks',
      'Makthal Anjaneya Temple',
    ],
    entryFee: 'Free',
    openingHours: 'Open throughout the day',
    osmLink: 'https://www.openstreetmap.org/node/2453768216',
  },
  {
    title: 'Sri Padamati Anjaneya Swamy Temple',
    slug: 'padamati-anjaneya-temple',
    district: 'narayanpet',
    category: 'temples',
    coordinates: { lat: 16.578, lng: 77.683 },
    bestSeason: 'October – March',
    accessibility: 'In Makthal town near Krishna River; road access',
    description:
      'A revered Hanuman temple housing a west-facing idol — the only west-facing Hanuman idol in South India. The idol is believed to have been installed by Lord Jambavantha during the Ramayana era. Tuesdays and Saturdays draw special crowds.',
    travelTips: [
      'Tuesday and Saturday are most auspicious — vibrant devotional atmosphere',
      'Combine with a stop at nearby Krishna River banks for scenic views',
      'Nearest railway stations: Krishna (KSN) and Mahabubnagar',
    ],
    nearbyAttractions: ['Krishna River Banks', 'Mudumal Menhirs', 'Narayanpet handloom shops'],
    entryFee: 'Free',
    openingHours: 'Early morning to evening',
    osmLink: 'https://www.openstreetmap.org/node/2453768217',
  },
  {
    title: 'Narayanpet Handloom Weaving Centre',
    slug: 'narayanpet-handloom-centre',
    district: 'narayanpet',
    category: 'hidden-gems',
    coordinates: { lat: 16.744, lng: 77.497 },
    bestSeason: 'October – February',
    accessibility: 'In Narayanpet town; walkable from bus stand',
    description:
      'Narayanpet is famous for distinctive silk and cotton sarees recognized for durability and traditional craftsmanship spanning centuries. Visitors can tour weaving workshops to observe artisans at work using traditional pit looms and purchase authentic GI-tagged sarees directly.',
    travelTips: [
      'Visit weaving clusters in the morning when artisans are most active',
      'Authentic Narayanpet sarees have a characteristic border design — ask for GI-tagged products',
      'Combine with a visit to the local gold merchant district',
    ],
    nearbyAttractions: ['Mudumal Menhirs', 'Padamati Anjaneya Temple', 'Eklaspur Eco Park'],
    entryFee: 'Free (workshop visits); sarees ₹500–₹5,000+',
    openingHours: 'Workshops: 8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768218',
  },
  {
    title: 'Eklaspur Eco Park',
    slug: 'eklaspur-eco-park',
    district: 'narayanpet',
    category: 'eco-tourism',
    coordinates: { lat: 16.72, lng: 77.52 },
    bestSeason: 'October – March',
    accessibility: '5 km from Narayanpet town; road access',
    description:
      'A green recreational park with walking trails, landscaped gardens, and picnic areas. Promotes environmental awareness through eco-friendly initiatives. A peaceful retreat for nature lovers and families.',
    travelTips: [
      'Carry a picnic basket — open areas suitable for family gatherings',
      'Early morning visits best for birdwatching and cooler temperatures',
      'Pair with a trip to Narayanpet for handloom shopping',
    ],
    nearbyAttractions: [
      'Narayanpet handloom centre',
      'Mudumal Menhirs',
      'Padamati Anjaneya Temple',
    ],
    entryFee: 'Free or nominal',
    openingHours: 'Open from early morning to evening',
    osmLink: 'https://www.openstreetmap.org/node/2453768219',
  },

  // ═══════════════════════════════════════
  // NIRMAL (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Basar Saraswati Temple',
    slug: 'basar-saraswati-temple',
    district: 'nirmal',
    category: 'temples',
    coordinates: { lat: 18.877, lng: 77.949 },
    bestSeason: 'October – February (Vasant Panchami is peak)',
    accessibility: 'Well-connected by road; near Basar railway station on Godavari banks',
    description:
      'One of the only two Saraswati temples in India. Parents bring children here for Aksharabhyasam — the ritual of initiating writing.',
    travelTips: [
      'Book the Aksharabhyasam ceremony slot in advance',
      'Visit during Vasant Panchami for the grand celebration',
      'Take a holy dip in the Godavari',
    ],
    nearbyAttractions: ['Nirmal Fort', 'Kadam Dam', 'Nirmal Toys & Crafts village'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768142',
  },
  {
    title: 'Nirmal Paintings & Toys Village',
    slug: 'nirmal-crafts',
    district: 'nirmal',
    category: 'hidden-gems',
    coordinates: { lat: 19.096, lng: 78.344 },
    bestSeason: 'Year-round',
    accessibility: 'In Nirmal town; shops and workshops walkable from the bus stand',
    description:
      'Nirmal is synonymous with 400-year-old Nirmal paintings — intricate gold-embellished art on lacquered Ponniki wood — and carved wooden toys.',
    travelTips: [
      'Visit the government-run Lepakshi emporium for authentic pieces',
      'Many workshops welcome visitors to watch the craft',
      'Nirmal Fort ruins are nearby',
    ],
    nearbyAttractions: ['Basar Temple', 'Kadam Dam', 'Adelli Pochamma Temple'],
    entryFee: 'Free (workshops)',
    openingHours: '8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768150',
  },
  {
    title: 'Kadam Dam',
    slug: 'kadam-dam',
    district: 'nirmal',
    category: 'reservoirs',
    coordinates: { lat: 19.091, lng: 78.462 },
    bestSeason: 'August – February',
    accessibility: 'Paved road; short walk from parking',
    description:
      'A picturesque dam on the Kadam River surrounded by thick teak forests. Stunning during and after monsoon.',
    travelTips: [
      'Visit post-monsoon for the best views',
      "No boating — it's a quiet nature spot",
      'Pack a picnic — no commercial stalls nearby',
    ],
    nearbyAttractions: ['Nirmal Fort', 'Basar Temple', 'Kuntala Falls'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/35384506',
  },

  // ═══════════════════════════════════════
  // NIZAMABAD (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Sriram Sagar Dam (Pochampadu)',
    slug: 'sriram-sagar-dam',
    district: 'nizamabad',
    category: 'reservoirs',
    coordinates: { lat: 18.968, lng: 78.273 },
    bestSeason: 'October – March',
    accessibility: 'Well-paved road to the dam site',
    description:
      "A lifeline of Telangana's agriculture built across the Godavari. Boating and sunset viewpoints draw visitors year-round.",
    travelTips: [
      'Sunset from the dam wall is spectacular',
      'Boating available on weekends',
      'Pack your own food — limited stalls',
    ],
    nearbyAttractions: ['Nizamabad Fort', 'Alisagar Reservoir', 'Dichpally Ramalayam'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/35384500',
  },
  {
    title: 'Nizamabad Fort (Quilla Ramalayam)',
    slug: 'nizamabad-fort',
    district: 'nizamabad',
    category: 'forts',
    coordinates: { lat: 18.672, lng: 78.099 },
    bestSeason: 'October – March',
    accessibility: 'In Nizamabad town; short climb from the road',
    description:
      'A commanding hilltop fort built by the Rashtrakutas in the 10th century, with an ancient Ramalayam temple within the fort walls.',
    travelTips: [
      'Visit early morning or late afternoon',
      'The temple inside is active — dress respectfully',
      'Dichpally Ramalayam is 15 min drive',
    ],
    nearbyAttractions: ['Dichpally Ramalayam', 'Alisagar Reservoir', 'Pochampadu Dam'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 6:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384507',
  },
  {
    title: 'Dichpally Ramalayam',
    slug: 'dichpally-ramalayam',
    district: 'nizamabad',
    category: 'temples',
    coordinates: { lat: 18.592, lng: 78.208 },
    bestSeason: 'Year-round (Sri Rama Navami is peak)',
    accessibility: 'Right on the highway; level access from parking',
    description:
      'Often called the Khajuraho of the South — a stunning 14th-century Kakatiya temple with exquisite sculptural work on its gopuram.',
    travelTips: [
      'Look carefully at the tower — the detailed carvings are extraordinary',
      'Sri Rama Navami festival is grand',
      'The temple has a serene garden courtyard',
    ],
    nearbyAttractions: ['Nizamabad Fort', 'Alisagar Reservoir', 'Basar Temple'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384508',
  },

  // ═══════════════════════════════════════
  // PEDDAPALLI (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Ramagiri Fort',
    slug: 'ramagiri-fort',
    district: 'peddapalli',
    category: 'forts',
    coordinates: { lat: 18.583, lng: 79.533 },
    bestSeason: 'October – February',
    accessibility: '2 km off Karimnagar-Manthani highway; best on foot',
    description:
      'A 12th-century Kakatiya hilltop fortress perched atop the Ramagiri hills, overlooking the confluence of the Manair and Godavari rivers. Features a Sita Ramalayam temple with a Shiva lingam believed to have been installed by Lord Rama. A ropeway project is planned for better accessibility.',
    travelTips: [
      'The last stretch is best on foot — 2 km walk from the highway',
      'Visit during Shravana Masam for vibrant atmosphere at the Rama temple',
      'Carry water and food; no shops inside the fort complex',
    ],
    nearbyAttractions: ['Sabitham Waterfalls', 'Manthani historic town', 'Karimnagar Fort'],
    entryFee: 'Free',
    openingHours: '10:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768220',
  },
  {
    title: 'Dhulikatta Buddhist Stupa',
    slug: 'dhulikatta-buddhist-stupa',
    district: 'peddapalli',
    category: 'archaeological',
    coordinates: { lat: 18.61, lng: 79.272 },
    bestSeason: 'October – March',
    accessibility: 'Last 2-3 km unpaved; SUV or two-wheeler recommended',
    description:
      "An ancient 2nd-century BCE Buddhist monastic complex with a Mahastupa — one of Megasthenes' 30 walled cities. Excavations revealed 47 carved Ayaka slabs, Roman coins, Satavahana coins, ivory combs, and a bronze mother-and-child statue.",
    travelTips: [
      'Last 2-3 km unpaved — two-wheeler or SUV recommended',
      'Carry a flashlight for the stupa interior; some areas are dimly lit',
      'Visit Karimnagar Museum to see excavated artefacts',
    ],
    nearbyAttractions: ['Ramagiri Fort', 'Karimnagar Museum', 'Peddabankur archaeological site'],
    entryFee: 'Free',
    openingHours: 'Open throughout the day',
    osmLink: 'https://www.openstreetmap.org/node/2453768221',
  },
  {
    title: 'Sabitham Waterfalls',
    slug: 'sabitham-waterfalls',
    district: 'peddapalli',
    category: 'waterfalls',
    coordinates: { lat: 18.58, lng: 79.44 },
    bestSeason: 'July – November',
    accessibility: 'Approach road can be slushy; SUV or two-wheeler recommended',
    description:
      'A seasonal monsoon waterfall where water plunges ~100 feet from Gattusingaram hillocks. Surrounded by thick forest with a small Gouri Lingeshwara temple nearby. Telangana government sanctioned ₹6 crore for developing it as a formal tourist destination.',
    travelTips: [
      'Visit during or just after good rainfall — the falls dry up in summer',
      'Approach road can be slushy; an SUV or two-wheeler is recommended',
      'Up to 4,000 visitors on holidays — arrive early for peaceful experience',
    ],
    nearbyAttractions: ['Ramagiri Fort', 'Manthani historic town', 'Peddapalli town'],
    entryFee: 'Free',
    openingHours: 'Open throughout the day',
    osmLink: 'https://www.openstreetmap.org/node/2453768222',
  },
  {
    title: 'Andalamma Temple',
    slug: 'andalamma-temple',
    district: 'peddapalli',
    category: 'hidden-gems',
    coordinates: { lat: 18.63, lng: 79.35 },
    bestSeason: 'October – February',
    accessibility: '5 km from Peddapalli town; road access',
    description:
      'A picturesque 300-year-old ruined temple surrounded by hillocks. Features unique west-facing architecture with beautifully carved pillars. Though it has no idol, the atmospheric ruins have made it a popular spot for folk song shoots and pre-wedding photography.',
    travelTips: [
      'The temple has no idol — the architectural beauty and ruin atmosphere attract visitors',
      'Ideal for photography — golden hour lighting through the pillars is spectacular',
      'Combine with Dhulikatta Buddhist Stupa for a full heritage day',
    ],
    nearbyAttractions: ['Dhulikatta Buddhist Stupa', 'Peddapalli town', 'Ramagiri Fort'],
    entryFee: 'Free',
    openingHours: 'Open throughout the day',
    osmLink: 'https://www.openstreetmap.org/node/2453768223',
  },

  // ═══════════════════════════════════════
  // RAJANNA SIRCILLA (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Mid Manair Dam',
    slug: 'mid-manair-dam',
    district: 'rajanna-sircilla',
    category: 'reservoirs',
    coordinates: { lat: 18.336, lng: 78.711 },
    bestSeason: 'October – March',
    accessibility: 'Drive-up access; paved road',
    description:
      'A major irrigation dam on the Manair River with a scenic reservoir popular for picnics, fishing, and sunset views.',
    travelTips: [
      'Great sunset photography spot',
      'Fishing permitted with local permits',
      'Carry your own supplies — few shops nearby',
    ],
    nearbyAttractions: ['Vemulawada Temple', 'Kondagattu Temple', 'Dharmapuri Temple'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/28861564',
  },

  // ═══════════════════════════════════════
  // RANGAREDDY (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Sanghi Temple',
    slug: 'sanghi-temple',
    district: 'rangareddy',
    category: 'temples',
    coordinates: { lat: 17.267, lng: 78.676 },
    bestSeason: 'October – March',
    accessibility: '35 km from Hyderabad; long flight of steps to entrance',
    description:
      'A magnificent marble temple complex atop Paramananda Giri hill, sculpted in Chola-Chalukya style. Houses temples of Lord Venkateshwara (9.5-foot idol identical to Tirumala), Goddess Padmavathi, Lord Rama, Shiva, Ganesha, Durga, and others. The towering Raja Gopuram is visible from kilometers away.',
    travelTips: [
      'Visit on weekdays to avoid massive weekend crowds',
      'The climb up the steps is moderate — wear comfortable footwear',
      'Nearest railway station: Ghatkesar (13 km)',
    ],
    nearbyAttractions: ['Ramoji Film City', 'Osman Sagar Lake', 'Chilkur Balaji Temple'],
    entryFee: 'Free',
    openingHours: 'Open daily; specific pooja timings on sanghitemple.org',
    osmLink: 'https://www.openstreetmap.org/node/2453768224',
  },
  {
    title: 'Chilkur Balaji Temple',
    slug: 'chilkur-balaji-temple',
    district: 'rangareddy',
    category: 'temples',
    coordinates: { lat: 17.358, lng: 78.299 },
    bestSeason: 'October – February',
    accessibility: '25 km from Hyderabad off Vikarabad road; road access',
    description:
      'An ancient 14th-century temple on Osman Sagar banks, famous for the unique tradition where devotees walk 11 circumambulations to express a wish and return for 108 rounds once fulfilled. Known as the Visa Balaji Temple for granting foreign travel wishes.',
    travelTips: [
      'Wear comfortable footwear — you will walk many rounds around the shrine',
      'Carry a counter to track circumambulations (11 or 108)',
      'Temple closed midday (12:00 PM – 4:00 PM) — plan morning or evening visit',
    ],
    nearbyAttractions: ['Osman Sagar Lake', 'Himayath Sagar Lake', 'Bhimuni Forest Reserve'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768225',
  },
  {
    title: 'Ramoji Film City',
    slug: 'ramoji-film-city',
    district: 'rangareddy',
    category: 'museums',
    coordinates: { lat: 17.252, lng: 78.68 },
    bestSeason: 'October – February',
    accessibility: 'On Hyderabad–Vijayawada NH; full-day destination',
    description:
      "The world's largest integrated film studio complex (Guinness certified) spanning 1,666 acres. Functions as both an active film production facility and theme park with amusement rides, bird parks, themed gardens, and 47 sound stages where 200+ films are shot annually.",
    travelTips: [
      'Buy combo tickets online for significant discounts',
      'Plan for a full day (6–8 hours minimum) to cover major attractions',
      'Start with the guided bus tour of film sets, then explore theme park areas',
    ],
    nearbyAttractions: ['Sanghi Temple', 'Nehru Zoological Park', 'Hussain Sagar Lake'],
    entryFee: '₹1,200–₹2,400 per person (varies by package)',
    openingHours: '9:00 AM – 5:30 PM, all days',
    osmLink: 'https://www.openstreetmap.org/way/28861566',
  },
  {
    title: 'Ocean Park',
    slug: 'ocean-park',
    district: 'rangareddy',
    category: 'hidden-gems',
    coordinates: { lat: 17.42, lng: 78.35 },
    bestSeason: 'March – June (water rides) / October – February (dry rides)',
    accessibility: '15 km from Hyderabad city centre; road access',
    description:
      'A popular water and amusement theme park spanning 20+ acres of landscaped gardens. Features wave pools, water slides, rafting simulators, carousels, and dry rides suitable for all age groups.',
    travelTips: [
      'Weekdays are significantly less crowded than weekends',
      'Carry swimwear and a change of clothes for the water park section',
      'Outside food not allowed; park has food courts and snack stalls',
    ],
    nearbyAttractions: ['Himayath Sagar Lake', 'Chilkur Balaji Temple', 'Ramoji Film City'],
    entryFee: '₹400–₹800 per person (combo packages)',
    openingHours: '11:00 AM – 7:30 PM, all days',
    osmLink: 'https://www.openstreetmap.org/node/2453768226',
  },

  // ═══════════════════════════════════════
  // SANGAREDDY (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Manjeera Wildlife Sanctuary',
    slug: 'manjeera-wildlife-sanctuary',
    district: 'sangareddy',
    category: 'wildlife',
    coordinates: { lat: 17.964, lng: 78.039 },
    bestSeason: 'November – March',
    accessibility: '5 km from Sangareddy town; boat rides available',
    description:
      'A protected wetland ecosystem along the Manjira River, home to marsh crocodiles, freshwater turtles, and 250+ bird species including painted storks and pelicans. Features nine scenic islands with adventurous boat rides for birdwatching.',
    travelTips: [
      'Carry binoculars and telephoto lenses for birdwatching',
      'Wear neutral-coloured clothing to avoid disturbing birds',
      'Book boat rides in advance on weekends',
    ],
    nearbyAttractions: ['Environmental Education Centre', 'Singur Dam', 'Medak Cathedral'],
    entryFee: '₹30–50 per person',
    openingHours: '8:00 AM – 6:00 PM daily',
    osmLink: 'https://www.openstreetmap.org/relation/3305919',
  },
  {
    title: 'Heritage Jail Museum',
    slug: 'heritage-jail-museum',
    district: 'sangareddy',
    category: 'museums',
    coordinates: { lat: 17.63, lng: 78.087 },
    bestSeason: 'October – March',
    accessibility: 'In Sangareddy town; road access',
    description:
      'A 220-year-old colonial-era jail built in 1796, now converted into a museum. The unique "Feel The Jail" programme lets visitors experience prisoner life for 24 hours. Displays paintings and artifacts related to crime and prison history.',
    travelTips: [
      'Contact the jail a day in advance to book the "Feel The Jail" experience',
      'Carry a change of clothes for the 24-hour programme',
      'International travelers can arrange hotel pickup through the jail',
    ],
    nearbyAttractions: ['Old Sangareddy bazaars', 'IIT Hyderabad campus', 'Kondapur Museum'],
    entryFee: '₹500 for 24-hour experience; ₹5 for regular museum',
    openingHours: '10:00 AM – 5:00 PM (closed on public holidays)',
    osmLink: 'https://www.openstreetmap.org/node/2453768227',
  },
  {
    title: 'Kondapur Archaeological Museum',
    slug: 'kondapur-archaeological-museum',
    district: 'sangareddy',
    category: 'museums',
    coordinates: { lat: 17.561, lng: 78.011 },
    bestSeason: 'October – March',
    accessibility: 'In Kondapur village; road access',
    description:
      "An ASI-managed museum displaying artifacts from the ancient Kotagadda — identified as one of Megasthenes' 30 walled cities. Excavations revealed Buddhist stupas, chaityas, and a Roman gold coin of Emperor Augustus.",
    travelTips: [
      'Carry packed lunch and water — no restaurants nearby',
      'Ask museum staff for directions to the excavation mound',
      'Wear comfortable shoes for walking on the hillock',
    ],
    nearbyAttractions: ['Sangareddy town', 'Manjeera Wildlife Sanctuary', 'Heritage Jail Museum'],
    entryFee: 'Adults ₹5, Children Free',
    openingHours: '10:00 AM – 5:00 PM (closed on Fridays)',
    osmLink: 'https://www.openstreetmap.org/node/2453768228',
  },
  {
    title: 'Singur Dam',
    slug: 'singur-dam',
    district: 'sangareddy',
    category: 'reservoirs',
    coordinates: { lat: 17.75, lng: 77.928 },
    bestSeason: 'July – October',
    accessibility: '36 km from Sangareddy; road access',
    description:
      'A massive reservoir on the Manjira River built for hydroelectric and irrigation purposes. The dam serves as the primary drinking water source for the region and offers stunning views, especially during monsoon when it brims with water.',
    travelTips: [
      'Visit during or just after monsoon for the best views',
      'Carry food as there are limited eateries nearby',
      'Combine with a visit to Manjeera Wildlife Sanctuary',
    ],
    nearbyAttractions: ['Manjeera Wildlife Sanctuary', 'Sangareddy Fort', 'Pulkal village'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/way/35384509',
  },

  // ═══════════════════════════════════════
  // SIDDIPET (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Wargal Saraswati Temple',
    slug: 'wargal-saraswati-temple',
    district: 'siddipet',
    category: 'temples',
    coordinates: { lat: 17.776, lng: 78.615 },
    bestSeason: 'October – March',
    accessibility: 'On a hillock; steps to the main sanctum',
    description:
      'The most famous Saraswati temple in Telangana after Basara, situated on a hillock. Built in 1989 and maintained by Kanchi Mutt. Famous for Aksharabhyasa ceremonies for children, with a 10-foot Saraswati idol and free meals for all devotees.',
    travelTips: [
      'Arrive early on Vasantha Panchami — darshan can take 2-3 hours',
      'Dress in traditional attire for the temple visit',
      'Carry water for the hill climb',
    ],
    nearbyAttractions: [
      'Sri Shani Temple',
      '400-year-old Shambu Deva Temple',
      'Scenic valley views',
    ],
    entryFee: 'Free',
    openingHours: 'Mon–Thu 6:00 AM – 1:00 PM, Fri–Sun 6:00 AM – 2:00 PM, Evening 4:00 PM – 7:30 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768229',
  },
  {
    title: 'Komuravelli Mallanna Temple',
    slug: 'komuravelli-mallanna-temple',
    district: 'siddipet',
    category: 'temples',
    coordinates: { lat: 17.93, lng: 78.896 },
    bestSeason: 'January – April',
    accessibility: 'On Indrakeeladri hillock; road access with steps',
    description:
      'A 500-year-old Shiva temple where Lord Mallanna is worshipped as an 8-foot clay idol rather than a conventional linga. Famous for the 12-week Mallanna Jatara with Oggu Katha performances and fire-walking rituals (Agni Gundalu).',
    travelTips: [
      'Visit during Jatara for the full cultural and spiritual experience',
      "Respect the Oggu priests' traditional rituals",
      'Expect long queues on Sundays during Jatara season',
    ],
    nearbyAttractions: ['Konda Pochamma Temple', 'Siddipet town', 'Warangal Fort'],
    entryFee: 'Free',
    openingHours: '4:00 AM – 9:00 PM daily',
    osmLink: 'https://www.openstreetmap.org/node/2453768230',
  },
  {
    title: 'Ranganayaka Sagar Reservoir',
    slug: 'ranganayaka-sagar-reservoir',
    district: 'siddipet',
    category: 'reservoirs',
    coordinates: { lat: 17.88, lng: 78.85 },
    bestSeason: 'October – February',
    accessibility: 'In Chinnakodur mandal; road access',
    description:
      'A scenic reservoir surrounded by greenery, popular for picnics and family outings. Serves as an irrigation water source and offers a peaceful retreat with Deccan plateau landscape views.',
    travelTips: [
      'Carry packed food — limited facilities nearby',
      'Combine with a visit to Sri Saraswathi Kshetramu',
      'Best for sunset photography',
    ],
    nearbyAttractions: ['Sri Saraswathi Kshetramu', 'Shanigaram Reservoir', 'Siddipet town'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768231',
  },

  // ═══════════════════════════════════════
  // SURYAPET (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Phanigiri Buddhist Site',
    slug: 'phanigiri-buddhist-site',
    district: 'suryapet',
    category: 'archaeological',
    coordinates: { lat: 17.063, lng: 79.541 },
    bestSeason: 'October – March',
    accessibility: 'Hilltop site with moderate climb from parking',
    description:
      'A 2nd-century BCE Buddhist monastery complex with stupas, viharas, chaitya halls, and intricate carvings on the Krishna river trade route.',
    travelTips: [
      'Carry water and a hat — exposed site with little shade',
      'The ASI information boards are excellent',
      'Combine with Nagarjuna Sagar trip',
    ],
    nearbyAttractions: ['Nagarjuna Sagar Dam', 'Ethipothala Falls', 'Nagarjunakonda Museum'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768165',
  },

  // ═══════════════════════════════════════
  // VIKARABAD (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Ananthagiri Hills',
    slug: 'ananthagiri-hills',
    district: 'vikarabad',
    category: 'viewpoints',
    coordinates: { lat: 17.316, lng: 77.863 },
    bestSeason: 'October – March',
    accessibility: 'Paved road to the top; short walks to viewpoints',
    description:
      'The birthplace of the Musi River — coffee plantations, ancient temples, misty mornings, and panoramic valley views.',
    travelTips: [
      'Start early — sunsets from the viewpoints are legendary',
      'Visit the Anantha Padmanabha Swamy Temple',
      'Trek to the Musi origin point',
    ],
    nearbyAttractions: [
      'Kotipally Reservoir',
      'Bugga Rameswaram Temple',
      'Vikarabad Forest trails',
    ],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/node/2453768155',
  },

  // ═══════════════════════════════════════
  // WANAPARTHY (1 place) — TODO: add more
  // ═══════════════════════════════════════
  {
    title: 'Wanaparthy Palace',
    slug: 'wanaparthy-palace',
    district: 'wanaparthy',
    category: 'forts',
    coordinates: { lat: 16.361, lng: 78.062 },
    bestSeason: 'October – March',
    accessibility: 'In Wanaparthy town; road access',
    description:
      'The grand 19th-century palace of Raja Rameshwar Rao — one of the largest princely estates under the Nizam. Indo-Saracenic architecture.',
    travelTips: [
      'The palace now houses a polytechnic college — request permission to enter',
      'The durbar hall and chandeliers are stunning',
      'Combine with a visit to Jurala Dam',
    ],
    nearbyAttractions: ['Jurala Dam', 'Gadwal Fort', 'Jogulamba Temple'],
    entryFee: 'Free (permission needed)',
    openingHours: '9:00 AM – 5:00 PM',
    osmLink: 'https://www.openstreetmap.org/node/2453768180',
  },

  // ═══════════════════════════════════════
  // WARANGAL (4 places)
  // ═══════════════════════════════════════
  {
    title: 'Thousand Pillar Temple',
    slug: 'thousand-pillar-temple',
    district: 'warangal',
    category: 'temples',
    coordinates: { lat: 18.003, lng: 79.574 },
    bestSeason: 'October – March',
    accessibility: 'In Hanamkonda town center; level walk from parking',
    description:
      'Built in 1163 CE, this star-shaped triple shrine to Shiva, Vishnu, and Surya features hundreds of intricately carved pillars.',
    travelTips: [
      'Photography allowed in outer areas only',
      'Combine with Warangal Fort and Bhadrakali Temple',
      'Evening light is magical for photos',
    ],
    nearbyAttractions: ['Warangal Fort', 'Bhadrakali Temple', 'Kakatiya Rock Garden'],
    entryFee: '₹25 for Indians, ₹300 for foreigners',
    openingHours: '6:00 AM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/154316711',
  },
  {
    title: 'Warangal Fort',
    slug: 'warangal-fort',
    district: 'warangal',
    category: 'forts',
    coordinates: { lat: 17.959, lng: 79.608 },
    bestSeason: 'October – March',
    accessibility: 'Large open site with paved pathways',
    description:
      'The 13th-century Kakatiya citadel — its iconic Kala Thoranam gateways are the emblem of Telangana. Sprawling ruins of temples and ceremonial halls.',
    travelTips: [
      'Carry water and a hat — little shade across the site',
      'Start at the Swyambhu temple and walk toward the gateways',
      'Sunset light on the stone archways is stunning',
    ],
    nearbyAttractions: ['Thousand Pillar Temple', 'Bhadrakali Temple', 'Kakatiya Musical Garden'],
    entryFee: '₹25 for Indians, ₹300 for foreigners',
    openingHours: '8:00 AM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/relation/2025827',
  },
  {
    title: 'Bhadrakali Temple',
    slug: 'bhadrakali-temple',
    district: 'warangal',
    category: 'temples',
    coordinates: { lat: 17.994, lng: 79.58 },
    bestSeason: 'Year-round (Navaratri is spectacular)',
    accessibility: 'On Bhadrakali Bund; level walk from parking',
    description:
      "One of Telangana's oldest temples, built in 625 CE — houses a 2.7-meter fierce stone idol of the goddess Bhadrakali on a scenic lakefront.",
    travelTips: [
      'Visit during early morning aarti',
      'The lake views from the temple steps are serene',
      'Navaratri celebrations here are among the largest in Telangana',
    ],
    nearbyAttractions: ['Thousand Pillar Temple', 'Warangal Fort', 'Kakatiya Musical Garden'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/154316715',
  },
  {
    title: 'Pakhal Lake',
    slug: 'pakhal-lake',
    district: 'warangal',
    category: 'lakes',
    coordinates: { lat: 17.953, lng: 79.997 },
    bestSeason: 'October – March',
    accessibility: 'Road access; last 2 km rough',
    description:
      'Built in 1213 CE by Kakatiya king Ganapati Deva, this serene 30 sq km lake is surrounded by the Pakhal Wildlife Sanctuary.',
    travelTips: [
      'Visit at sunrise for spectacular bird activity',
      'Carry a bird guide — 100+ species recorded',
      'Combine with a visit to the sanctuary',
    ],
    nearbyAttractions: ['Pakhal Wildlife Sanctuary', 'Ramappa Temple', 'Eturnagaram Sanctuary'],
    entryFee: 'Free',
    openingHours: 'Open all day',
    osmLink: 'https://www.openstreetmap.org/relation/6341607',
  },

  // ═══════════════════════════════════════
  // YADADRI BHUVANAGIRI (3 places)
  // ═══════════════════════════════════════
  {
    title: 'Yadadri Lakshmi Narasimha Swamy Temple',
    slug: 'yadadri-temple',
    district: 'yadadri-bhuvanagiri',
    category: 'temples',
    coordinates: { lat: 17.484, lng: 78.866 },
    bestSeason: 'October – March',
    accessibility: 'Hilltop temple with steps and road access; elevator for elderly',
    description:
      'A massive temple complex renovated with exquisite Kakatiya-style stone architecture, drawing millions of devotees annually.',
    travelTips: [
      'Visit on weekdays to avoid huge queues',
      'Free meals served at the temple canteen',
      'Bhongir Fort is just 30 min away',
    ],
    nearbyAttractions: ['Bhongir Fort', 'Surendrapuri Museum', 'Kolanupaka Jain Temple'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 3:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/555433033',
  },
  {
    title: 'Bhongir Fort',
    slug: 'bhongir-fort',
    district: 'yadadri-bhuvanagiri',
    category: 'forts',
    coordinates: { lat: 17.516, lng: 78.888 },
    bestSeason: 'October – February',
    accessibility: 'Steep rock climb; challenging for elderly',
    description:
      'An imposing 10th-century monolith fort built on a 500-foot egg-shaped rock — a physically rewarding climb with panoramic views.',
    travelTips: [
      'Start early morning to beat the heat',
      'No food/water at the top — pack your own',
      'Paragliding available during season',
    ],
    nearbyAttractions: ['Yadadri Temple', 'Kolanupaka Jain Temple', 'Surendrapuri Museum'],
    entryFee: 'Free',
    openingHours: '8:00 AM – 5:30 PM',
    osmLink: 'https://www.openstreetmap.org/way/41103572',
  },
  {
    title: 'Kolanupaka Jain Temple',
    slug: 'kolanupaka-jain-temple',
    district: 'yadadri-bhuvanagiri',
    category: 'temples',
    coordinates: { lat: 17.702, lng: 79.052 },
    bestSeason: 'October – March',
    accessibility: 'Level walk from parking; wheelchair accessible',
    description:
      'A 2000-year-old Jain temple housing a magnificent 1.5-meter jade statue of Lord Mahavira. Serene atmosphere.',
    travelTips: [
      'All visitors must cover legs; sarongs provided',
      'Photography inside the sanctum is restricted',
      'The temple museum explains Jain iconography',
    ],
    nearbyAttractions: ['Yadadri Temple', 'Bhongir Fort', 'Surendrapuri Museum'],
    entryFee: 'Free',
    openingHours: '6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM',
    osmLink: 'https://www.openstreetmap.org/way/35384503',
  },
] as const
