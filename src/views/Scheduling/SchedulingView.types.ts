export interface Aircraft {
  ident: string;
  type: string;
  economySeats: number;
  base: string;
}
export interface Flight {
  ident: string;
  departuretime: number;
  arrivaltime: number;
  readable_departure: string;
  readable_arrival: string;
  origin: string;
  destination: string;
}
export interface TimelineData {
  ident: string;
  turnaround: boolean;
  departureTime: number;
  arrivalTime: number;
}
export interface UtilNumber {
  ident: string;
  value: number;
}
