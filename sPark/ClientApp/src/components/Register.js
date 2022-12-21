import React, { useState } from "react";
import userIcon from "../images/user.svg";
import keyIcon from "../images/key.svg";
import carImage from "../images/path0.svg";

const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	function submit() {
		if (!localStorage.getItem(`${username}`)) {
			localStorage.setItem(
				`${username}`,
				JSON.stringify({
					username: username,
					password: password,
					firstName: firstName,
					lastName: lastName,
				})
			);
		}
		console.log(JSON.parse(localStorage.getItem(`${username}`)));
		window.location.href = "https://localhost:44449/login";
	}

	return (
		<section className="registerContainer">
			<img className="carImage" src={carImage} />
			<div className="registerForm">
				<h1 className="registerTitle">sPark</h1>
				<div className="registerInputContainer">
					{/* <h1>{firstName}</h1> */}
					{/* <span>First name: </span> */}
					<img className="icon" src={userIcon} />
					<input
						placeholder="First name"
						onChange={(e) => setFirstName(e.target.value)}
					></input>
				</div>
				<div className="registerInputContainer">
					{/* <h1>{lastName}</h1> */}
					<img className="icon" src={userIcon} />
					<input
						placeholder="Last name"
						onChange={(e) => setLastName(e.target.value)}
					></input>
				</div>
				<div className="registerInputContainer">
					{/* <h1>{username}</h1> */}
					<img className="icon" src={userIcon} />
					<input
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					></input>
				</div>
				<div className="registerInputContainer">
					{/* <h1>{password}</h1> */}
					<img className="icon" src={keyIcon} />
					<input
						type="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<button onClick={submit} className="signUpButton">
					Sign up
				</button>
				<p className="loginReminderText">
					Already have an account?{" "}
					<a href="https://localhost:44449/login" className="loginReminderLink">
						Log in
					</a>
				</p>
			</div>
		</section>
	);
};

export default Register;
