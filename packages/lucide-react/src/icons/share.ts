import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Share
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMnYtOCIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxNiA2IDEyIDIgOCA2IiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMiIgeTI9IjE1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/share
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Share = createLucideIcon('Share', [
  ['path', { d: 'M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8', key: '1b2hhj' }],
  ['polyline', { points: '16 6 12 2 8 6', key: 'm901s6' }],
  ['line', { x1: '12', x2: '12', y1: '2', y2: '15', key: '1p0rca' }],
]);

export default Share;
