import createLucideIcon from '../createLucideIcon';

/**
 * @component @name Printer
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSI2IDkgNiAyIDE4IDIgMTggOSIgLz4KICA8cGF0aCBkPSJNNiAxOEg0YTIgMiAwIDAgMS0yLTJ2LTVhMiAyIDAgMCAxIDItMmgxNmEyIDIgMCAwIDEgMiAydjVhMiAyIDAgMCAxLTIgMmgtMiIgLz4KICA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iOCIgeD0iNiIgeT0iMTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/printer
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Printer = createLucideIcon('Printer', [
  ['polyline', { points: '6 9 6 2 18 2 18 9', key: '1306q4' }],
  [
    'path',
    {
      d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
      key: '143wyd',
    },
  ],
  ['rect', { width: '12', height: '8', x: '6', y: '14', key: '5ipwut' }],
]);

export default Printer;
