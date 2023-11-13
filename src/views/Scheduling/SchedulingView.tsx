import { Aircrafts, Flights } from "./SchedulingView.types";

const aircrafts: Aircrafts[] = [
  { ident: "AS1001", type: "A320", economySeats: 100, base: "EGKK" },
  { ident: "AS1002", type: "A320", economySeats: 186, base: "EGKK" },
];
const flights: Flights[] = [
  {
    ident: "AS1001",
    departuretime: 21600,
    arrivaltime: 26100,
    readable_departure: "06:00",
    readable_arrival: "07:15",
    origin: "LFSB",
    destination: "LFMN",
  },
  {
    ident: "AS1002",
    departuretime: 27900,
    arrivaltime: 32100,
    readable_departure: "07:45",
    readable_arrival: "08:55",
    origin: "LFMN",
    destination: "LFSB",
  },
];
export default function SchedulingView() {
  console.log(aircrafts, flights);
  return (
    <>
      <div className="text-red-500">HERE</div>
    </>
  );
}
