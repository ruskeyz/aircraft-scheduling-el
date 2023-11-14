import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Aircrafts, Flights } from "./SchedulingView.types";
import AircraftComponent from "./components/AircraftComponent";
import FlightComponent from "./components/FlightComponent";
import RotationFlightComponent from "./components/RotationFlightComponent";

const aircrafts: Aircrafts[] = [
  { ident: "AS1001", type: "A320", economySeats: 100, base: "EGKK" },
  { ident: "AS1002", type: "A320", economySeats: 186, base: "EGKK" },
];
const flights: Flights[] = [
  {
    ident: "AS1001",
    departuretime: 21600,
    arrivaltime: 26100,
    readable_departure: "06:00",
    readable_arrival: "07:15",
    origin: "LFSB",
    destination: "LFMN",
  },
  {
    ident: "AS1002",
    departuretime: 27900,
    arrivaltime: 32100,
    readable_departure: "07:45",
    readable_arrival: "08:55",
    origin: "LFMN",
    destination: "LFSB",
  },
];

export default function SchedulingView() {
  console.log(aircrafts, flights);
  return (
    <>
      <div className="my-4 flex items-center justify-center space-x-4">
        <ArrowLeftIcon className="h-5 w-5" />
        <p>4th January 2018</p>
        <ArrowRightIcon className="h-5 w-5" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-1">
        <AircraftComponent aircrafts={aircrafts} />
        {flights ? (
          <RotationFlightComponent
            rotations={flights}
            flightIdent={flights[0].ident}
          />
        ) : null}
        <FlightComponent flights={flights} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-2 my-4">
        <div className="col-span-2 col-start-2 border-b border-gray-700">
          Timeline:
        </div>
      </div>
    </>
  );
}
