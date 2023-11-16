import axios from "axios";
import { Aircraft, Flight } from "../views/Scheduling/SchedulingView.types";

export const fetchFlights = async (): Promise<Flight[]> => {
  const { data } = await axios.get(
    "https://recruiting-assessment.alphasights.com/api/flights"
  );
  return data;
};

export const fetchAircrafts = async (): Promise<Aircraft[]> => {
  const { data } = await axios.get(
    "https://recruiting-assessment.alphasights.com/api/aircrafts"
  );
  return data;
};
