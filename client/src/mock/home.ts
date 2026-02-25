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

export const navigation: NavLink[] = [
  { label: 'Destinations', href: '#' },
  { label: 'Food', href: '#' },
  { label: 'Well Being', href: '#' },
  { label: 'Sport', href: '#' },
  { label: 'Lifestyle', href: '#' },
]

export const hero = {
  kicker: 'Inspiration by traveler',
  title: 'Inspiration for travel by real people',
  subtitle: 'Book smart, travel simple',
  primaryCta: 'Start planning your trip',
  secondaryCta: 'View latest posts',
  image:
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
}

export const posts: PostCard[] = [
  {
    id: 'post-1',
    title: 'Integer Maecenas Eget Viverra',
    excerpt:
      'Donec ornare orci quis neque sodales, nec pulvinar nulla finibus. Duis at lorem lorem.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    category: 'Amazon Redwiel',
  },
  {
    id: 'post-2',
    title: 'Aenean eleifend ante maecenas',
    excerpt:
      'Praesent eleifend ipsum vel risus finibus, in dapibus velit vehicula. Curabitur blandit.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 26, 2026',
    readTime: '4 min read',
    category: 'Amazon Redwiel',
  },
  {
    id: 'post-3',
    title: 'Integer Maecenas Eget Viverra',
    excerpt: 'Vivamus feugiat, magna vel egestas fermentum, sapien justo viverra est, at luctus.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 24, 2026',
    readTime: '6 min read',
    category: 'Amazon Redwiel',
  },
  {
    id: 'post-4',
    title: 'Integer Maecenas Eget Viverra',
    excerpt: 'Sed volutpat efficitur metus, in faucibus justo imperdiet in. Suspendisse potenti.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 21, 2026',
    readTime: '5 min read',
    category: 'Amazon Redwiel',
  },
  {
    id: 'post-5',
    title: 'Aenean eleifend ante maecenas',
    excerpt: 'Ut at lectus a mauris fermentum tincidunt. Etiam id nibh ut urna blandit cursus.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 18, 2026',
    readTime: '7 min read',
    category: 'Amazon Redwiel',
  },
  {
    id: 'post-6',
    title: 'Integer Maecenas Eget Viverra',
    excerpt: 'Morbi ac mi non turpis aliquet mollis. Sed suscipit neque vel nunc porta iaculis.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    author: 'Jeanne Wisk',
    date: 'Jun 16, 2026',
    readTime: '3 min read',
    category: 'Amazon Redwiel',
  },
]

export const featured = {
  title: 'Richard Norton photorealistic rendering as real photos',
  subtitle:
    'A curation of cinematic landscapes and traveler stories that feel like postcards from another world.',
  cta: 'Start planning your trip',
  image:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
}

export const destinations: Destination[] = [
  {
    id: 'dest-1',
    name: 'Dominican Republic',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-2',
    name: 'Marrakesh',
    image:
      'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-3',
    name: 'Alaskan Coast',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'dest-4',
    name: 'Iceland',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=80',
  },
]

export const categorySpotlights: CategorySpotlight[] = [
  {
    id: 'cat-1',
    title: 'Category name',
    description: 'Top destinations for your next trip.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    meta: 'New post',
  },
  {
    id: 'cat-2',
    title: 'Where to Eat',
    description: 'Must-try dishes in 2026.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    meta: 'Travel guide',
  },
  {
    id: 'cat-3',
    title: 'Range walks',
    description: 'Slow travel itineraries and trails.',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
    meta: 'Featured',
  },
]

export const footer = {
  note: 'Designed & Developed by PEBSON',
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}
