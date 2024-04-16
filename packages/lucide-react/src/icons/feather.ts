import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Feather
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuMjQgMTIuMjRhNiA2IDAgMCAwLTguNDktOC40OUw1IDEwLjVWMTloOC41eiIgLz4KICA8bGluZSB4MT0iMTYiIHgyPSIyIiB5MT0iOCIgeTI9IjIyIiAvPgogIDxsaW5lIHgxPSIxNy41IiB4Mj0iOSIgeTE9IjE1IiB5Mj0iMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/feather
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Feather = createLucideIcon('Feather', [
  ['path', { d: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z', key: 'u4sw5n' }],
  ['line', { x1: '16', x2: '2', y1: '8', y2: '22', key: '1c47m2' }],
  ['line', { x1: '17.5', x2: '9', y1: '15', y2: '15', key: '2fj3pr' }],
]);

export default Feather;
