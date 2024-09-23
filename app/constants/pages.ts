export interface Page {
  id: number,
  label: string;
  route: string;
}

export const pages: Page[] = [
  { id: 1, label: 'Home', route: '/' },
  { id: 2, label: 'The Wedding', route: '/wedding' },
  { id: 3, label: 'RSVP', route: '/rsvp' },
  { id: 4, label: 'FAQ', route: '/faq' },
  { id: 5, label: 'Gallery', route: '/gallery' }
];