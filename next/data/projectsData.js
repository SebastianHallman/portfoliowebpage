const myMathBookImg = '/img/myMathBook.png';
const gnomeHuntImg = '/img/gnomehunt.jpg';
const winterWindowImg = '/img/winterwindow.png';
const voxelImg = '/img/voxel.png';
const guessWhatImg = '/img/guesswhat.png';
const lerryImg = '/img/Lerry.png';
const chess3dImg = '/img/3dchess.png'
const thesisImg = '/img/thesis.jpg'
const speedyWriterImg = '/img/speedyWriter.png'

export const projectsData = [
  {
    id: 'roslagens-hund-friluftsliv',
    featured: false,
    title: 'Roslagens Hund & Friluftsliv',
    subtitle: 'A custom Shopify storefront for a local shop',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Storefront API'],
    collaborators: [],
    descriptionShort:
      'A mobile-friendly pet and outdoor webshop with a custom frontend and content managed in Shopify.',
    descriptionLong:
      'I am building a new storefront for my mum\'s pet and outdoor shop, Roslagens Hund & Friluftsliv. Built with Next.js and Shopify, it brings together product categories, search, product details, and a cart that continues to Shopify checkout. A key goal is that she can manage products, navigation, and homepage content in Shopify without editing code or deploying the site. The storefront is in Swedish, with prices in SEK and clear notices for pickup-only products.',
    links: {},
  },
  {
    id: 'calmakit-masters-thesis',
    featured: true,
    title: 'CalmaKit — haptic wearable for CP spasticity',
    subtitle: "Master's thesis, KTH",
    badge: 'KTH MSc',
    tech: [
      'Haptic Technology',
      'Human-Computer Interaction',
      'Flutter',
      'Arduino',
      'Wearable Prototype',
    ],
    collaborators: [],
    descriptionShort:
      'A shape-shifting wearable and companion app that applies controlled pressure to ease spasticity, studied through autobiographical design.',
    descriptionLong:
      'CalmaKit is a wearable band and Flutter app I designed for people with Cerebral Palsy who need more ways to ease muscle activity outside the clinic. It delivers personalized, shape-shifting pressure patterns. I evaluated it on my own body: perceived stiffness dropped and body-map data showed eased spasticity. The thesis also maps what still needs controlled follow-up research.',
    dates: { start: '2025-01-01', end: '2025-12-31' },
    image: thesisImg,
    imageFit: 'cover',
    links: {
      article: 'https://www.diva-portal.org/smash/record.jsf?pid=diva2:2037729',
    },
  },
  {
    id: 'mymathbook',
    featured: true,
    title: 'MyMathBook',
    subtitle: 'Google Docs for math',
    tech: ['React', 'TypeScript', 'LaTeX', 'Real-time Collaboration', 'Auth', 'Claude Code'],
    collaborators: [],
    descriptionShort:
      'A realtime collaborative editor that feels like Google Docs for equations — WYSIWYG math, not raw LaTeX.',
    descriptionLong:
      'MyMathBook is a fullstack editor for writing mathematics together in the browser. It has WYSIWYG LaTeX so you can write equations without markup, live multiplayer editing, and accounts so documents stay yours. It is free with 10 docs per account at mymathbook.sebastianhallman.com.',
    image: myMathBookImg,
    imageFit: 'contain',
    links: {
      site: 'https://mymathbook.sebastianhallman.com',
    },
  },
  {
    id: 'mitt-schack',
    featured: true,
    title: 'Mitt Schack',
    subtitle: 'A companion app for Swedish chess players',
    badge: 'Coming to Android',
    tech: ['React Native', 'Expo', 'TypeScript', 'Schack.se API'],
    collaborators: [],
    descriptionShort:
      'Ratings, matches, tournaments, and club results in one place for Swedish chess players.',
    descriptionLong:
      'Mitt Schack is a mobile app I am building for Swedish chess players and club members. It brings together data from the Swedish Chess Federation: follow your rating history, upcoming matches, tournament results, and club competitions. You can also search players, explore leaderboards, and replay games when notation is available. The user can connect their chess player ID to get relevant information with ease, and this is all done locally. No account required. Built with React Native, Expo, and TypeScript, the app is coming to Android.',
    image: '/img/mitt-schack.png',
    imageFit: 'contain',
    imagePosition: 'center 35%',
    links: {
      site: 'https://mittschack.sebastianhallman.com',
    },
  },
  {
    id: 'speedy-writer',
    featured: true,
    title: 'Speedy Writer',
    subtitle: 'Desktop word prediction overlay',
    tech: ['Python', 'Windows', 'Assistive software', 'Codex'],
    collaborators: [],
    descriptionShort:
      'A local Windows overlay that completes words as you type, with F-key shortcuts and no cloud.',
    descriptionLong:
      'Speedy Writer is a free, open-source overlay for Windows that suggests word completions as you type anywhere on the system. Up to ten predictions, F1–F10 to accept, on-device learning, English and Swedish wordlists, and a customizable UI — nothing is sent to the cloud. Inspired by Eurovocs Skippy.',
    image: speedyWriterImg,
    imageFit: 'contain',
    imagePosition: 'left top',
    links: {
      site: 'https://sebastianhallman.github.io/word_predictor/',
      repo: 'https://github.com/sebastianhallman/word_predictor',
    },
  },
  {
    id: '3d-chess',
    featured: true,
    title: '3D Chess',
    subtitle: 'Real-time 3D chess with Lichess integration',
    tech: ['React', 'Three.js', 'Vite', 'Lichess API', 'Codex'],
    collaborators: [],
    descriptionShort:
      'A live 3D chess client on Lichess — play, solve puzzles, and watch pieces move in space.',
    descriptionLong:
      'A React and Three.js chess client connected to Lichess for OAuth, live play, and puzzles. Move validation, piece animations, and a full HUD sit on top of a 3D board rather than a flat grid. Play it at 3dchess.d1sabl3d.com; the client is open on GitHub.',
    image: chess3dImg,
    imageFit: 'contain',
    imagePosition: 'center 55%',
    imageScale: 1.1,
    links: {
      demo: 'https://3dchess.d1sabl3d.com',
      repo: 'https://github.com/sebastianhallman/3d-chess-client',
    },
  },
  {
    id: 'gnome-hunt',
    featured: false,
    title: 'Gnome Hunt',
    subtitle: 'A multi-platform hide and seek game',
    tech: ['Unity', 'Meta Quest 2', 'Blender'],
    collaborators: ['Mille Kage', 'Emil Wahrme', 'Lucas Kerslow', 'Lucas Akesson'],
    descriptionShort: 'VR seeker vs screen hiders — a social hide-and-seek game we shipped as a course project.',
    descriptionLong:
      'Gnome Hunt is a social hide-and-seek experience built in Unity. One player searches in VR while others collaborate on a shared screen to hide and misdirect. We focused on intuitive interactions, readable feedback loops, and cozy vibes.',
    dates: { start: '2024-09-05', end: '2024-11-04' },
    image: gnomeHuntImg,
    imageFit: 'cover',
    links: {
      site: 'https://sites.google.com/view/gnomehunt',
    },
  },
  {
    id: 'winter-window',
    featured: false,
    title: 'Winter Window',
    subtitle: 'Enjoy the fun with snow without the cold',
    tech: ['Godot Engine', 'HTC Vive', 'Intel Realsense'],
    collaborators: ['Jessica Gorwat', 'Anton Lilja', 'Isak Larsson', 'Morris Hansing'],
    descriptionShort: 'An indoor XR snow installation using Vive and RealSense depth.',
    descriptionLong:
      'Winter Window is an immersive installation built with Godot. Using HTC Vive for interaction and Intel RealSense for depth sensing, one player can play with virtual snow while spectators can look into the virtual world with a camera.',
    dates: { start: '2024-11-12', end: '2024-12-13' },
    image: winterWindowImg,
    imageFit: 'cover',
    links: {
      site: 'https://sites.google.com/view/winterwindow/home',
    },
  },
  {
    id: 'lerry-ai-coding-test',
    featured: false,
    title: 'Lerry AI - Coding Test',
    subtitle: 'Coding test for Lennart (AI accounting service)',
    tech: ['React', 'PHP', 'Codex'],
    collaborators: [],
    descriptionShort: 'A React UI plus PHP bookkeeping validator, pair-programmed with Codex as a take-home.',
    descriptionLong:
      'A coding test for Lennart, a company building an AI accounting service. I built a visual front-end in React and a bookkeeping verification validator in PHP. As requested, I pair-programmed with AI (Codex) to demonstrate how I work with AI tools during development.',
    image: lerryImg,
    imageFit: 'contain',
    imagePosition: 'left top',
    imageScale: 1.22,
  },
  {
    id: 'voxel-terrain',
    featured: false,
    title: 'Voxel terrain generator',
    subtitle: 'A minecraft-like terrain generator',
    tech: ['Unity', 'Algorithms'],
    collaborators: [],
    descriptionShort: 'From-scratch Unity voxels with Perlin noise and on-demand chunks.',
    descriptionLong:
      'Being a gamer at heart and a ton of hours spent in Minecraft, I wanted to create my own voxel terrain generator from scratch in Unity. The project features procedural terrain generation using Perlin noise and a chunk based system for generating new areas on command. The focus of the project was on world generation, so performance optimizations has not been implemented.',
    dates: { start: '2023-04-24', end: '2023-05-18' },
    image: voxelImg,
    imageFit: 'cover',
  },
  {
    id: 'guesswhat-imdb',
    featured: false,
    title: 'GuessWhat: IMDB rating quiz game',
    subtitle: 'Can you guess which movie ranks higher?',
    tech: ['HTML', 'JavaScript', 'Vue', 'APIs', 'Firebase'],
    collaborators: ['Saqib Ahmed', 'David Hurtig', 'Petter Lager'],
    descriptionShort: 'A Vue quiz that pits two movies against each other on IMDB rating.',
    descriptionLong:
      'GuessWhat is a Vue-based quiz that fetches movie metadata via public APIs and tracks sessions and leaderboards with Firebase. Emphasis on quick rounds, responsive UI, and fair tie-breaking logic for close ratings.',
    image: guessWhatImg,
    imageFit: 'contain',
  },
]
