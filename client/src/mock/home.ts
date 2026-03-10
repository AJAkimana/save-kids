export type NavLink = {
  label: string
  href: string
}

export type PostCard = {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
}

export type Destination = {
  id: string
  name: string
  image: string
}

export type CategorySpotlight = {
  id: string
  title: string
  description: string
  image: string
  meta: string
}

export type CategoryTab = {
  id: string
  label: string
}

export type CategoryFeature = {
  title: string
  description: string
  image: string
  meta: string
  cta: string
}

export type CategoryItem = {
  id: string
  title: string
  image: string
  date: string
  description?: string
}

export const navigation: NavLink[] = [
  { label: 'Education', href: '#' },
  { label: 'Health', href: '#' },
  { label: 'Nutrition', href: '#' },
  { label: 'Safe Play', href: '#' },
  { label: 'Community', href: '#' },
]

export const hero = {
  kicker: 'Every child deserves a strong start',
  title: 'Practical ways to improve children life in every community',
  subtitle: 'Education, health, and safe spaces that help kids grow with confidence',
  primaryCta: 'Explore impact stories',
  secondaryCta: 'See the latest updates',
  image:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
}

export const posts: PostCard[] = [
  {
    id: 'post-1',
    title: 'After-school tutoring that lifts reading levels in 12 weeks',
    excerpt:
      'Volunteer mentors and small-group sessions help children catch up in reading and build a love for books.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    author: 'Amina Okoro',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    id: 'post-2',
    title: 'Healthy breakfast clubs that improve focus and attendance',
    excerpt:
      'A simple morning meal keeps kids energized and ready to learn, while families save on food costs.',
    image:
      'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80',
    author: 'Miguel Santos',
    date: 'Jun 26, 2026',
    readTime: '4 min read',
    category: 'Nutrition',
  },
  {
    id: 'post-3',
    title: 'Mobile clinics bring checkups closer to remote families',
    excerpt:
      'Regular screenings and vaccinations reduce preventable illness and keep children in school.',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    author: 'Leila Hassan',
    date: 'Jun 24, 2026',
    readTime: '6 min read',
    category: 'Health',
  },
  {
    id: 'post-4',
    title: 'Safe play zones that help kids grow social skills',
    excerpt:
      'Community-built playgrounds create safe places for play, teamwork, and emotional growth.',
    image:
      'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=1200&q=80',
    author: 'Nia Carter',
    date: 'Jun 21, 2026',
    readTime: '5 min read',
    category: 'Safe Play',
  },
  {
    id: 'post-5',
    title: 'Life skills clubs that teach confidence and leadership',
    excerpt:
      'Kids learn to set goals, work in teams, and speak up for themselves through weekly workshops.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    author: 'Samir Patel',
    date: 'Jun 18, 2026',
    readTime: '7 min read',
    category: 'Community',
  },
  {
    id: 'post-6',
    title: 'Libraries on wheels bring books to every neighborhood',
    excerpt:
      'Pop-up libraries and reading corners make learning materials available to children who need them most.',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    author: 'Hannah Lee',
    date: 'Jun 16, 2026',
    readTime: '3 min read',
    category: 'Education',
  },
]

export const featured = {
  title: 'A community blueprint for helping children grow stronger',
  subtitle:
    'Stories and practical guides that show how education, health care, and safe spaces change lives.',
  cta: 'Read the full story',
  image:
    'https://images.unsplash.com/photo-1504151932400-72d4384f04b3?auto=format&fit=crop&w=1600&q=80',
}

export const destinations: Destination[] = [
  {
    id: 'dest-1',
    name: 'Community Learning Hubs',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-2',
    name: 'Health Outreach Days',
    image:
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-3',
    name: 'Nutrition Programs',
    image:
      'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-4',
    name: 'Safe Play Zones',
    image:
      'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-5',
    name: 'Family Support Circles',
    image:
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1000&q=80',
  },
]

export const categoryTabs: CategoryTab[] = [
  { id: 'tab-1', label: 'Education' },
  { id: 'tab-2', label: 'Health' },
  { id: 'tab-3', label: 'Nutrition' },
  { id: 'tab-4', label: 'Safe Play' },
  { id: 'tab-5', label: 'Protection' },
  { id: 'tab-6', label: 'Family Support' },
]

export const categoryFeature: CategoryFeature = {
  title: 'Open a child-friendly learning space in 30 days',
  description:
    'A practical guide for communities to set up safe learning corners with books, mentors, and after-school activities.',
  image:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
  meta: '1 month ago',
  cta: 'View guide',
}

export const categoryList: CategoryItem[] = [
  {
    id: 'cat-list-1',
    title: 'How reading circles build confidence',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2026',
  },
  {
    id: 'cat-list-2',
    title: 'Healthy habits for school-age children',
    image:
      'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=600&q=80',
    date: '18 March 2026',
  },
  {
    id: 'cat-list-3',
    title: 'Why safe play matters for development',
    image:
      'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=600&q=80',
    date: '14 March 2026',
  },
  {
    id: 'cat-list-4',
    title: 'Parents groups that strengthen support networks',
    image:
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=600&q=80',
    date: '10 March 2026',
  },
]

export const categoryCards: CategoryItem[] = [
  {
    id: 'cat-card-1',
    title: 'Build a safe route-to-school program',
    image:
      'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=600&q=80',
    date: '9 March 2026',
    description:
      'Organize walking groups, crossing guards, and awareness campaigns to keep children safe on the way to class.',
  },
  {
    id: 'cat-card-2',
    title: 'Nutrition boxes that support growing minds',
    image:
      'https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=600&q=80',
    date: '5 March 2026',
    description:
      'Weekly food packs with local produce help families maintain balanced meals for children.',
  },
  {
    id: 'cat-card-3',
    title: 'Training youth mentors who inspire younger kids',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80',
    date: '1 March 2026',
    description:
      'Peer mentorship creates role models and keeps students engaged in school and community programs.',
  },
]

export const footer = {
  note: 'Designed & Developed for Child Thrive Initiative',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}
