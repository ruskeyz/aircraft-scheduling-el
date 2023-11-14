import SchedulingView from "./views/Scheduling/SchedulingView";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 flex-grow flex-col mx-4">
        <SchedulingView />
      </div>
      <div className="flex bg-gray-100 justify-end p-4 font-black italic">
        //
      </div>
    </div>
  );
}

export default App;
