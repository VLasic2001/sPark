import React, { useState } from "react";
import userIcon from "../images/user.svg";
import { neighbourhoods } from "../data/neighbourhoods";
import searchIcon from "../images/search.svg";
import homeImage from "../images/home.png";
import Select from "react-select";

const Home = () => {
	const [selected, setSelected] = useState(null);

	if (!localStorage.getItem(`currentUser`)) {
		window.location.href = "https://localhost:44449/register";
	}
	function logout() {
		localStorage.removeItem("currentUser");
		window.location.href = "https://localhost:44449/login";
	}

	function profileClick() {
		window.location.href = "https://localhost:44449/profile";
	}

	const handleChange = (selectedOption) => {
		setSelected(selectedOption);
		localStorage.setItem(`selected`, JSON.stringify(selectedOption));
		window.location.href = "https://localhost:44449/search";
	};

	return (
		<div className="homeContainer">
			<div className="topBar">
				<button onClick={logout} className="logoutButton">
					Log out
				</button>
				<div onClick={profileClick} className="profile">
					<img className="iconHome" src={userIcon} /> Profile
				</div>
			</div>
			<div className="searchContainer">
				<h1 className="registerTitle">sPark</h1>
				<div className="searchInputContainer">
					<img className="iconHome" src={searchIcon} />
					<Select
						theme={(theme) => ({
							...theme,
							borderRadius: 0,
							colors: {
								...theme.colors,
								text: "white",
								primary25: "white",
								primary: "white",
							},
						})}
						styles={{
							control: (baseStyles) => ({
								...baseStyles,
								backgroundColor: "transparent",
								border: 0,
								color: "white",
							}),
						}}
						className="parkingSearch"
						options={neighbourhoods}
						onChange={handleChange} 
						autoFocus={true}
					></Select>
				</div>
				<img src={homeImage} />
			</div>
		</div>
	);
};

export default Home;
