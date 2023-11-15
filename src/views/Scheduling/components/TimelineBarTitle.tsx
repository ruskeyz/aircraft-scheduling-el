export default function TimelineBarTitle() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>

      <div className="relative flex justify-between">
        <span className="bg-white pr-2 text-sm text-gray-500">00:00</span>
        <span className="bg-white pr-2 text-sm text-gray-500">12:00</span>
        <span className="bg-white pl-2 text-sm text-gray-500">24:00</span>
      </div>
    </div>
  );
}
