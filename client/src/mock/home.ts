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
  details: PostDetailsContent
}

export type PostDetailsContent = {
  heroSubtitle: string
  overview: {
    title: string
    bodyHtml: string
  }
  lead: string
  introHtml: string
  quote: {
    text: string
    author: string
  }
  sectionOne: {
    title: string
    bodyHtml: string
  }
  gallery: Array<{
    image: string
    alt: string
  }>
  sectionTwo: {
    title: string
    bodyHtml: string
    highlights: string[]
  }
  tags: string[]
  toc: string[]
  tocTitle: string
  social: Array<{
    label: string
    href?: string
  }>
  socialTitle: string
  newsletter: {
    title: string
    description: string
    placeholder: string
    buttonLabel: string
  }
  author: {
    name: string
    role: string
    bio: string
  }
  authorTitle: string
  latestHeading: string
  richContentHtml: string
  related: {
    title: string
    subtitle: string
  }
  relatedCtaLabel: string
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

const baseDetails: PostDetailsContent = {
  heroSubtitle: 'Real-world strategies that help children learn, stay healthy, and grow with support.',
  overview: {
    title: 'Article overview',
    bodyHtml:
      '<p>This story highlights practical steps communities can take to create safer, healthier, and more empowering experiences for children.</p>',
  },
  lead:
    'The most effective child-focused programs feel caring, not complicated. The goal is to remove barriers so children can learn, play, and feel secure.',
  introHtml:
    '<p>Start with small, dependable routines that build trust and momentum.</p><p>Begin with what families need most: safe spaces, basic health support, and a reliable place to learn.</p>',
  quote: {
    text: '"When children feel safe and seen, they are ready to grow."',
    author: 'Grace Njeri, program director',
  },
  sectionOne: {
    title: 'Start with safety and trust',
    bodyHtml:
      '<p>Consistent check-ins with caregivers and teachers make programs sustainable.</p><p>Small, predictable routines help children feel secure and ready to learn.</p>',
  },
  gallery: [
    {
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      alt: 'Students learning together',
    },
    {
      image:
        'https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=1000&q=80',
      alt: 'Kids playing outside',
    },
  ],
  sectionTwo: {
    title: 'Build a low-barrier pathway',
    bodyHtml:
      '<p>Keep support services close to where children live and learn. Combine tutoring, health checkups, and nutrition in one predictable weekly rhythm.</p>',
    highlights: [
      'Start with listening sessions for families and teachers.',
      'Prioritize safety, lighting, and accessibility for every child.',
      'Track small wins like attendance, confidence, and reading levels.',
    ],
  },
  tags: ['Education', 'Health', 'Nutrition', 'Community'],
  toc: ['Map the local needs', 'Build safe learning spaces', 'Strengthen family support', 'Measure child growth'],
  tocTitle: 'Table of contents',
  social: [
    { label: 'Instagram' },
    { label: 'Pinterest' },
    { label: 'Twitter' },
    { label: 'Facebook' },
    { label: 'YouTube' },
  ],
  socialTitle: 'Follow us',
  newsletter: {
    title: 'Newsletter',
    description: 'Get weekly stories, tools, and ways to support children.',
    placeholder: 'Enter your email',
    buttonLabel: 'Subscribe',
  },
  author: {
    name: 'Grace Njeri',
    role: 'Program director',
    bio: 'Focused on child wellbeing, education, and community care.',
  },
  authorTitle: 'About the author',
  latestHeading: 'The latest',
  richContentHtml:
    '<h3>Measure progress with care</h3><p>Track attendance, reading levels, and small confidence gains so families can see the impact. Share progress openly to strengthen trust.</p><ul><li>Create a simple monthly scorecard.</li><li>Celebrate quick wins and course-correct early.</li><li>Invite caregivers into review sessions.</li></ul>',
  related: {
    title: 'You may also like',
    subtitle: 'More stories about education, health, and safe spaces for children.',
  },
  relatedCtaLabel: 'View Post',
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'Volunteer mentors and small-group sessions help children catch up in reading and build a love for books.',
    },
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'A simple morning meal keeps kids energized and ready to learn, while families save on food costs.',
    },
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'Regular screenings and vaccinations reduce preventable illness and keep children in school.',
    },
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'Community-built playgrounds create safe places for play, teamwork, and emotional growth.',
    },
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'Kids learn to set goals, work in teams, and speak up for themselves through weekly workshops.',
    },
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
    details: {
      ...baseDetails,
      heroSubtitle:
        'Pop-up libraries and reading corners make learning materials available to children who need them most.',
    },
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
