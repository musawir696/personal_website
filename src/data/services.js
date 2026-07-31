import fullstackImg from '../assets/service_fullstack.jpg'
import productImg from '../assets/service_product.jpg'
import teamImg from '../assets/service_team.jpg'

export const services = [
  {
    title: 'Full-Stack Web Apps',
    text: 'End-to-end web applications with React/Next.js frontends, Node.js APIs, and production-ready databases. From architecture to deployment — I own the whole stack.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    image: fullstackImg,
  },
  {
    title: 'Landing Pages & SaaS Sites',
    text: 'High-converting landing pages and SaaS marketing sites built to attract users and grow revenue. Fast, SEO-optimised, responsive, and designed to build trust.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO', 'Responsive', 'Performance'],
    image: productImg,
  },
  {
    title: 'Freelance & Contract Work',
    text: 'Available for freelance projects, short-term contracts, and part-time team collaborations. Clear communication, milestone-based delivery, and post-launch support.',
    tags: ['Freelance', 'Remote', 'Agile', 'Full-Stack', 'Contracts'],
    image: teamImg,
  },
]
