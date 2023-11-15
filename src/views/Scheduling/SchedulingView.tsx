import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Flights, TimelineData } from "./SchedulingView.types";
import AircraftComponent from "./components/AircraftComponent";
import FlightComponent from "./components/FlightComponent";
import RotationFlightComponent from "./components/RotationFlightComponent";
import { flightsData } from "./flightsData";
import { useState } from "react";
import { aircrafts } from "./aircraftData";
import TimelineBar from "./components/Bar";

export default function SchedulingView() {
  const [selectAircraft, setSelectAircraft] = useState("");
  const [flights, setFlights] = useState<Flights[]>(flightsData);
  const [filteredFlights, setFilteredFlights] = useState<Flights[]>([]);
  const [rotations, setRotations] = useState<Flights[]>([]);
  const [utilNumber, setUtilNumber] = useState<number[]>([]);
  const [timelineData, setTimelineData] = useState<TimelineData[]>([]);

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
          utilNumber={utilNumber}
          selectAircraft={selectAircraft}
          setSelectAircraft={setSelectAircraft}
          flights={flights}
          setFlights={setFlights}
          setFilteredFlights={setFilteredFlights}
          rotations={rotations}
          setRotations={setRotations}
          setUtilNumber={setUtilNumber}
        />
        {flightsData ? (
          <RotationFlightComponent
            rotations={rotations}
            flightIdent={selectAircraft}
          />
        ) : null}
        <FlightComponent
          flights={flights}
          filteredFlights={filteredFlights}
          setFilteredFlights={setFilteredFlights}
          rotations={rotations}
          setRotations={setRotations}
          utilNumber={utilNumber}
          setUtilNumber={setUtilNumber}
          timelineData={timelineData}
          setTimelineData={setTimelineData}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-2 my-4">
        <div className="col-span-2 col-start-2 border-b border-gray-700">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-between">
              <span className="bg-white pr-2 text-sm text-gray-500">00:00</span>
              <span className="bg-white pr-2 text-sm text-gray-500">12:00</span>
              <span className="bg-white pl-2 text-sm text-gray-500">24:00</span>
            </div>
          </div>
          <TimelineBar timelineData={timelineData} />
        </div>
      </div>
    </>
  );
}
