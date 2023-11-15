import clsx from "clsx";
import { TimelineData } from "../SchedulingView.types";

interface TimelineBarProps {
  timelineData: TimelineData[];
}
export default function TimelineBar({ timelineData }: TimelineBarProps) {
  const totalSecondsInADay = 86400;

  const calculatePercentage = (time: number) => {
    return (time / totalSecondsInADay) * 100;
  };

  return (
    <div className="relative h-8 bg-gray-100 rounded-md">
      {timelineData.map(({ departureTime, arrivalTime, turnaround }, index) => {
        const departurePercentage = calculatePercentage(departureTime);
        const arrivalPercentage = calculatePercentage(arrivalTime);

        const barStyle = {
          width: `${arrivalPercentage - departurePercentage}%`,
          marginLeft: `${departurePercentage}%`,
        };

        return (
          <div key={index}>
            <div
              className={clsx(
                turnaround ? "bg-purple-300" : "bg-green-300 z-10",
                "absolute h-full"
              )}
              style={barStyle}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
