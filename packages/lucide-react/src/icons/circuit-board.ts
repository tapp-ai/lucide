import createLucideIcon from '../createLucideIcon';

/**
 * @component @name CircuitBoard
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMSA5aDRhMiAyIDAgMCAwIDItMlYzIiAvPgogIDxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik03IDIxdi00YTIgMiAwIDAgMSAyLTJoNCIgLz4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circuit-board
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const CircuitBoard = createLucideIcon('CircuitBoard', [
  ['rect', { width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }],
  ['path', { d: 'M11 9h4a2 2 0 0 0 2-2V3', key: '1ve2rv' }],
  ['circle', { cx: '9', cy: '9', r: '2', key: 'af1f0g' }],
  ['path', { d: 'M7 21v-4a2 2 0 0 1 2-2h4', key: '1fwkro' }],
  ['circle', { cx: '15', cy: '15', r: '2', key: '3i40o0' }],
]);

export default CircuitBoard;
