import React from "react";
import TimelineItems from "./timelineItems.jsx";
import timeline from "./data/timeline.js";

function Timeline() {
  return (
    <div className=" mx-16 my-20 flex flex-col justify-center md:flex-row">
      <div className="w-full  md:w-7/12">
        {timeline.map((item) => {
          return (
            <TimelineItems
              year={item.year}
              title={item.title}
              details={item.details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
