import { SetStateAction } from "react";
import { Flights, TimelineData } from "../SchedulingView.types";
import filterFlightsByConstraints from "../helpers/filterFlightsByConstraints";

interface FlightComponentProps {
  flights: Flights[];
  filteredFlights: Flights[];
  setFilteredFlights: React.Dispatch<SetStateAction<Flights[]>>;
  rotations: Flights[];
  setRotations: React.Dispatch<SetStateAction<Flights[]>>;
  utilNumber: number[];
  setUtilNumber: React.Dispatch<SetStateAction<number[]>>;
  timelineData: TimelineData[];
  setTimelineData: React.Dispatch<SetStateAction<TimelineData[]>>;
}
const calculatePercentage = (partialValue: number, totalValue: number) => {
  return (100 * partialValue) / totalValue;
};
export default function FlightComponent({
  flights,
  filteredFlights,
  setFilteredFlights,
  rotations,
  setRotations,
  utilNumber,
  setUtilNumber,
  timelineData,
  setTimelineData,
}: FlightComponentProps) {
  const handleClick = (flight: Flights) => {
    // make sure only one flight is there
    if (rotations.indexOf(flight) === -1) {
      setRotations([...rotations, flight]);
    }
    const { destination, arrivaltime } = flight;
    setFilteredFlights(
      filterFlightsByConstraints(flights, destination, arrivaltime)
    );
    const range: number = flight.arrivaltime - flight.departuretime;
    console.log(range, "RANGE");
    //calculatePercentage
    setUtilNumber([
      ...utilNumber,
      parseInt(calculatePercentage(range, 86400).toFixed(0)),
    ]);

    // set timelineData
    setTimelineData([
      ...timelineData,
      {
        turnaround: true,
        departureTime: flight.departuretime - 1200,
        arrivalTime: flight.arrivaltime - 1200,
      },
      {
        turnaround: false,
        departureTime: flight.departuretime,
        arrivalTime: flight.arrivaltime,
      },
      {
        turnaround: true,
        departureTime: flight.departuretime + 1200,
        arrivalTime: flight.arrivaltime + 1200,
      },
    ]);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900">
          Flights
        </div>
      </div>
      <dl className="divide-y divide-gray-100 text-sm leading-6">
        {filteredFlights.map((flight) => {
          return (
            <div
              key={flight.ident}
              className="flex flex-col hover:cursor-pointer hover:bg-gray-100 justify-between items-center py-3"
              onClick={() => handleClick(flight)}
            >
              <p className="text-gray-500">{flight.ident}</p>
              <div className="px-2 py-3 flex justify-end space-x-20">
                <dt className="text-sm text-gray-700">{flight.origin}</dt>
                <dd className="text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  {flight.destination}
                </dd>
              </div>
              <div className="px-2 py-3 flex justify-end space-x-20">
                <dt className="text-sm text-gray-700">
                  {flight.readable_departure}
                </dt>
                <dd className="text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                  {flight.readable_arrival}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
