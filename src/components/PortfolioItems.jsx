import React from "react";

function PortfolioItems({ title, imgURL, link, stack }) {
  return (
    <div className="overflow-hidden rounded-lg border-2  border-black dark:border-white">
      <img
        src={imgURL}
        alt="portfolio"
        className=" h-36 w-full cursor-pointer object-cover md:h-48"
      />
      <div>
        <h3 className="my-2  ml-4 mt-4 flex items-center justify-start text-xl font-medium md:text-2xl	   ">
          {title}
        </h3>
        <p className="mx-4 mb-4 flex flex-wrap items-center justify-start gap-2 dark:border-white md:gap-2 ">
          {stack.map((item) => (
            <span className=" rounded-lg  border-2 border-black px-2  py-1 text-sm font-medium text-black dark:border-white   dark:text-white">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItems;
