// Portfolio.jsx

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import portfolioItems from '../../../src/data/portfolioItems';
import PortfolioCard from './PortfolioCard';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useEffect(() => {
    const cards = document.querySelectorAll('.portfolio__web');
  
    cards.forEach((card) => {
      const title = card.querySelector('.portfolio__title');
      const categories = card.querySelectorAll('.portfolio__cat li');
      const desc = card.querySelector('p');
      const buttons = card.querySelectorAll('.portfolio__view li');
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 70%', // 트리거 지점 (화면 아래쪽에서 시작)
          toggleActions: 'play none none none', // ✅ 한 번만 실행
          // ❌ scrub 제거됨
          // markers: true, // 디버깅 원하면 주석 해제
        },
      });
  
      tl.from(title, { opacity: 0, y: 50, duration: 0.4 });
      tl.from(categories, { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 });
      tl.from(desc, { opacity: 0, y: 30, duration: 0.5 });
      tl.from(buttons, { opacity: 0, y: 40, stagger: 0.2, duration: 0.6 });
    });
  
    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="main__portfolio" className="main__portfolio">
      <h2 className="blind">portfolio</h2>
      <div className="portfolio__wrap">
        {portfolioItems.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
