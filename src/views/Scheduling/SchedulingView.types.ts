export interface Aircrafts {
  ident: string;
  type: string;
  economySeats: number;
  base: string;
}
export interface Flights {
  ident: string;
  departuretime: number;
  arrivaltime: number;
  readable_departure: string;
  readable_arrival: string;
  origin: string;
  destination: string;
}
