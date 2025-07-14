// portfolioData.js

const portfolioItems = [
  {
    id: 1,
    title: 'outfront 📚',
    categories: ['web', 'ui/ux', 'react', 'spa', '피그마', '포토샵', '반응형', '기획', '팀프로젝트'],
    description: '온라인 강의 사이트 인프런 사이트를 <span class="development">REACT</span>기반으로 구현하였습니다.',
    links: [
      { label: '코드보기', url: 'https://github.com/mimimgg/FED-TEAM-outfront' },
      { label: '사이트 구조화', url: 'https://www.figma.com/design/z4rSNYjoHTPfkBYyiWGwI9/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A402?node-id=58-7&t=S5nR8an5VR5pkPF2-1' },
      { label: '구현사이트', url: 'https://mimimgg.github.io/FED-TEAM-outfront/' },
    ],
    thumbnail: './images/project01.webp',
  },
  {
    id: 2,
    title: 'tamburins 💄',
    categories: ['web', 'ui/ux', 'Vue.js', 'JavaScript', '피그마', '포토샵', '반응형', '기획', '팀프로젝트'],
    description: '기존 템버린즈 사이트의 개선점을 파악하여 <span class="development">리뉴얼사이트</span>를 제작하였습니다.',
    links: [
      { label: '코드보기', url: 'https://github.com/kimeming/FED-TEAM-6401' },
      { label: '구현사이트', url: 'https://kimeming.github.io/FED-TEAM-6401/#/' },
    ],
    thumbnail: './images/project02.webp',
  },
  {
    id: 3,
    title: 'doudoumiel 🧴',
    categories: ['web', 'cafe24', 'ui/ux', '피그마', '포토샵', '반응형', '기획', '기여도 100%'],
    description: '신규 홈페이지 개설 <span class="development">디자인 / 퍼블리싱</span> 기여도 100% 사이트입니다.',
    links: [
      { label: '디자인보기', url: 'https://www.figma.com/design/cBL5vJj8XGMZhztXDdK9oL/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A401_%EB%91%90%EB%91%90%EC%97%90%ED%94%84%EC%95%A4%EC%97%98?node-id=0-1&p=f&t=dTFXJNhkIDKWIBRN-0' },
      { label: '작업내역', url: 'https://lucky-november-ebb.notion.site/21d8ff9d67b780af8560c6b8e0be17b9' },
      { label: '구현사이트', url: 'https://www.doudoumiel.co.kr/index.html' },
    ],
    thumbnail: './images/project03.webp',
  },
  {
    id: 4,
    title: 'my business partner 🏢',
    categories: ['web', 'cafe24 builder', 'ui/ux', '피그마', '포토샵', '반응형', '기획', '기여도 100%'],
    description: '빌더 기반으로 제작된 기존 홈페이지 부분 <span class="development">리뉴얼</span> 페이지입니다.',
    links: [
      { label: '디자인보기', url: 'https://www.figma.com/design/mwmDAqVbz9aBrgAjLHlgL9/%EB%A7%88%EC%9D%B4%EB%B9%84%EC%A7%80%EB%8B%88%EC%8A%A4%ED%8C%8C%ED%8A%B8%EB%84%88_%EB%B9%84%EC%83%81%EC%A3%BC%EC%82%AC%EB%AC%B4%EC%8B%A4?node-id=0-1&t=7icKB3DpHMBolYkV-1' },
      { label: '작업내역', url: 'https://lucky-november-ebb.notion.site/Builder-21d8ff9d67b780fd870af97cda1fc069' },
      { label: '구현사이트', url: 'https://www.mbpmrj.co.kr/default/mbpmullae/companys2.php' },
    ],
    thumbnail: './images/project04.webp',
  },
  {
    id: 5,
    title: 'woncontents 🎬',
    categories: ['design', 'ui/ux', '피그마', '포토샵', '일러스트레이터', '반응형', '기획', '기여도 100%', '드라마제작사'],
    description: '드라마제작사 <span class="design">기획 / UI / UX</span> 피그마 디자인 및 인터렉션 페이지입니다.',
    links: [
      { label: '기획', url: 'https://lucky-november-ebb.notion.site/Figma-UI-21d8ff9d67b780a29a27cbea9fc17a8c' },
      { label: '프로젝트개요', url: './pdf/02_wonflow.pdf' },
      { label: '디자인보기', url: 'https://www.figma.com/design/SmVh5uRjjX4F2vz2UEoVOc/02_%EC%9B%90%EC%BD%98%ED%85%90%EC%B8%A0-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=0-1&t=IZgabr5KgrNzIJdv-1' },
    ],
    thumbnail: './images/project05.webp',
  },
  {
    id: 6,
    title: 'limitedoudou 👶',
    categories: ['design', '포토샵', '일러스트레이터', '기획', '제작', '아동복쇼핑몰'],
    description: '아동복 쇼핑몰 리미떼두두 <span class="design">디자인</span> 부분작업',
    links: [
      { label: '작업내역', url: 'https://lucky-november-ebb.notion.site/21d8ff9d67b7802082b0ceb24ea00c72' },
    ],
    thumbnail: './images/project06.webp',
  },
  {
    id: 7,
    title: 'doudoumiel 🧴',
    categories: ['design', 'ui/ux', '피그마', '포토샵', '일러스트레이터', '기획', '제작', '키즈 코스메틱 브랜드'],
    description: '프리미엄 키즈 코스메틱 브랜드 두두미엘 상품 <span class="design">상세페이지 디자인</span> 부분작업',
    links: [
      { label: '디자인보기', url: 'https://www.figma.com/design/cBL5vJj8XGMZhztXDdK9oL/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A401_%EB%91%90%EB%91%90%EC%97%90%ED%94%84%EC%95%A4%EC%97%98?node-id=3-2&t=38e8UmtU7Czhvfg9-1' },
      { label: '작업내역', url: 'https://lucky-november-ebb.notion.site/21d8ff9d67b780349820eb2a1b67eae5' },
      { label: '사이트보기', url: 'https://doudoumiel.co.kr/' },
    ],
    thumbnail: './images/project07.webp',
  },
];

export default portfolioItems;
