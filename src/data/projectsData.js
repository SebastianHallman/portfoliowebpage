import myMathBookImg from '../assets/myMathBook.png'
import gnomeHuntImg from '../assets/gnomehunt.jpg'
import winterWindowImg from '../assets/winterwindow.png'
import voxelImg from '../assets/voxel.png'
import guessWhatImg from '../assets/guesswhat.png'
import lerryImg from '../assets/Lerry.png'

const chess3dImg = '/img/3dchess.png'
const thesisImg = '/img/thesis.jpg'
const speedyWriterImg = '/img/speedyWriter.png'

export const projectsData = [
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
  },
]
