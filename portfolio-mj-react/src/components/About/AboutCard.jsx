// AboutCard.jsx

import React from 'react';

function AboutCard({ title, label, svg }) {
  return (
    <div className={`about__${title}`}> {/* 예: about__design, about__frontend */}
      <div className="about__figure">{svg}</div>
      <h3 className="about__text">{title}</h3>
      <div className="about__label">
        {label.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default AboutCard;
