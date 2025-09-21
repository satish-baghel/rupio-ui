interface MenuItem {
  name: string
  path: string
}
export const menuItems: MenuItem[] = [
  //   { name: 'Home', path: '/' },
  { name: 'Trending', path: '/trending' },
  { name: 'Adviser', path: '/adviser' },
  { name: 'News', path: '/news' },
  {
    name: 'Earnings',
    path: '/earnings',
  },
  { name: 'Blog', path: '/blog' },
]
