import logo from "./logo.svg";
import "./App.css";

import "./tailwind.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products/Products";
function App() {
	return (
		<div className="App">
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Products />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
