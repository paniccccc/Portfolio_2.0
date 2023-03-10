import timeline from "../data/timeline";
import TimelineItem from "./timeline_item";
import Title from "./Title";

function Timeline(){
    return(
        <div className="flex flex-col md:flex-row justify-center my-10 ">
            
            <div className="w-full md:w-7/12">
                <Title>Timeline</Title>
            {timeline.map(item=>(
                <TimelineItem
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))

            }
            </div>
        </div>
    )
}

export default Timeline;