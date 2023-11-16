import axios from "axios";
import { Aircrafts, Flights } from "../views/Scheduling/SchedulingView.types";

export const fetchFlights = (): Promise<Flights[]> =>
  axios
    .get("https://recruiting-assessment.alphasights.com/api/flights")
    .then((res) => res.data);

export const fetchAircrafts = (): Promise<Aircrafts[]> =>
  axios
    .get("https://recruiting-assessment.alphasights.com/api/aircrafts")
    .then((res) => res.data);
