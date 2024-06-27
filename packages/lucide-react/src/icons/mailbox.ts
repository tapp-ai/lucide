import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Mailbox
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWOS41QzIgNyA0IDUgNi41IDVIMThjMi4yIDAgNCAxLjggNCA0eiIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSIxNSw5IDE4LDkgMTgsMTEiIC8+CiAgPHBhdGggZD0iTTYuNSA1QzkgNSAxMSA3IDExIDkuNVYxN2EyIDIgMCAwIDEtMiAyIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNyIgeTE9IjEwIiB5Mj0iMTAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/mailbox
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Mailbox = createLucideIcon('Mailbox', [
  [
    'path',
    {
      d: 'M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4z',
      key: '15eup0',
    },
  ],
  ['polyline', { points: '15,9 18,9 18,11', key: '1pm9c0' }],
  ['path', { d: 'M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2', key: '15i455' }],
  ['line', { x1: '6', x2: '7', y1: '10', y2: '10', key: '1e2scm' }],
]);

export default Mailbox;
