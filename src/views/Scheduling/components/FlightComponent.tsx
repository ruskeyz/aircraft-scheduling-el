import { Flights } from "../SchedulingView.types";

interface FlightComponentProps {
  flights: Flights[];
}
export default function FlightComponent({ flights }: FlightComponentProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900">
          Flights
        </div>
      </div>
      <dl className="divide-y divide-gray-100 text-sm leading-6">
        {flights.map((flight) => {
          return (
            <div
              key={flight.ident}
              className="flex flex-col hover:cursor-pointer hover:bg-gray-100 justify-between items-center py-3"
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
