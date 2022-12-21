import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

const AppRoutes = [
	{
		index: true,
		element: <Home />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
];

export default AppRoutes;
