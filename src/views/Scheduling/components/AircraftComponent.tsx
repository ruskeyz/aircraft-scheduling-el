import { SetStateAction } from "react";
import { Aircrafts, Flights } from "../SchedulingView.types";
import filterFlightsByIdent from "../helpers/filterByIdent";

interface AircraftComponentProps {
  aircrafts: Aircrafts[];
  utilNumber: number;
  selectAircraft: string;
  setSelectAircraft: React.Dispatch<SetStateAction<string>>;
  flights: Flights[];
  setFilteredFlights: React.Dispatch<SetStateAction<Flights[]>>;
  rotations: Flights[];
  setRotations: React.Dispatch<SetStateAction<Flights[]>>;
}
export default function AircraftComponent({
  aircrafts,
  utilNumber,
  selectAircraft,
  setSelectAircraft,
  flights,
  setFilteredFlights,
  rotations,
  setRotations,
}: AircraftComponentProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selected = e.currentTarget.value;
    setSelectAircraft(selected);
    setFilteredFlights(filterFlightsByIdent(flights, selected));
    setRotations(rotations.filter((r) => r.ident === selected));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900">
          Aircrafts
        </div>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        {aircrafts.map((aircraft) => {
          return (
            <button
              key={aircraft.ident}
              onClick={handleClick}
              value={aircraft.ident}
              className="flex justify-between gap-x-4 py-3 hover:font-medium"
            >
              <dt className="text-gray-500">{aircraft.ident}</dt>
              {selectAircraft && selectAircraft === aircraft.ident ? (
                <dd className="text-gray-700">({utilNumber}%)</dd>
              ) : null}
            </button>
          );
        })}
      </dl>
    </div>
  );
}
