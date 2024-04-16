import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Ribbon
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcuNzUgOS4wMWMtLjUyIDIuMDgtMS44MyAzLjY0LTMuMTggNS40OWwtMi42IDMuNTQtMi45NyA0LTMuNS0yLjU0IDMuODUtNC45N2MtMS44Ni0yLjYxLTIuOC0zLjc3LTMuMTYtNS40NCIgLz4KICA8cGF0aCBkPSJNMTcuNzUgOS4wMUE3IDcgMCAwIDAgNi4yIDkuMUM2LjA2IDguNSA2IDcuODIgNiA3YzAtMy41IDIuODMtNSA1Ljk4LTVDMTUuMjQgMiAxOCAzLjUgMTggN2MwIC43My0uMDkgMS40LS4yNSAyLjAxWiIgLz4KICA8cGF0aCBkPSJtOS4zNSAxNC41MyAyLjY0LTMuMzEiIC8+CiAgPHBhdGggZD0ibTExLjk3IDE4LjA0IDIuOTkgNCAzLjU0LTIuNTQtMy45My01IiAvPgogIDxwYXRoIGQ9Ik0xNCA4YzAgMS0xIDItMi4wMSAzLjIyQzExIDEwIDEwIDkgMTAgOGEyIDIgMCAxIDEgNCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ribbon
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Ribbon = createLucideIcon('Ribbon', [
  [
    'path',
    {
      d: 'M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44',
      key: '1njedg',
    },
  ],
  [
    'path',
    {
      d: 'M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z',
      key: '10len7',
    },
  ],
  ['path', { d: 'm9.35 14.53 2.64-3.31', key: '1wfi09' }],
  ['path', { d: 'm11.97 18.04 2.99 4 3.54-2.54-3.93-5', key: '1ezyge' }],
  ['path', { d: 'M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0', key: 'aw0zq5' }],
]);

export default Ribbon;
