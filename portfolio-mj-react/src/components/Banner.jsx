// Banner.jsx

import React, { useState, useEffect } from "react";

const toType = [
  "Hello world",
  "안녕하세요.",
  "프론트엔드 개발과",
  "디자인 작업이 가능한",
  "개발자 이민지입니다!",
];

const TYPING_SPEED = 100; // 타이핑 속도 (ms)
const DELETING_SPEED = 50; // 지우기 속도 (ms)
const PAUSE_AFTER_PHRASE = 1000; // 문장 완료 후 대기 시간 (ms)
const PAUSE_AFTER_DELETING = 500; // 지우기 완료 후 대기 시간 (ms)

function Banner() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId;

    const animate = async () => {
      if (isTyping) {
        // 타이핑 단계
        if (text.length < toType[index].length) {
          timeoutId = setTimeout(() => {
            setText(prev => prev + toType[index].charAt(prev.length));
          }, TYPING_SPEED);
        } else {
          timeoutId = setTimeout(() => {
            if (index === toType.length - 1) {
              setIsTyping(false); 
              setText(toType[index]);
            } else {
              setIndex(prev => prev + 1);
              setText("");
            }
          }, PAUSE_AFTER_PHRASE);
        }
      } else {
        if (text.length > 0) {
          timeoutId = setTimeout(() => {
            setText(prev => prev.slice(0, -1));
          }, DELETING_SPEED);
        } else {
          timeoutId = setTimeout(() => {
            setIsTyping(true);
            setIndex(0);
          }, PAUSE_AFTER_DELETING);
        }
      }
    };
    
    animate();

    return () => clearTimeout(timeoutId);

  }, [isTyping, index, text]);

  return (
    <section className="main__banner">
      <h2 className="blind">메인배너</h2>
      <video
        src={`${process.env.PUBLIC_URL}/images/main_video.mp4`}
        autoPlay
        muted
        loop
        playsInline
        className="main_video"
        preload="none"
      ></video>
      <h4 className="typing__text">{text}</h4>
    </section>
  );
}

export default Banner;