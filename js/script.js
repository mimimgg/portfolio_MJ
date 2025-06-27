document.querySelector('.logo').parentElement.addEventListener('click', function(e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelectorAll('.gnb a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ============================
// [1] 변수 선언 및 기본 설정
// ============================
const content = `Hello world^안녕하세요.^프론트앤드 개발과^디자인 작업이 가능한^개발자 이민지입니다!`;
const parts = content.split("^");
const text = document.querySelector(".typing__text");
let index = 0;
let partIndex = 0;

const marqueeText =
  "🌟 Creating seamless digital interfaces where design meets technology — building the future one pixel at a time. ";
const marqueeTrack = document.querySelector(".marquee__track");

const video = document.querySelector(".main_video");
video.playbackRate = 0.5; // 배경 영상 느리게

// 기타 작업물 관련 요소
const otherWorksSection = document.querySelector(".portfolio__etc");
const otherWorksWrap = document.querySelector(".etc__project__wrap");
const otherWorkItems = gsap.utils.toArray(".etc__content");

// ============================
// [2] 타이핑 애니메이션
// ============================
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function eraseEffect() {
  const currentText = text.textContent;
  let eraseIndex = currentText.length;
  while (eraseIndex > 0) {
    text.textContent = currentText.substring(0, eraseIndex - 1);
    eraseIndex--;
    await sleep(50);
  }
}

async function typeEffect() {
  const currentTextPart = parts[partIndex];
  if (index < currentTextPart.length) {
    text.textContent += currentTextPart[index++];
  } else {
    await sleep(1000);
    index = 0;
    partIndex++;
    if (partIndex >= parts.length) {
      await eraseEffect();
      partIndex = 0;
      await sleep(500);
    } else {
      text.textContent = "";
    }
  }
}

async function startTypingLoop() {
  while (true) {
    await typeEffect();
    await sleep(100);
  }
}
startTypingLoop();

// ============================
// [3] 웹 포트폴리오 카드 등장 애니메이션 (GSAP)
// ============================
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".portfolio__web").forEach((card) => {
  const title = card.querySelector(".portfolio__title");
  const categories = card.querySelectorAll(".portfolio__cat li");
  const desc = card.querySelector("p");
  const buttons = card.querySelectorAll(".portfolio__view");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top center",
      toggleActions: "play none none none",
    },
  });

  tl.from(title, { opacity: 0, y: 50, duration: 0.4 });
  tl.from(categories, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 });
  tl.from(desc, { opacity: 0, y: 30, duration: 0.6 });
  tl.from(buttons, { opacity: 0, y: 40, stagger: 0.2, duration: 0.6 });
  
});


// ============================
// [4] 하단 마퀴 애니메이션
// ============================
let repeated = marqueeText.repeat(20);
marqueeTrack.innerText = repeated;

let position = 0;
function animateMarquee() {
  position -= 1;
  if (Math.abs(position) > marqueeTrack.scrollWidth / 2) {
    position = 0;
  }
  marqueeTrack.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateMarquee);
}
animateMarquee();


// ============================
// [5] 모바일 active 토글 기능
// ============================
document.querySelectorAll('.about__design').forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});