import React from "react";
import PortfolioItems from "./PortfolioItems";
import portfolio from "./data/portfolio.js";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {portfolio.map((project) => (
          <PortfolioItems
            title={project.title}
            imgURL={project.imgURL}
            link={project.link}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
