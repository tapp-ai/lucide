import createLucideIcon from '../createLucideIcon';

/**
 * @component @name SeparatorVertical
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjMiIHkyPSIyMSIgLz4KICA8cG9seWxpbmUgcG9pbnRzPSI4IDggNCAxMiA4IDE2IiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjE2IDE2IDIwIDEyIDE2IDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/separator-vertical
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SeparatorVertical = createLucideIcon('SeparatorVertical', [
  ['line', { x1: '12', x2: '12', y1: '3', y2: '21', key: '1efggb' }],
  ['polyline', { points: '8 8 4 12 8 16', key: 'bnfmv4' }],
  ['polyline', { points: '16 16 20 12 16 8', key: 'u90052' }],
]);

export default SeparatorVertical;
