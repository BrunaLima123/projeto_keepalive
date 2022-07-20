import Login from "pages/Login";
import Home from "pages/Home";
import Register from "pages/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLoginProvider } from "common/context/user";
import { RegisterProvider } from "common/context/registerUser";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<RegisterProvider>
				<UserLoginProvider>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="home" element={<Home />} />
						<Route path="register" element={<Register />} />
					</Routes>
					</UserLoginProvider>
					</RegisterProvider>
					
			</Router>
		</main>
	);
}