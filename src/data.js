import carelineImage from './assets/projects/careline.svg'
import cosmeticsImage from './assets/projects/cosmetics.svg'
import dreamLookImage from './assets/projects/dream-look.svg'
import portfolioImage from './assets/projects/portfolio.svg'

// Edit your details here. Use null for links you don't have yet.
export const PROFILE = {
  name: 'Sheila Chepkorir',
  email: 'shaylovine12@gmail.com',
  phone: '0791 801 822',
  phoneHref: '+254791801822',
  github: 'https://github.com/shay205',
  linkedin: null, // e.g. 'https://www.linkedin.com/in/your-username'
}

export const PHRASES = ['Web Developer', 'AI Enthusiast', 'Problem Solver', 'Exploring Cybersecurity']

export const NAV = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Education', 'education'], ['Contact', 'contact'],
]

export const SKILLS = [
  { name: 'Python', type: 'Language' },
  { name: 'Java', type: 'Language' },
  { name: 'JavaScript', type: 'Language' },
  { name: 'C++', type: 'Language' },
  { name: 'HTML', type: 'Frontend' },
  { name: 'CSS', type: 'Frontend' },
  { name: 'React', type: 'Frontend' },
  { name: 'Django', type: 'Backend' },
  { name: 'MySQL', type: 'Database' },
  { name: 'Git and GitHub', type: 'Tools' },
]

export const PROJECTS = [
  {
    name: 'Careline Hospital Management System',
    desc: 'A system for managing patients, doctors and appointments in one place.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: carelineImage,
    imageAlt: 'Illustration of a hospital management dashboard with patient and appointment details.',
    github: 'https://github.com/shay205/Hospital-management',
  },
  {
    name: 'Cosmetics and Beauty E-commerce Website',
    desc: 'An online shop for cosmetics with a product catalogue and a layout that works on any screen.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: cosmeticsImage,
    imageAlt: 'Illustration of a cosmetics storefront with skincare products and a product catalogue.',
    github: null,
  },
  {
    name: 'Dream Look Game',
    desc: 'Project description to be added.',
    tech: ['Technologies to be added'],
    image: dreamLookImage,
    imageAlt: 'Illustration of a fashion dress-up game with outfit choices and a styled character.',
    github: 'https://github.com/shay205/dream-look-game',
  },
  {
    name: 'Personal Portfolio Website',
    desc: 'This portfolio, built to present my projects, skills and contact details.',
    tech: ['React', 'Vite', 'CSS'],
    image: portfolioImage,
    imageAlt: 'Illustration of a developer portfolio page with a profile introduction and project cards.',
    github: null,
  },
]
