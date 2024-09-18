import "./App.css";
import { ListItem } from "./Components";
import StudentFormView from "./Pages/StudentFormView";
// import studentData from "../../Utilities/studentData.json";
import StudentDetailView from "./Pages/StudentDetailView";
import { Route, Router, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<StudentFormView />} />
				<Route path="/student/:id" element={<StudentDetailView />} />
			</Routes>
		</div>
	);
}

export default App;
