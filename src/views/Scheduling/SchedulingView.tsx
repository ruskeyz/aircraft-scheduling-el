import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Flights } from "./SchedulingView.types";
import AircraftComponent from "./components/AircraftComponent";
import FlightComponent from "./components/FlightComponent";
import RotationFlightComponent from "./components/RotationFlightComponent";
import { flightsData } from "./flightsData";
import { useState } from "react";
import { aircrafts } from "./aircraftData";

export default function SchedulingView() {
  const [selectAircraft, setSelectAircraft] = useState("");
  const [flights, setFlights] = useState<Flights[]>(flightsData);
  const [filteredFlights, setFilteredFlights] = useState<Flights[]>([]);
  const [rotations, setRotations] = useState<Flights[]>([]);

  return (
    <>
      <div className="my-4 flex items-center justify-center space-x-4">
        <ArrowLeftIcon className="h-5 w-5" />
        <p>4th January 2018</p>
        <ArrowRightIcon className="h-5 w-5" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-1">
        <AircraftComponent
          aircrafts={aircrafts}
          utilNumber={59}
          selectAircraft={selectAircraft}
          setSelectAircraft={setSelectAircraft}
          flights={flights}
          setFilteredFlights={setFilteredFlights}
          rotations={rotations}
          setRotations={setRotations}
        />
        {flightsData ? (
          <RotationFlightComponent
            rotations={rotations}
            flightIdent={selectAircraft}
          />
        ) : null}
        <FlightComponent
          filteredFlights={filteredFlights}
          setFilteredFlights={setFilteredFlights}
          rotations={rotations}
          setRotations={setRotations}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-2 my-4">
        <div className="col-span-2 col-start-2 border-b border-gray-700">
          Timeline:
        </div>
      </div>
    </>
  );
}
