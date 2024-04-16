import createLucideIcon from '../createLucideIcon';

/**
 * @component @name BellRing
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiA4YTYgNiAwIDAgMSAxMiAwYzAgNyAzIDkgMyA5SDNzMy0yIDMtOSIgLz4KICA8cGF0aCBkPSJNMTAuMyAyMWExLjk0IDEuOTQgMCAwIDAgMy40IDAiIC8+CiAgPHBhdGggZD0iTTQgMkMyLjggMy43IDIgNS43IDIgOCIgLz4KICA8cGF0aCBkPSJNMjIgOGMwLTIuMy0uOC00LjMtMi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bell-ring
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const BellRing = createLucideIcon('BellRing', [
  ['path', { d: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9', key: '1qo2s2' }],
  ['path', { d: 'M10.3 21a1.94 1.94 0 0 0 3.4 0', key: 'qgo35s' }],
  ['path', { d: 'M4 2C2.8 3.7 2 5.7 2 8', key: 'tap9e0' }],
  ['path', { d: 'M22 8c0-2.3-.8-4.3-2-6', key: '5bb3ad' }],
]);

export default BellRing;
