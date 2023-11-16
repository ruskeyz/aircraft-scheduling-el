import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Flights, TimelineData } from "../SchedulingView.types";
import { SetStateAction } from "react";
import { calculatePercentage } from "../helpers/calculatePercentage";
import * as APP_CONSTANTS from "../../../constants/appConstants";

interface RotationFlightComponentProps {
  rotations: Flights[];
  setRotations: React.Dispatch<SetStateAction<Flights[]>>;
  flightIdent: string;
  filteredFlights: Flights[];
  setFilteredFlights: React.Dispatch<SetStateAction<Flights[]>>;
  utilNumber: number[];
  setUtilNumber: React.Dispatch<SetStateAction<number[]>>;
  timelineData: TimelineData[];
  setTimelineData: React.Dispatch<SetStateAction<TimelineData[]>>;
}

export default function RotationFlightComponent({
  rotations,
  setRotations,
  flightIdent,
  filteredFlights,
  setFilteredFlights,
  utilNumber,
  setUtilNumber,
  timelineData,
  setTimelineData,
}: RotationFlightComponentProps) {
  const handleClick = (rotation: Flights) => {
    // delete from rotations
    const { ident } = rotation;
    setRotations(
      rotations.filter((filterRotations) => filterRotations.ident !== ident)
    );
    // update flights
    setFilteredFlights([rotation, ...filteredFlights]);
    // update utilSum
    const range: number = rotation.arrivaltime - rotation.departuretime;
    const rotationUtilPercent = parseInt(
      calculatePercentage(range, APP_CONSTANTS.MIDNIGHT).toFixed(0)
    );
    setUtilNumber(utilNumber.filter((value) => value !== rotationUtilPercent));
    // update timeline
    setTimelineData(
      timelineData.filter((filterRotation) => filterRotation.ident !== ident)
    );
  };
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 col-span-2">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900 border-b border-gray-400">
          Rotation {flightIdent}
        </div>
      </div>
      <dl className="divide-y divide-gray-100 text-sm leading-6">
        {rotations.map((rotation) => {
          return (
            <div
              key={rotation.ident}
              className="flex flex-col hover:cursor-pointer hover:bg-gray-100 items-center py-3"
              onClick={() => handleClick(rotation)}
            >
              <p className="text-gray-500">{rotation.ident}</p>
              <div className="px-2 py-3 flex space-x-52">
                <dt className="text-sm text-gray-700">{rotation.origin}</dt>
                <dd className="text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  {rotation.destination}
                </dd>
              </div>
              <div>
                <ArrowRightIcon className="h-10 w-10" />
              </div>
              <div className="px-2 py-3 flex justify-end space-x-52">
                <dt className="text-sm text-gray-700">
                  {rotation.readable_departure}
                </dt>
                <dd className="text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  {rotation.readable_arrival}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
