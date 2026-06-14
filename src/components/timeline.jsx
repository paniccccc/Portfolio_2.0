import timeline from "../data/timeline";
import TimelineItem from "./timeline_item";
import Title from "./Title";

function Timeline() {
  return (
    <div id="timeline" className="space-y-6 max-w-2xl mx-auto w-full pt-4 scroll-mt-28">
      <Title>Timeline</Title>
      <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-8">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;