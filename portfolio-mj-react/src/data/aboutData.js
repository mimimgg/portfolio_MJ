// aboutData.js

export const aboutCards = [
  {
    id: 1,
    type: 'design',
    title: 'design',
    figureClass: 'design-figure',
    label: [
      '포토샵과 일러스트레이터로',
      '시각적인 요소를 제작하며,',
      '피그마로 UI/UX를 설계하고',
      '사용자 경험을 최적화합니다.',
      '다양한 디자인 작업이 가능합니다.',
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="design-figure"
      >
        <g clipPath="url(#a)">
          <path
            fill="#ff7237"
            d="M15.2 20.8v-1.075l.76.76a3.2 3.2 0 1 0 4.525-4.525l-.76-.76H20.8a3.2 3.2 0 0 0 0-6.4h-1.075l.76-.76a3.2 3.2 0 1 0-4.525-4.525l-.76.76V3.2a3.2 3.2 0 0 0-6.4 0v1.075l-.76-.76A3.2 3.2 0 1 0 3.515 8.04l.76.76H3.2a3.2 3.2 0 0 0 0 6.4h1.075l-.76.76a3.2 3.2 0 0 0 4.525 4.525l.76-.76V20.8a3.2 3.2 0 0 0 6.4 0"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    id: 2,
    type: 'frontend',
    title: 'frontend',
    figureClass: 'front-figure',
    label: [
      'HTML / CSS / JS를 기반으로',
      '컴포넌트 단위 개발이 가능하며,',
      'Vue, React 프레임워크를 활용한',
      'Single Page Application 개발과',
      '인터랙티브 웹 구현이 가능합니다.',
    ],
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="front-figure"
      >
        <g clipPath="url(#clip-star)">
          <g transform="translate(12,12) scale(3)">
            <rect x="-1" y="-4" width="2" height="8" fill="#b13bff" />
            <rect x="-1" y="-4" width="2" height="8" fill="#b13bff" transform="rotate(45)" />
            <rect x="-1" y="-4" width="2" height="8" fill="#b13bff" transform="rotate(90)" />
            <rect x="-1" y="-4" width="2" height="8" fill="#b13bff" transform="rotate(135)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip-star">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];