import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Flights, TimelineData } from "./SchedulingView.types";
import AircraftComponent from "./components/AircraftComponent";
import FlightComponent from "./components/FlightComponent";
import RotationFlightComponent from "./components/RotationFlightComponent";
import { useState } from "react";
import TimelineBar from "./components/TimeLineBar";
import TimelineBarTitle from "./components/TimelineBarTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchAircrafts, fetchFlights } from "../../api/flightsApi";

export default function SchedulingView() {
  const [selectAircraft, setSelectAircraft] = useState("");
  const [filteredFlights, setFilteredFlights] = useState<Flights[]>([]);
  const [rotations, setRotations] = useState<Flights[]>([]);
  const [utilNumber, setUtilNumber] = useState<number[]>([]);
  const [timelineData, setTimelineData] = useState<TimelineData[]>([]);

  const {
    data: flights,
    isLoading: isFlightLoading,
    isError: isFlightError,
  } = useQuery({
    queryKey: ["flightsData"],
    queryFn: fetchFlights,
  });

  const {
    data: aircrafts,
    isLoading: isAircraftLoading,
    isError: isAircraftError,
  } = useQuery({
    queryKey: ["aircraftData"],
    queryFn: fetchAircrafts,
  });

  return (
    <>
      <div className="my-4 flex items-center justify-center space-x-4">
        <ArrowLeftIcon className="h-5 w-5" />
        <p>4th January 2018</p>
        <ArrowRightIcon className="h-5 w-5" />
      </div>
      {isFlightLoading ? (
        <p className="text-center italic">Loading flights...</p>
      ) : null}
      {isAircraftLoading ? (
        <p className="text-center italic">Loading aircrafts...</p>
      ) : null}
      {isAircraftError ? (
        <p className="text-center text-red-400">
          Something happened while loading aircraft data, try refreshing the
          page.
        </p>
      ) : null}
      {isFlightError ? (
        <p className="text-center text-red-400">
          Something happened while loading flight data, try refreshing the page.
        </p>
      ) : null}
      {flights && aircrafts ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-1">
          <AircraftComponent
            aircrafts={aircrafts}
            utilNumber={utilNumber}
            selectAircraft={selectAircraft}
            setSelectAircraft={setSelectAircraft}
            flights={flights}
            setFilteredFlights={setFilteredFlights}
            rotations={rotations}
            setRotations={setRotations}
            setUtilNumber={setUtilNumber}
            setTimelineData={setTimelineData}
          />
          <RotationFlightComponent
            rotations={rotations}
            setRotations={setRotations}
            flightIdent={selectAircraft}
            filteredFlights={filteredFlights}
            setFilteredFlights={setFilteredFlights}
            utilNumber={utilNumber}
            setUtilNumber={setUtilNumber}
            timelineData={timelineData}
            setTimelineData={setTimelineData}
          />
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
      ) : null}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 grid-rows-2 my-4">
        <div className="col-span-2 col-start-2">
          <TimelineBarTitle />
          <TimelineBar timelineData={timelineData} />
        </div>
      </div>
    </>
  );
}
