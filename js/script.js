const content = `Hello world^안녕하세요.^프론트앤드 개발과^디자인 작업이 가능한^개발자 이민지입니다!`;
const text = document.querySelector(".typing__text");
let index = 0; // 현재 문장의 글자 인덱스
let partIndex = 0; // 현재 타이핑 중인 문장의 인덱스 (parts 배열 기준)
let parts = content.split("^"); // '^'를 기준으로 문자열을 나눔

const video = document.querySelector('.main_video');

video.playbackRate = 0.5;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 글자를 지우는 효과 함수
async function eraseEffect() {
  const currentText = text.textContent;
  let eraseIndex = currentText.length;

  while (eraseIndex > 0) {
    text.textContent = currentText.substring(0, eraseIndex - 1); // 마지막 글자부터 하나씩 지움
    eraseIndex--;
    await sleep(50); // 지우는 속도 (조절 가능)
  }
}

// 타이핑 효과 함수 (비동기 함수)
async function typeEffect() {
  const currentTextPart = parts[partIndex]; // 현재 타이핑할 문장

  // 글자 하나씩 타이핑
  if (index < currentTextPart.length) {
    text.textContent += currentTextPart[index++];
  } else {
    // 현재 문장의 타이핑이 끝났을 때
    await sleep(1000); // 문장 전환 전 잠시 대기

    // 다음 문장으로 이동
    index = 0;
    partIndex++;

    // 모든 문장을 다 타이핑했는지 확인 (마지막 문장이라면 지우기 효과 실행)
    if (partIndex >= parts.length) {
      await eraseEffect(); // <-- 여기! 모든 타이핑이 끝나면 지우기 효과 실행
      partIndex = 0; // 처음 문장으로 돌아가기 위해 인덱스 초기화
      await sleep(500); // 지우기 효과 후 다음 타이핑 시작 전 잠시 대기
    } else {
      // 마지막 문장이 아니라면, 다음 타이핑을 위해 텍스트만 지움
      text.textContent = "";
    }
  }
}

// 타이핑 루프 시작
async function startTypingLoop() {
  while (true) {
    await typeEffect();
    await sleep(100);
  }
}

startTypingLoop();


// GSAP 등록
gsap.registerPlugin(ScrollTrigger);

// 모든 portfolio 카드에 대해 반복
document.querySelectorAll(".portfolio__web").forEach((card) => {
  const title = card.querySelector(".portfolio__title");
  const categories = card.querySelectorAll(".portfolio__cat li");
  const desc = card.querySelector("p");
  const buttons = card.querySelectorAll(".portfolio__view");

  // timeline 설정
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top center",
      toggleActions: "play none none none",
    },
  });

  // 타이틀 등장
  tl.from(title, {
    opacity: 0,
    y: 50,
    duration: 0.8,
  });

  // 카테고리 하나씩 등장
  tl.from(categories, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
  });

  // 설명 등장
  tl.from(desc, {
    opacity: 0,
    y: 30,
    duration: 0.6,
  });

  // 버튼 등장 (제일 마지막)
  tl.from(buttons, {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.6,
  });

});


