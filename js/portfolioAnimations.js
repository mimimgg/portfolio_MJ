import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initPortfolioAnimations() {
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

    tl.from(title, { opacity: 0, y: 50, duration: 0.8 })
      .from(categories, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 })
      .from(desc, { opacity: 0, y: 30, duration: 0.6 })
      .from(buttons, { opacity: 0, y: 40, stagger: 0.2, duration: 0.6 });
  });
}
