import Login from "pages/Login";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>

					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="home" element={<Home />} />
					</Routes>
					
			</Router>
		</main>
	);
}