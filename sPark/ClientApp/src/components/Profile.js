import React, { useState } from "react";
import homeIcon from "../images/home.svg"
import userImage from "../images/userImage.svg"

const Search = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);

	function logout() {
		localStorage.removeItem("currentUser");
		window.location.href = "https://localhost:44449/login";
	}

    function homeClick() {
		window.location.href = "https://localhost:44449/";
    }

    function submit() {
        localStorage.removeItem("currentUser");
		window.location.href = "https://localhost:44449/login";
    }

    return (
    <div className="profilePageContainer">
        <div className="topBar">
            <button onClick={logout} className="logoutButton">
                Log out
            </button>
            <div onClick={homeClick} className="profile">
					<img className="iconHome" src={homeIcon} /> Home
			</div>
        </div>
        <div className="profileContainer">
            <img className="userImage" src={userImage} />
            <h2 className="profileTitle">{user.firstName} {user.lastName}</h2>
            <p className="profileText">@{user.username}</p>
            <p className="linksContainer"><span className="profileLinks" onClick={e => window.location.href = "https://localhost:44449/liked"}>Favourite parkings</span>·<span className="profileLinks" onClick={e => window.location.href = "https://localhost:44449/history"}>Reservation history</span></p>
            <span onClick={submit} className="signOutButton">Sign out</span>
        </div>
    </div>
    );
};

export default Search;