import React, { useState } from "react";
import userIcon from "../images/user.svg";
import keyIcon from "../images/key.svg";
import carImage from "../images/path0.svg";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function submit() {
		const data = JSON.parse(localStorage.getItem(`${username}`));
		if (data && data.password == password) {
			localStorage.setItem("currentUser", JSON.stringify(data));
			window.location.href = "https://localhost:44449";
		} else {
			alert("Neuspješan login");
		}
	}

	return (
		<section className="registerContainer">
			<img className="carImage" src={carImage} />
			<div className="registerForm">
				<h1 className="registerTitle">sPark</h1>
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
					Log in
				</button>
				<p className="loginReminderText">
					Don't have an account?{" "}
					<a
						href="https://localhost:44449/register"
						className="loginReminderLink"
					>
						Sign up
					</a>
				</p>
			</div>
		</section>
	);
};

export default Login;
