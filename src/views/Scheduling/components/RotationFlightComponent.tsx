import { Flights } from "../SchedulingView.types";

interface RotationFlightComponentProps {
  rotations: Flights[];
  flightIdent: string;
}

export default function RotationFlightComponent({
  rotations,
  flightIdent,
}: RotationFlightComponentProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 col-span-2">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="text-sm font-medium leading-6 text-gray-900 border-b border-gray-400">
          Rotation {flightIdent}
        </div>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        {rotations.map((rotation) => {
          return (
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">{rotation.ident}</dt>
              <dd className="text-gray-700">(58%)</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
