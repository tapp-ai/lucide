import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Dice4
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNMTYgOGguMDEiIC8+CiAgPHBhdGggZD0iTTggOGguMDEiIC8+CiAgPHBhdGggZD0iTTggMTZoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xNiAxNmguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/dice-4
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Dice4 = createLucideIcon('Dice4', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', ry: '2', key: '1m3agn' }],
  ['path', { d: 'M16 8h.01', key: 'cr5u4v' }],
  ['path', { d: 'M8 8h.01', key: '1e4136' }],
  ['path', { d: 'M8 16h.01', key: '18s6g9' }],
  ['path', { d: 'M16 16h.01', key: '1f9h7w' }],
]);

export default Dice4;
