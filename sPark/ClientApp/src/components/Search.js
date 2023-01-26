import React, { useState } from "react";
import Select from "react-select";
import userIcon from "../images/user.svg";
import { neighbourhoods } from "../data/neighbourhoods";
import { parkings } from "../data/parkings";
import searchIcon from "../images/search.svg";
import Parking from "./Parking";

const Search = () => {
    const [selected, setSelected] = useState(JSON.parse(localStorage.getItem(`selected`)));
	const handleChange = (selectedOption) => {
		setSelected(selectedOption);
		localStorage.setItem(`selected`, JSON.stringify(selectedOption));
	};

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
        <div className="searchSearchContainer">
            <div className="searchSearchInputContainer">
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
                    value={selected}
                    onChange={handleChange} 
                    autoFocus={true}
                ></Select>
            </div>
            <div className="searchResults">
                {selected && <>{parkings.map(p => p.neighbourhood==selected.label?<Parking name={p.name}></Parking>:<></>)}</>}
            </div>
        </div>
    </div>
);
};

export default Search;
