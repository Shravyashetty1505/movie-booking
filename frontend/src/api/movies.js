// Simple mock data so frontend works standalone.
// Replace or extend with backend API calls later.
const movies = [
  {
    id: '1',
    title:  "Ek Deewane ki Dewaniyat",
    duration: '2h 10m',
    rating: "⭐⭐⭐⭐⭐",
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/dkd.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 180
  },
  {
    id: '2',
    title: "kantara",
    duration: '1h 50m',
    rating: "⭐⭐⭐⭐⭐",
    synopsis: 'A warm romantic comedy set in the heart of the city.',
    poster: '/assets/posters/kantara.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['12:00', '15:00', '20:00'] }
    ],
    price: 150
  },
  {
    id: '3',
    title: "Sunny Sanskari ki Tulsi Kumari",
    duration: '1h 50m',
    rating: "⭐⭐⭐",
    synopsis: 'A warm romantic comedy set in the heart of the city.',
    poster: '/assets/posters/ssktk.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['12:00', '15:00', '20:00'] }
    ],
    price: 200
  },
  {
    id: '4',
    title: "Thamma",
    duration: '1h 50m',
    rating: "⭐⭐⭐⭐",
    synopsis: 'A warm romantic comedy set in the heart of the city.',
    poster: '/assets/posters/thamma.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['12:00', '15:00', '20:00'] }
    ],
    price: 250
  },
  {
    id: '5',
    title:  "Gosthi",
    duration: '1h 50m',
    rating: "⭐⭐",
    synopsis: 'A warm romantic comedy set in the heart of the city.',
    poster: '/assets/posters/gosthi.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['12:00', '15:00', '20:00'] }
    ],
    price: 100
  },
    {
    id: '6',
    title:  "Housefull 5",
    duration: '2h 10m',
    rating: "⭐⭐⭐⭐⭐",
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/houseful.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 150
  },
    {
    id: '7',
    title:  "Dilwale Dulhaniya Le Jayenge",
    duration: '2h 10m',
    rating: "⭐⭐⭐⭐⭐",
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/ddlj.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 200
  },
    {
    id: '8',
    title:  "Jolly LLB 3",
    duration: '2h 10m',
    rating: 'U/A',
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/jolly.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 150
  },
    {
    id: '9',
    title:  "Shinchain movie ",
    duration: '2h 10m',
    rating:"⭐⭐⭐⭐⭐",
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/shinchan.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 180
  },
    {
    id: '10',
    title:  "Saiyaara",
    duration: '2h 10m',
    rating:"⭐⭐⭐⭐⭐",
    synopsis: 'A high-energy adventure of friends on an impossible heist.',
    poster: '/assets/posters/saiyara.avif',
    screens: [
      { id: 's1', name: 'Screen 1', times: ['10:00', '13:00', '16:00'] },
      { id: 's2', name: 'Screen 2', times: ['11:30', '14:30', '18:00'] }
    ],
    price: 180
  },
];

export function getAllMovies() {
  // In real app you'd use axios.get('/api/movies')
  return Promise.resolve(movies);
}

export function getMovieById(id) {
  const m = movies.find(x => x.id === id);
  return Promise.resolve(m);
}
