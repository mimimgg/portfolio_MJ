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


