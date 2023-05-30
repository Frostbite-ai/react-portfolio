import React from "react";

function TimelineItems({ year, details, title }) {
  return (
    <ol className="md-flex-row relative flex flex-col border-l  border-stone-300">
      <li className="mb-8 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-stone-300" />
        <p className="flex flex-wrap items-center justify-start gap-4 text-xs md:text-sm  ">
          <span className="inline-block items-center justify-start rounded-md bg-black px-2 py-1 font-bold text-white">
            {year}
          </span>
          <h2 className=" text-xl font-semibold  text-stone-900 dark:text-white ">
            {title}
          </h2>
        </p>
        <p className="my-2 text-base font-normal text-stone-600 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItems;
