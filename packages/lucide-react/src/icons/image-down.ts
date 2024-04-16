import createLucideIcon from '../createLucideIcon';

/**
 * @component @name ImageDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMyAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ2MTBsLTMuMS0zLjFhMiAyIDAgMCAwLTIuODE0LjAxNEw2IDIxIiAvPgogIDxwYXRoIGQ9Im0xNCAxOSAzIDN2LTUuNSIgLz4KICA8cGF0aCBkPSJtMTcgMjIgMy0zIiAvPgogIDxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/image-down
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const ImageDown = createLucideIcon('ImageDown', [
  [
    'path',
    {
      d: 'M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21',
      key: '9csbqa',
    },
  ],
  ['path', { d: 'm14 19 3 3v-5.5', key: '9ldu5r' }],
  ['path', { d: 'm17 22 3-3', key: '1nkfve' }],
  ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
]);

export default ImageDown;
