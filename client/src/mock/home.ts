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
  {
    id: 'dest-5',
    name: 'Andes Road',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80',
  },
]

export const categoryTabs: CategoryTab[] = [
  { id: 'tab-1', label: 'Category name' },
  { id: 'tab-2', label: 'Category name' },
  { id: 'tab-3', label: 'Category name' },
  { id: 'tab-4', label: 'Category name' },
  { id: 'tab-5', label: 'Category name' },
  { id: 'tab-6', label: 'Category name' },
]

export const categoryFeature: CategoryFeature = {
  title: 'Tick one more destination off of your bucket list in 2022',
  description:
    'Phasellus aliquet nibh id lacus pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis eleifend blandit nec quis sem.',
  image:
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  meta: '1 Month Ago',
  cta: 'View Post',
}

export const categoryList: CategoryItem[] = [
  {
    id: 'cat-list-1',
    title: 'Akame Ga Kill: Season finale',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
  },
  {
    id: 'cat-list-2',
    title: 'Naruto Uzumaki: Hidden Village',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
  },
  {
    id: 'cat-list-3',
    title: 'Love juice Season Premiere',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
  },
  {
    id: 'cat-list-4',
    title: 'Love juice Season Premiere',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
  },
]

export const categoryCards: CategoryItem[] = [
  {
    id: 'cat-card-1',
    title: 'Tick one more destination off of your bucket list in 2022',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
    description:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
  },
  {
    id: 'cat-card-2',
    title: 'Tick one more destination off of your bucket list in 2022',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
    description:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
  },
  {
    id: 'cat-card-3',
    title: 'Tick one more destination off of your bucket list in 2022',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
    date: '21 March 2021',
    description:
      'Tick one more destination off of your bucket list with one of our most popular vacations in 2022',
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
