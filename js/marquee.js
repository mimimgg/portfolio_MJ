export function startMarquee() {
  const marqueeText =
    "🌟 Creating seamless digital interfaces where design meets technology — building the future one pixel at a time. ";
  const marqueeTrack = document.querySelector(".marquee__track");

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
}
