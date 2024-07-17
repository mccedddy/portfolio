import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <Navbar />
      <div className="h-4/6 flex flex-col justify-center">
        <h1 className="">Hi! I'm</h1>
        <h1 className="text-3xl font-bold">Daniel John Cedric Macallan</h1>
      </div>
    </div>
  );
}

export default App;
