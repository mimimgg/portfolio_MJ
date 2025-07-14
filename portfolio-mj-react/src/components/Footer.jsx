// Footer.jsx

import React, { useEffect, useRef } from 'react';

function Footer() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const marqueeText =
      "🌟 Creating seamless digital interfaces where design meets technology — building the future one pixel at a time. ";
    marqueeEl.innerText = marqueeText.repeat(20);

    let position = 0;
    let animationFrameId;

    function animateMarquee() {
      position -= 1;
      if (Math.abs(position) > marqueeEl.scrollWidth / 2) {
        position = 0;
      }
      marqueeEl.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animateMarquee);
    }

    animateMarquee();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="marquee__wrap">
        <div className="marquee__track" ref={marqueeRef} />
      </div>
      <div className="footer__wrap">
        <h3 className="footer__title">
          Curious to connect?
          <br />
          Let’s build something meaningful together.
        </h3>

        <p className="footer__description">
          제가 더 궁금하시다면 이력서(Resume)를 클릭하세요 😘
        </p>

        <div className="footer__links">
          <a
            href="https://buly.kr/ESyctnB"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="footer__link-item"
            title="이력서"
          >
            <i className="fa-solid fa-file-pdf"></i>
            <span>Resume</span>
          </a>
          <a
            href="https://github.com/mimimgg/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link-item"
            title="GitHub"
          >
            <i className="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            href="mailto:com42123@naver.com"
            className="footer__link-item"
            title="이메일 보내기"
          >
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>

        <p className="footer__copyright">
          &copy; 2025 Lee Minji. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
