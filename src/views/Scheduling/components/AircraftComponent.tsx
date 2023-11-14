import { Aircrafts } from "../SchedulingView.types";

interface AircraftComponentProps {
  aircrafts: Aircrafts[];
}
export default function AircraftComponent({
  aircrafts,
}: AircraftComponentProps) {
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
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">{aircraft.ident}</dt>
              <dd className="text-gray-700">(58%)</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
