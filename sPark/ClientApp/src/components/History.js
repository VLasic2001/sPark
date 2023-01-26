import React, { useState } from "react";
import Reservation from "./Reservation";
import userIcon from "../images/user.svg";

const History = () => {
    const history = JSON.parse(localStorage.getItem("history"));

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
            <h1 className="historyTitle">Povijest rezervacija</h1>
            <div className="historyResults">
                <div>{history.map(r => <Reservation r={r} />)}</div>
            </div>
        </div>
    </div>
        
    )
};

export default History;