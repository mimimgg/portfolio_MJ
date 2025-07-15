// PortfolioCard.jsx

import React from "react";

function PortfolioCard({ project }) {
  return (
    <div className="portfolio__web">
      <div className="portfolio__info">
        <h3 className="portfolio__title">{project.title}</h3>

        <ul className="portfolio__cat">
          {project.categories &&
            project.categories.map((tag, index) => (
              <li key={index} className={tag === "web" ? "point-web" : tag === "design" ? "point-design" : ""}>
                {tag}
              </li>
            ))}
        </ul>

        <p dangerouslySetInnerHTML={{ __html: project.description }} />

        {project.links && (
          <ul className="portfolio__view">
            {project.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="portfolio__thumbnail">
        <div className="mask"></div>
        <img src={project.thumbnail} alt={project.title} />
      </div>
    </div>
  );
}

export default PortfolioCard;
