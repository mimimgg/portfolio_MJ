// About.jsx

import React, { useEffect, useRef } from "react";
import { aboutCards } from "../../data/aboutData";

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && section.classList.add("is-visible"), {
      threshold: 0.3,
    });
    if (section) obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="main__about" className="main__about" ref={ref}>
      <div className="main__box">
        <div className="title__box">
          <h2 className="blind">about me</h2>
          <h3 className="sec__title">
            hello, this is <span>minji</span>
          </h3>
          <h4 className="sec__desc">Web Designer & FrontEnd Developper</h4>
        </div>

        <div className="about__box">
          {aboutCards.map((card) => (
            <div key={card.id} className={`about__${card.type}`}>
              <div className="about__figure">
                {card.svg}
                <h5 className="about__text">{card.title}</h5>
              </div>
              <div className="about__label">
                {card.label.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
