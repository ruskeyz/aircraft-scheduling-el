import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Flights } from "../SchedulingView.types";
import { SetStateAction } from "react";

interface RotationFlightComponentProps {
  rotations: Flights[];
  setRotations: React.Dispatch<SetStateAction<Flights[]>>;
  flightIdent: string;
  filteredFlights: Flights[];
  setFilteredFlights: React.Dispatch<SetStateAction<Flights[]>>;
}

export default function RotationFlightComponent({
  rotations,
  setRotations,
  flightIdent,
  filteredFlights,
  setFilteredFlights,
}: RotationFlightComponentProps) {
  const handleClick = (rotation: Flights) => {
    console.log(rotation);
    // delete from rotations
    const { ident } = rotation;
    setRotations(
      rotations.filter((filterRotations) => filterRotations.ident !== ident)
    );
    // update flights
    setFilteredFlights([rotation, ...filteredFlights]);
    // update utilSum
    // update timeline
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
                {" "}
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
