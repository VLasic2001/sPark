import React, { useState } from "react";
import { parkings } from "../data/parkings";
import Parking from "./Parking";
import userIcon from "../images/user.svg";

const Liked = () => {
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
            <h1 className="historyTitle">Omiljeni parkinzi</h1>
            <div className="searchResults">
                {parkings.map(p => !JSON.parse(localStorage.getItem(p.name)) ? <></> : <Parking name={p.name} />)}
            </div>
        </div>
    </div>
    );
};

export default Liked;