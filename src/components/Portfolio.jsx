import React from "react";
import PortfolioItems from "./PortfolioItems";
import portfolio from "./data/portfolio.js";

function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
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
