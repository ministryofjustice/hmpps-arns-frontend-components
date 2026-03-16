import { NavSection } from '../utils/navHelper'

const rawNavSections: NavSection[] = [
  {
    heading: { text: 'Overview' },
    items: [
      {
        text: 'Introduction',
        href: '/',
      },
    ],
  },
  {
    heading: { text: 'Library components' },
    items: [
      {
        text: 'Predictor badge',
        href: '/predictor-badge',
      },
      {
        text: 'Expanded predictor badge',
        href: '/expanded-predictor-badge',
      },
      {
        text: 'Predictor scale',
        href: '/predictor-scale',
      },
      {
        text: 'Predictor timeline',
        href: '/predictor-timeline',
      },
    ],
  },
  {
    heading: { text: 'Snippet components' },
    items: [
      {
        text: 'MAPPA widget',
        href: '/mappa-widget',
      },
      {
        text: 'Risk flag widget',
        href: '/risk-flag-widget',
      },
      {
        text: 'ROSH widget',
        href: '/rosh-widget',
      },
    ],
  },
]

export default rawNavSections
