export { LOCATIONS, type LocationData } from './locations'

export const APP = {
  name: 'Unexplored Telangana',
  description:
    "Discover Telangana's untold stories — its waterfalls, forts, temples, wildlife, and hidden gems.",
  url: 'https://unexploredtelangana.in',
} as const

export const MAP = {
  style: 'https://tiles.openfreemap.org/styles/liberty',
  defaultCenter: [79.0882, 17.9689] as [number, number],
  defaultZoom: 7,
  minZoom: 6,
  maxZoom: 18,
  maxBounds: [76.5, 15.5, 82.0, 20.5] as [number, number, number, number],
  pitch: 0,
  bearing: 0,
  clusterRadius: 50,
  clusterMaxZoom: 14,
} as const

export const API = {
  baseUrl: 'http://localhost:4000/api',
  timeout: 10000,
} as const

export const DISTRICTS = [
  {
    name: 'Adilabad',
    slug: 'adilabad',
    center: { lat: 19.664, lng: 78.532 },
    zoom: 11,
    description:
      'The northern gateway of Telangana, known for its cascading waterfalls, dense forests, and tribal heritage.',
    knownFor: ['waterfalls', 'tribal-culture', 'forests'],
    locationCount: 28,
  },
  {
    name: 'Bhadradri Kothagudem',
    slug: 'bhadradri-kothagudem',
    center: { lat: 17.659, lng: 80.619 },
    zoom: 11,
    description:
      'Home to the sacred Sri Sita Ramachandra Swamy Temple on the banks of Godavari and rich coal mining heritage.',
    knownFor: ['temples', 'rivers', 'coal-mining'],
    locationCount: 32,
  },
  {
    name: 'Hyderabad',
    slug: 'hyderabad',
    center: { lat: 17.385, lng: 78.4867 },
    zoom: 12,
    description:
      'The City of Pearls — a seamless blend of 400-year-old heritage with a thriving modern tech ecosystem.',
    knownFor: ['food', 'forts', 'museums'],
    locationCount: 56,
  },
  {
    name: 'Jagtial',
    slug: 'jagtial',
    center: { lat: 18.794, lng: 78.913 },
    zoom: 11,
    description:
      "A district rich in ancient temples and step wells, nestled along the Godavari's tributaries.",
    knownFor: ['temples', 'forts'],
    locationCount: 18,
  },
  {
    name: 'Jangaon',
    slug: 'jangaon',
    center: { lat: 17.726, lng: 79.152 },
    zoom: 11,
    description:
      "A cradle of Telangana's armed struggle history, dotted with prehistoric sites and ancient temples.",
    knownFor: ['historical', 'temples'],
    locationCount: 16,
  },
  {
    name: 'Jayashankar Bhupalpally',
    slug: 'jayashankar-bhupalpally',
    center: { lat: 18.31, lng: 79.961 },
    zoom: 11,
    description:
      'Tribal heartland with ancient temples, the stunning Pandavula Gutta cave paintings, and dense forests.',
    knownFor: ['temples', 'forests', 'archaeological'],
    locationCount: 22,
  },
  {
    name: 'Jogulamba Gadwal',
    slug: 'jogulamba-gadwal',
    center: { lat: 16.233, lng: 77.796 },
    zoom: 11,
    description:
      'Sacred land housing the Jogulamba Shakti Peetham, ancient river forts, and traditional Gadwal silk weaving.',
    knownFor: ['temples', 'forts', 'handlooms'],
    locationCount: 20,
  },
  {
    name: 'Kamareddy',
    slug: 'kamareddy',
    center: { lat: 18.32, lng: 78.34 },
    zoom: 11,
    description:
      'Gateway to the Pocharam wildlife sanctuary and home to the historic Domakonda Fort.',
    knownFor: ['forts', 'wildlife', 'lakes'],
    locationCount: 22,
  },
  {
    name: 'Karimnagar',
    slug: 'karimnagar',
    center: { lat: 18.439, lng: 79.128 },
    zoom: 11,
    description:
      'The Granary of Telangana featuring the majestic Lower Manair Dam, ancient temples, and silver filigree craft.',
    knownFor: ['reservoirs', 'temples', 'forts'],
    locationCount: 28,
  },
  {
    name: 'Khammam',
    slug: 'khammam',
    center: { lat: 17.247, lng: 80.151 },
    zoom: 11,
    description:
      'A historic district with the iconic Khammam Fort, Lakaram Lake, and the ancient Narasimha Swamy temple.',
    knownFor: ['forts', 'lakes', 'temples'],
    locationCount: 26,
  },
  {
    name: 'Komaram Bheem Asifabad',
    slug: 'komaram-bheem-asifabad',
    center: { lat: 19.365, lng: 79.479 },
    zoom: 11,
    description:
      'Named after the tribal legend Komaram Bheem — land of dense forests, gushing waterfalls, and coal mines.',
    knownFor: ['waterfalls', 'forests', 'tribal-culture'],
    locationCount: 24,
  },
  {
    name: 'Mahabubabad',
    slug: 'mahabubabad',
    center: { lat: 17.599, lng: 80.004 },
    zoom: 11,
    description:
      'Known for the ancient Bayyaram cheruvu and prehistoric Palamakula rock paintings.',
    knownFor: ['archaeological', 'temples', 'lakes'],
    locationCount: 18,
  },
  {
    name: 'Mahabubnagar',
    slug: 'mahabubnagar',
    center: { lat: 16.748, lng: 77.985 },
    zoom: 11,
    description:
      'The southern district of Telangana, home to the famous Pillalamarri banyan tree, Koilkonda Fort, and the Jurala Dam.',
    knownFor: ['forts', 'reservoirs', 'eco-tourism'],
    locationCount: 28,
  },
  {
    name: 'Mancherial',
    slug: 'mancherial',
    center: { lat: 18.871, lng: 79.453 },
    zoom: 11,
    description:
      'An industrial heartland by the Godavari, yet hiding several pristine waterfalls and dense teak forests.',
    knownFor: ['waterfalls', 'forests', 'temples'],
    locationCount: 20,
  },
  {
    name: 'Medak',
    slug: 'medak',
    center: { lat: 18.045, lng: 78.26 },
    zoom: 11,
    description:
      'Known for its majestic Gothic-style Medak Cathedral, the historic Medak Fort, and the Pocharam Wildlife Sanctuary.',
    knownFor: ['churches', 'forts', 'wildlife'],
    locationCount: 22,
  },
  {
    name: 'Medchal-Malkajgiri',
    slug: 'medchal-malkajgiri',
    center: { lat: 17.63, lng: 78.48 },
    zoom: 11,
    description:
      'The northern corridor of Hyderabad, featuring the Shamirpet Lake, various gardens, and emerging tech parks.',
    knownFor: ['lakes', 'eco-tourism', 'viewpoints'],
    locationCount: 18,
  },
  {
    name: 'Mulugu',
    slug: 'mulugu',
    center: { lat: 18.191, lng: 80.021 },
    zoom: 11,
    description:
      'A district of ancient spirituality and nature — home to the world-famous Ramappa and Thousand Pillar temples.',
    knownFor: ['temples', 'lakes', 'waterfalls'],
    locationCount: 24,
  },
  {
    name: 'Nagarkurnool',
    slug: 'nagarkurnool',
    center: { lat: 16.487, lng: 78.324 },
    zoom: 11,
    description:
      'The gateway to the Nallamala forests, featuring the Srisailam Tiger Reserve, ancient temples, and deep caves.',
    knownFor: ['wildlife', 'temples', 'eco-tourism'],
    locationCount: 24,
  },
  {
    name: 'Nalgonda',
    slug: 'nalgonda',
    center: { lat: 17.057, lng: 79.268 },
    zoom: 11,
    description:
      'Famous for the Nagarjuna Sagar dam, ancient Buddhist sites, and the historic Devarakonda Fort.',
    knownFor: ['reservoirs', 'forts', 'archaeological'],
    locationCount: 28,
  },
  {
    name: 'Narayanpet',
    slug: 'narayanpet',
    center: { lat: 16.744, lng: 77.497 },
    zoom: 11,
    description:
      'A cultural gem known for its world-famous Narayanpet silk sarees, ancient temples, and serene rural landscapes.',
    knownFor: ['handlooms', 'temples', 'forts'],
    locationCount: 16,
  },
  {
    name: 'Nirmal',
    slug: 'nirmal',
    center: { lat: 19.096, lng: 78.344 },
    zoom: 11,
    description:
      "Renowned for the Nirmal paintings and wooden toys, dense teak forests, and the Sahyadri ranges' waterfalls.",
    knownFor: ['waterfalls', 'handicrafts', 'forts'],
    locationCount: 22,
  },
  {
    name: 'Nizamabad',
    slug: 'nizamabad',
    center: { lat: 18.673, lng: 78.1 },
    zoom: 11,
    description:
      'Known for the historic Nizamabad Fort, the serene Alisagar Reservoir, and the ancient Dichpally Ramalayam.',
    knownFor: ['forts', 'lakes', 'temples'],
    locationCount: 24,
  },
  {
    name: 'Peddapalli',
    slug: 'peddapalli',
    center: { lat: 18.614, lng: 79.383 },
    zoom: 11,
    description:
      'Industrial district with a rich heritage — home to the ancient Bheemaram caves and Manthani temples.',
    knownFor: ['temples', 'archaeological', 'reservoirs'],
    locationCount: 18,
  },
  {
    name: 'Rajanna Sircilla',
    slug: 'rajanna-sircilla',
    center: { lat: 18.389, lng: 78.81 },
    zoom: 11,
    description:
      'The Textile Town of Telangana, with rich handloom weaving tradition, the beautiful Mid Manair Dam, and ancient temples.',
    knownFor: ['handlooms', 'reservoirs', 'temples'],
    locationCount: 20,
  },
  {
    name: 'Rangareddy',
    slug: 'rangareddy',
    center: { lat: 17.25, lng: 78.43 },
    zoom: 11,
    description:
      'Circling Hyderabad, this district features the stunning Ananthagiri Hills, Himayat Sagar, and various adventure spots.',
    knownFor: ['viewpoints', 'lakes', 'eco-tourism'],
    locationCount: 32,
  },
  {
    name: 'Sangareddy',
    slug: 'sangareddy',
    center: { lat: 17.625, lng: 78.091 },
    zoom: 11,
    description:
      'Features the spiritual heart of Sangareddy — the Jogipet Temple, Manjeera Wildlife Sanctuary, and Singur Dam.',
    knownFor: ['temples', 'wildlife', 'reservoirs'],
    locationCount: 22,
  },
  {
    name: 'Siddipet',
    slug: 'siddipet',
    center: { lat: 18.1, lng: 78.85 },
    zoom: 11,
    description:
      'A rapidly developing district known for the historic Ranganayaka Swamy Temple and the beautiful Konda Pochamma Sagar.',
    knownFor: ['temples', 'reservoirs', 'forts'],
    locationCount: 20,
  },
  {
    name: 'Suryapet',
    slug: 'suryapet',
    center: { lat: 17.14, lng: 79.62 },
    zoom: 11,
    description:
      'Known for the Phanigiri Buddhist archaeological site, the historic Pillalamarri era, and beautiful irrigation tanks.',
    knownFor: ['archaeological', 'temples', 'reservoirs'],
    locationCount: 18,
  },
  {
    name: 'Vikarabad',
    slug: 'vikarabad',
    center: { lat: 17.338, lng: 77.904 },
    zoom: 11,
    description:
      "The nature-lover's escape — featuring the Ananthagiri Hills, forest treks, ancient temples, and rich biodiversity.",
    knownFor: ['viewpoints', 'forests', 'eco-tourism'],
    locationCount: 24,
  },
  {
    name: 'Wanaparthy',
    slug: 'wanaparthy',
    center: { lat: 16.361, lng: 78.062 },
    zoom: 11,
    description:
      'The Rani of Telangana — ruled by the iconic Raja Rameshwar Rao, home to the grand Wanaparthy Palace and ancient forts.',
    knownFor: ['forts', 'temples', 'reservoirs'],
    locationCount: 20,
  },
  {
    name: 'Warangal',
    slug: 'warangal',
    center: { lat: 18.0, lng: 79.58 },
    zoom: 11,
    description:
      'The ancient Kakatiya capital — home to the UNESCO-listed Ramappa Temple, Thousand Pillar Temple, and Warangal Fort ruins.',
    knownFor: ['forts', 'temples', 'lakes'],
    locationCount: 32,
  },
  {
    name: 'Yadadri Bhuvanagiri',
    slug: 'yadadri-bhuvanagiri',
    center: { lat: 17.493, lng: 78.883 },
    zoom: 11,
    description:
      'Home to the sacred Yadadri Lakshmi Narasimha Swamy temple and the majestic Bhongir Fort atop a monolithic rock.',
    knownFor: ['temples', 'forts', 'viewpoints'],
    locationCount: 22,
  },
] as const
