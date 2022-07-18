import Login from "pages/Login";
import Home from "pages/Home";
import Cadastro from "pages/Cadastro"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>

					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="home" element={<Home />} />
						<Route path="cadastro" element={<Cadastro />} />
					</Routes>
					
			</Router>
		</main>
	);
}