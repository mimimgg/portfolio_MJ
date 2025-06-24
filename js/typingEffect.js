export async function startTypingLoop() {
  const content = `Hello world^안녕하세요.^프론트앤드 개발과^디자인 작업이 가능한^개발자 이민지입니다!`;
  const parts = content.split("^"); // '^' 기준으로 문장 분리
  const text = document.querySelector(".typing__text");

  let partIndex = 0; // 현재 문장 인덱스
  let index = 0; // 문장 내 글자 인덱스

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // 글자 지우는 애니메이션
  async function eraseEffect() {
    let currentText = text.textContent;
    let eraseIndex = currentText.length;

    while (eraseIndex > 0) {
      text.textContent = currentText.substring(0, eraseIndex - 1);
      eraseIndex--;
      await sleep(50);
    }
  }

  // 글자 타이핑 애니메이션
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

  // 무한 타이핑 루프 실행
  async function startTypingLoop() {
    while (true) {
      await typeEffect();
      await sleep(100);
    }
  }

  startTypingLoop();
}
