import createLucideIcon from '../createLucideIcon';

/**
 * @component @name SquareSplitVertical
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA4VjVjMC0xIDEtMiAyLTJoMTBjMSAwIDIgMSAyIDJ2MyIgLz4KICA8cGF0aCBkPSJNMTkgMTZ2M2MwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMnYtMyIgLz4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iMTIiIHkyPSIxMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/square-split-vertical
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SquareSplitVertical = createLucideIcon('SquareSplitVertical', [
  ['path', { d: 'M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3', key: '1pi83i' }],
  ['path', { d: 'M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3', key: 'ido5k7' }],
  ['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
]);

export default SquareSplitVertical;
