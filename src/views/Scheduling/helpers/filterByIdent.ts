import { Flight } from "../SchedulingView.types";

export default function filterFlightsByIdent(
  flights: Flight[],
  query: string
): Flight[] {
  return flights.filter((flight) => flight.ident === query);
}
