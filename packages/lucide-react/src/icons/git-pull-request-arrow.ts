import createLucideIcon from '../createLucideIcon';

/**
 * @component @name GitPullRequestArrow
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNSA5djEyIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTgiIHI9IjMiIC8+CiAgPHBhdGggZD0ibTE1IDktMy0zIDMtMyIgLz4KICA8cGF0aCBkPSJNMTIgNmg1YTIgMiAwIDAgMSAyIDJ2NyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-pull-request-arrow
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const GitPullRequestArrow = createLucideIcon('GitPullRequestArrow', [
  ['circle', { cx: '5', cy: '6', r: '3', key: '1qnov2' }],
  ['path', { d: 'M5 9v12', key: 'ih889a' }],
  ['circle', { cx: '19', cy: '18', r: '3', key: '1qljk2' }],
  ['path', { d: 'm15 9-3-3 3-3', key: '1lwv8l' }],
  ['path', { d: 'M12 6h5a2 2 0 0 1 2 2v7', key: '1yj91y' }],
]);

export default GitPullRequestArrow;
