import careerImg from '../assets/career.png'
import dentsuitImg from '../assets/dentsuit.png'
import golfImg from '../assets/golf.png'
import streamwiseImg from '../assets/streamwise.png'
import FreelanceImg from '../assets/Freelance.png'

export const projects = [
  {
    title: 'AI Career Website',
    subtitle: 'SaaS · AI · Full-Stack',
    description:
      'A full-stack SaaS platform where job seekers generate AI-powered resumes, practise with an AI interview copilot, and manage subscriptions — built end-to-end with Next.js, Node.js, PostgreSQL, and Stripe.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: 'https://aicareer.cloud/',
    mark: 'AI',
    image: careerImg,
    visual: 'from-blue-100 to-indigo-50',
    badge: 'bg-blue-600 shadow-blue-500/25',
    detail: 'text-blue-600',
  },
  {
    title: 'TeeTimePro',
    subtitle: 'Booking Platform · Full-Stack',
    description:
      'A responsive golf booking platform where golfers discover courses, reserve tee times, and process payments — featuring role-based dashboards, a complete booking flow, and course location management.',
    tags: ['React', 'Tailwind CSS', 'React Router', 'Node.js'],
    github: 'https://github.com/musawir696/Teetimepro_website',
    demo: 'https://newteetimewesbsite.netlify.app/auth',
    mark: 'TT',
    image: golfImg,
    visual: 'from-emerald-100 to-green-50',
    badge: 'bg-green-700 shadow-green-500/25',
    detail: 'text-green-700',
  },
  {
    title: 'Multi-Service Platform',
    subtitle: 'Marketplace · Full-Stack',
    description:
      'A multi-vendor marketplace supporting e-commerce, equipment rentals, and training bookings — with role-based access control, secure authentication, integrated payments, and a scalable REST API.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT Auth'],
    github: 'https://github.com/musawir696/Freelance_project',
    demo: 'https://techservicesrent.netlify.app/',
    mark: 'MS',
    image: FreelanceImg,
    visual: 'from-orange-100 to-amber-50',
    badge: 'bg-orange-700 shadow-orange-500/25',
    detail: 'text-orange-700',
  },
  {
    title: 'DentSuite',
    subtitle: 'SaaS · Healthcare · AI',
    description:
      'A dental practice management SaaS with AI-powered patient sentiment analysis, automated appointment reminders, and a real-time revenue dashboard — built for clinic efficiency and patient retention.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Lucide'],
    github: 'https://github.com/musawir696/Dentsuit',
    demo: 'https://dentsuit.netlify.app/',
    mark: 'DS',
    image: dentsuitImg,
    visual: 'from-violet-100 to-purple-50',
    badge: 'bg-violet-600 shadow-violet-500/25',
    detail: 'text-violet-600',
  },
  {
    title: 'Streamwise Admin',
    subtitle: 'Dashboard · Admin Panel',
    description:
      'A modern admin panel for content platform moderation — featuring user management, analytics monitoring, dynamic data tables with filters, and role-based access control across the full dashboard.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/musawir696/StreamwiseAdmin',
    demo: 'https://streamwiseadmin.netlify.app/',
    mark: 'SA',
    image: streamwiseImg,
    visual: 'from-teal-100 to-cyan-50',
    badge: 'bg-teal-700 shadow-teal-500/25',
    detail: 'text-teal-700',
  },
]
