import PieChart from "./Components/PieChart/PieChart";
import BarChart from "./Components/BarChart/BarChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="chart-container">
        <div className="class-pie">
          <PieChart />
        </div>
        <div className="class-bar">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
