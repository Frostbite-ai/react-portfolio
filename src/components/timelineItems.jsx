import React from "react";

function TimelineItems({ year, details, title }) {
  return (
    <ol className="md-flex-row relative flex flex-col border-l  border-blue-950">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black" />
        <p className="flex flex-wrap items-center justify-start gap-4 text-xs md:text-sm  ">
          <span className="inline-block items-center justify-start rounded-md bg-black px-5 py-1 text-white">
            {year}
          </span>
          <h2 className=" text-lg font-semibold text-stone-900 ">{title}</h2>
        </p>
        <p className="my-2 text-base font-normal text-stone-900">{details}</p>
      </li>
    </ol>
  );
}

export default TimelineItems;
