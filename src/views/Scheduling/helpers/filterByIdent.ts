import { Flight } from "../SchedulingView.types";
import * as APP_CONSTANTS from "../../../constants/appConstants";

export default function filterFlightsByIdent(
  flights: Flight[],
  query: string
): Flight[] {
  const filterFlight = flights.filter((flight) => flight.ident === query);

  // cannot take flights after midnight
  const filterByMidnight = filterFlight.filter(
    (filterFlight) => filterFlight.arrivaltime < APP_CONSTANTS.MIDNIGHT
  );
  const res = filterByMidnight;
  return res;
}
