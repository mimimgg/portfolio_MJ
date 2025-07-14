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
          start: 'top 80%', // ✅ 너무 늦지 않게 트리거
          once: true, // ✅ 한 번만 실행되게 해서 "걸리는" 문제 방지
        },
      });
  
      // ✅ fromTo로 확실하게 초기 상태 지정
      tl.fromTo(title, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.4 });
      tl.fromTo(categories, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
      tl.fromTo(desc, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 });
      tl.fromTo(buttons, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 });
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
