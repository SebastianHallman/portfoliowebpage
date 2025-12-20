import gnomeHuntImg from '../assets/gnomehunt.jpg'
import winterWindowImg from '../assets/winterwindow.png'
import voxelImg from '../assets/voxel.png'
import guessWhatImg from '../assets/guesswhat.png'

export const projectsData = [
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

