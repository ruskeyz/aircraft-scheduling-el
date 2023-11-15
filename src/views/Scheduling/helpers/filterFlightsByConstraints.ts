import { Flights } from "../SchedulingView.types";

export default function filterFlightsByConstraints(
  flights: Flights[],
  destination: string,
  arrivalTime: number
): Flights[] {
  // filter flights to match the destination
  const filterByDest = flights.filter(
    (filterFlight) => filterFlight.origin === destination
  );
  // get the list that departs after arrivalTime
  const filterByTime = filterByDest.filter(
    (filterFlight) => filterFlight.departuretime > arrivalTime
  );

  // cannot take flights after midnight
  const midnight = 86400;
  const filterByMidnight = filterByTime.filter(
    (filterFlight) => filterFlight.arrivaltime < midnight
  );

  //filterFlight.arrivaltime >= flight.arrivaltime &&
  //filterFlight.departuretime <= flight.departuretime;

  const res = filterByMidnight;
  return res;
}
