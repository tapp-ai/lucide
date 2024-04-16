import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Lasso
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyAyMmE1IDUgMCAwIDEtMi00IiAvPgogIDxwYXRoIGQ9Ik0zLjMgMTRBNi44IDYuOCAwIDAgMSAyIDEwYzAtNC40IDQuNS04IDEwLThzMTAgMy42IDEwIDgtNC41IDgtMTAgOGExMiAxMiAwIDAgMS01LTEiIC8+CiAgPHBhdGggZD0iTTUgMThhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/lasso
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Lasso = createLucideIcon('Lasso', [
  ['path', { d: 'M7 22a5 5 0 0 1-2-4', key: 'umushi' }],
  [
    'path',
    {
      d: 'M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1',
      key: '146dds',
    },
  ],
  ['path', { d: 'M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', key: 'bq3ynw' }],
]);

export default Lasso;
