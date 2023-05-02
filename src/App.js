import React, { useState } from "react";
import PieChart from "./Components/PieChart/PieChart";
import BarChart from "./Components/BarChart/BarChart";
import Line from "./Components/LineChart/Line";
import ScatterPlot from "./Components/ScatterPlot/Scatterplot";
import ConfirmMessage from "./Components/Confirm-message/ConfirmMessage";
import PrograssBar from "../src/Components/PrograssBar/PrograssBar";
import "./App.css";

function App() {
	const [data, setData] = useState({ name: "namal", age: 25 });

	const handleDeleteUser = () => {
		setData({ name: "tharindu", age: 30 }); // for delete user
	};

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

			<div className="container-2">
				<div className="inner-conteriner-line">
					<Line />
				</div>
				<div className="inner-container-scatterplot">
					<ScatterPlot />
				</div>
			</div>

			<div>
				<h2>User Information</h2>
				<p>Name: {data.name}</p>
				<p>Age: {data.age}</p>
				<ConfirmMessage handleDeleteUser={handleDeleteUser} />
			</div>
			<div className="pro-bar">
				<PrograssBar />
			</div>
		</div>
	);
}

export default App;
