import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Fighters from "./components/Fighters";
import Weapons from "./components/Weapons";

function App() {
	return (
		<div>
			<Router>
				<Fighters />
				<Weapons />
			</Router>
		</div>
	);
}

export default App;
