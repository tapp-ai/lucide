import createLucideIcon from '../createLucideIcon';

/**
 * @component @name AirVent
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAxMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2NWEyIDIgMCAwIDEtMiAyaC0yIiAvPgogIDxwYXRoIGQ9Ik02IDhoMTIiIC8+CiAgPHBhdGggZD0iTTE4LjMgMTcuN2EyLjUgMi41IDAgMCAxLTMuMTYgMy44MyAyLjUzIDIuNTMgMCAwIDEtMS4xNC0yVjEyIiAvPgogIDxwYXRoIGQ9Ik02LjYgMTUuNkEyIDIgMCAxIDAgMTAgMTd2LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/air-vent
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const AirVent = createLucideIcon('AirVent', [
  [
    'path',
    {
      d: 'M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
      key: 'larmp2',
    },
  ],
  ['path', { d: 'M6 8h12', key: '6g4wlu' }],
  ['path', { d: 'M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12', key: '1bo8pg' }],
  ['path', { d: 'M6.6 15.6A2 2 0 1 0 10 17v-5', key: 't9h90c' }],
]);

export default AirVent;
