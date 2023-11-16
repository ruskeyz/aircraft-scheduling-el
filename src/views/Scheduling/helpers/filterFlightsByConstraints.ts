import { Flight } from "../SchedulingView.types";
import * as APP_CONSTANTS from "../../../constants/appConstants";

export default function filterFlightsByConstraints(
  flights: Flight[],
  destination: string,
  arrivalTime: number
): Flight[] {
  // filter flights to match the destination
  const filterByDest = flights.filter(
    (filterFlight) => filterFlight.origin === destination
  );
  // get the list that departs after arrivalTime
  const filterByTime = filterByDest.filter(
    (filterFlight) => filterFlight.departuretime > arrivalTime
  );

  // cannot take flights after midnight
  const filterByMidnight = filterByTime.filter(
    (filterFlight) => filterFlight.arrivaltime < APP_CONSTANTS.MIDNIGHT
  );

  const res = filterByMidnight;
  return res;
}
