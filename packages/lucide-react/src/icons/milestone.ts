import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Milestone
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNkg1YTIgMiAwIDAgMC0yIDJ2M2EyIDIgMCAwIDAgMiAyaDEzbDQtMy41TDE4IDZaIiAvPgogIDxwYXRoIGQ9Ik0xMiAxM3Y4IiAvPgogIDxwYXRoIGQ9Ik0xMiAzdjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/milestone
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Milestone = createLucideIcon('Milestone', [
  ['path', { d: 'M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z', key: '1mp5s7' }],
  ['path', { d: 'M12 13v8', key: '1l5pq0' }],
  ['path', { d: 'M12 3v3', key: '1n5kay' }],
]);

export default Milestone;
