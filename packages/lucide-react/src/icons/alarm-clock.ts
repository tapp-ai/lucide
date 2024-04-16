import createLucideIcon from '../createLucideIcon';

/**
 * @component @name AlarmClock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEzIiByPSI4IiAvPgogIDxwYXRoIGQ9Ik0xMiA5djRsMiAyIiAvPgogIDxwYXRoIGQ9Ik01IDMgMiA2IiAvPgogIDxwYXRoIGQ9Im0yMiA2LTMtMyIgLz4KICA8cGF0aCBkPSJNNi4zOCAxOC43IDQgMjEiIC8+CiAgPHBhdGggZD0iTTE3LjY0IDE4LjY3IDIwIDIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/alarm-clock
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const AlarmClock = createLucideIcon('AlarmClock', [
  ['circle', { cx: '12', cy: '13', r: '8', key: '3y4lt7' }],
  ['path', { d: 'M12 9v4l2 2', key: '1c63tq' }],
  ['path', { d: 'M5 3 2 6', key: '18tl5t' }],
  ['path', { d: 'm22 6-3-3', key: '1opdir' }],
  ['path', { d: 'M6.38 18.7 4 21', key: '17xu3x' }],
  ['path', { d: 'M17.64 18.67 20 21', key: 'kv2oe2' }],
]);

export default AlarmClock;
