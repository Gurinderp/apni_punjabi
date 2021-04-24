import "./App.css";
import Fighters from "./components/Fighters";
import Fighters from "./components/Weapons";

function App() {
	return (
		<Router>
			<Fighters />
			<Weapons />
		</Router>
	);
}

export default App;
