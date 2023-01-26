import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search";
import Liked from "./components/Liked";
import Profile from "./components/Profile";
import History from "./components/History";

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
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "/liked",
		element: <Liked />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/history",
		element: <History />,
	},
];

export default AppRoutes;
