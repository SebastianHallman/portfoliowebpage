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
    title: 'Exploring the use of shape-shifting haptic technology to reduce excessive muscle activity in individuals with Cerebral Palsy',
    subtitle: "Master's thesis, KTH ",
    tech: [
      'Autobiographical Study',
      'Haptic Technology',
      'Human-Computer Interaction',
      'Flutter',
      'Arduino',
      'Wearable Prototype',
    ],
    collaborators: [],
    descriptionShort:
      'A KTH master thesis on CalmaKit, a shape-shifting haptic wearable and app for managing spasticity in Cerebral Palsy.',
    descriptionLong:
      'This thesis explores shape-shifting haptic technology as a way to reduce excessive muscle activity (spasticity) in individuals with Cerebral Palsy. Using an autobiographical design process, I developed CalmaKit: a wearable band and companion app for controlled, personalized pressure patterns. Findings showed reduced perceived muscle stiffness, with body-map data indicating clear signs of eased spasticity, while also highlighting the need for further research to evaluate why the effect occurs and how effective the prototype is long-term.',
    dates: { start: '2025-01-01', end: '2025-12-31' },
    image: thesisImg,
    links: {
      article: 'https://www.diva-portal.org/smash/record.jsf?pid=diva2:2037729',
    },
  },
  {
    id: 'lerry-ai-coding-test',
    title: 'Lerry AI - Coding Test',
    subtitle: 'Coding test for Lennart (AI accounting service)',
    tech: ['React', 'PHP', 'Codex'],
    collaborators: [],
    descriptionShort: 'A React UI + PHP bookkeeping verification validator, built together with AI pair-programming.',
    descriptionLong:
      'A coding test for Lennart, a company building an AI accounting service. I built a visual front-end in React and a bookkeeping verification validator in PHP. As requested, I pair-programmed with AI (Codex) to demonstrate how I work with AI tools during development.',
    image: lerryImg,
    imagePosition: 'left top',
    imageScale: 1.22,
  },
  {
    id: 'speedy-writer',
    title: 'Speedy Writer',
    subtitle: 'Desktop word prediction overlay',
    tech: ['Python', 'Windows', 'Assistive software', 'Codex'],
    collaborators: [],
    descriptionShort: 'A lightweight desktop overlay that suggests word completions as you type, with local learning and F1–F10 shortcuts.',
    descriptionLong:
      'Speedy Writer is a free, open-source desktop overlay for Windows that provides real-time word completion suggestions as you type — anywhere on your system. It shows up to 10 predictions for the current prefix, accepts them instantly via F1–F10 shortcuts, and learns from your usage over time without ever sending data to the cloud. The interface is fully customizable (colors, font, transparency) and ships with both English and Swedish wordlists, with support for custom wordlists via plain text files. This project is heavily inspired by Eurovocs Skippy',
    image: speedyWriterImg,
    imagePosition: 'left top',
    links: {
      site: 'https://sebastianhallman.github.io/word_predictor/',
      repo: 'https://github.com/sebastianhallman/word_predictor',
    },
  },
  {
    id: '3d-chess',
    title: '3D Chess',
    subtitle: 'Real-time 3D chess with Lichess integration',
    tech: ['React', 'Three.js', 'Vite', 'Lichess API', 'Codex'],
    collaborators: [],
    descriptionShort: 'A 3D chess client with live games, puzzles, and smooth piece animations.',
    descriptionLong:
      'A 3D chess experience built with Three.js and React. It connects to Lichess for OAuth, live games, and puzzle mode, while handling move validation, animations, and a full game HUD. The focus was on responsive controls, clear game state feedback, and a polished 3D board presentation.',
    image: chess3dImg,
    imagePosition: 'center 55%',
    imageScale: 1.1,
    links: {
      demo: 'https://3dchess.d1sabl3d.com',
      repo: '',
      article: '',
    },
  },
  {
    id: 'gnome-hunt',
    title: 'Gnome Hunt',
    subtitle: 'A multi-platform hide and seek game',
    tech: ['Unity', 'Meta Quest 2', 'Blender'],
    collaborators: ['Mille Kage', 'Emil Wahrme', 'Lucas Kerslow', 'Lucas Akesson'],
    descriptionShort: 'A multi-platform hide and seek game',
    descriptionLong:
      'Gnome Hunt is a social hide-and-seek experience built in Unity. One player searches in VR while others collaborate on a shared screen to hide and misdirect. We focused on intuitive interactions, readable feedback loops, and cozy vibes.',
    dates: { start: '2024-09-05', end: '2024-11-04' },
    image: gnomeHuntImg,
    links: {
      demo: '',
      repo: '',
      article: '',
      site: 'https://sites.google.com/view/gnomehunt',
    },
  },
  {
    id: 'winter-window',
    title: 'Winter Window',
    subtitle: 'Enjoy the fun with snow without the cold',
    tech: ['Godot Engine', 'HTC Vive', 'Intel Realsense'],
    collaborators: ['Jessica Gorwat', 'Anton Lilja', 'Isak Larsson', 'Morris Hansing'],
    descriptionShort: 'An interactive XR installation that brings winter indoors.',
    descriptionLong:
      'Winter Window is an immersive installation built with Godot. Using HTC Vive for interaction and Intel RealSense for depth sensing, one player can play with virtual snow while spectators can look into the virtual world with a camera.',
    dates: { start: '2024-11-12', end: '2024-12-13' },
    image: winterWindowImg,
    links: {
      demo: '',
      repo: '',
      article: '',
      site: 'https://sites.google.com/view/winterwindow/home',
    },
  },
  {
    id: 'voxel-terrain',
    title: 'Voxel terrain generator',
    subtitle: 'A minecraft-like terrain generator',
    tech: ['Unity', 'Algorithms'],
    collaborators: [],
    descriptionShort: 'Procedural voxel terrain with noise-based generation.',
    descriptionLong:
      'Being a gamer at heart and a ton of hours spent in Minecraft, I wanted to create my own voxel terrain generator from scratch in Unity. The project features procedural terrain generation using Perlin noise and a chunk based system for generating new areas on command. The focus of the project was on world generation, so performance optimizations has not been implemented.',
    dates: { start: '2023-04-24', end: '2023-05-18' },
    image: voxelImg,
    links: {
      demo: '',
      repo: '',
      article: '',
    },
  },
  {
    id: 'guesswhat-imdb',
    title: 'GuessWhat: IMDB rating quiz game',
    subtitle: 'Can you guess which movie ranks higher?',
    tech: ['HTML', 'JavaScript', 'Vue', 'APIs', 'Firebase'],
    collaborators: ['Saqib Ahmed', 'David Hurtig', 'Petter Lager'],
    descriptionShort: 'A web quiz that challenges players to pick the higher IMDB rating.',
    descriptionLong:
      'GuessWhat is a Vue-based quiz that fetches movie metadata via public APIs and tracks sessions and leaderboards with Firebase. Emphasis on quick rounds, responsive UI, and fair tie-breaking logic for close ratings.',
    dates: { start: '', end: '' },
    image: guessWhatImg,
    links: {
      demo: '',
      repo: '',
      article: '',
    },
  },
]
