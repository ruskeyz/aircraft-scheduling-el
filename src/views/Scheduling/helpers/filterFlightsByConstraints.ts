import { Flights } from "../SchedulingView.types";

interface FilterFlightsByConstraintsProps {
  filteredFlights: Flights[];
  destination: string;
}

export default function filterFlightsByConstraints({
  filteredFlights,
  destination,
}: FilterFlightsByConstraintsProps) {
  // TODO think of new filter
  // TODO add timeline constraints
  return filteredFlights.filter((flight) => flight.destination === destination);
}
