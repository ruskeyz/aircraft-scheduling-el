import { Flight } from "../SchedulingView.types";
import * as APP_CONSTANTS from "../../../constants/appConstants";

export default function filterFlightsByConstraints(
  flights: Flight[],
  destination: string,
  arrivalTime: number
): Flight[] {
  const res: Flight[] = [];

  for (const flight of flights) {
    // filter flights to match the destination
    if (flight.origin !== destination) continue;
    // get the list that departs after arrivalTime
    if (flight.departuretime <= arrivalTime) continue;
    // cannot take flights after midnight
    if (flight.arrivaltime > APP_CONSTANTS.MIDNIGHT) continue;
    res.push(flight);
  }

  return res;
}
