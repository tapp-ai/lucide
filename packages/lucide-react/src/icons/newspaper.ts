import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Newspaper
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAyMmgxNmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAxLTIgMlptMCAwYTIgMiAwIDAgMS0yLTJ2LTljMC0xLjEuOS0yIDItMmgyIiAvPgogIDxwYXRoIGQ9Ik0xOCAxNGgtOCIgLz4KICA8cGF0aCBkPSJNMTUgMThoLTUiIC8+CiAgPHBhdGggZD0iTTEwIDZoOHY0aC04VjZaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/newspaper
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Newspaper = createLucideIcon('Newspaper', [
  [
    'path',
    {
      d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2',
      key: '7pis2x',
    },
  ],
  ['path', { d: 'M18 14h-8', key: 'sponae' }],
  ['path', { d: 'M15 18h-5', key: '95g1m2' }],
  ['path', { d: 'M10 6h8v4h-8V6Z', key: 'smlsk5' }],
]);

export default Newspaper;
