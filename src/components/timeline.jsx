import React from "react";
import TimelineItems from "./timelineItems.jsx";
import timeline from "./data/timeline.js";
import Title from "./title.jsx";

function Timeline() {
  return (
    <div className=" mx-8 my-20 flex flex-col justify-center md:flex-row">
      <div className="w-full max-w-xl ">
        <Title id="timeline">Timeline</Title>
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
