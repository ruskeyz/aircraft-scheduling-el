import { Flights } from "../SchedulingView.types";

export default function filterFlightsByIdent(
  flights: Flights[],
  query: string
): Flights[] {
  return flights.filter((flight) => flight.ident === query);
}
