import "./App.scss";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";
import { Proyects } from "./components/Proyects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

function App() {
	return (
		<Router>
			<div className="flex">
				<Sidebar icons={FaIcons} />
				<div className="content">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route
							path="/proyects"
							exact
							element={<Proyects icons={FaIcons} />}
						/>
						<Route
							path="/contact"
							exact
							element={<Contact icons={FaIcons} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
