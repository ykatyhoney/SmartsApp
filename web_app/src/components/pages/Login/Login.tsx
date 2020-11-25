import React, { useState } from "react";

import AuthBackground from "../../ui/AuthBackground/AuthBackground";
import Input from "../../ui/Input/Input";

import styles from "./login.module.css";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthBackground>
			<div className={styles.Body}>
				<h1>LOGIN</h1>
				<form className="py-2">
					<Input
						placeholder="Email"
						val={email}
						onChangeFunc={(email: string) => setEmail(email)}
					/>
					<Input
						placeholder="Password"
						val={password}
						onChangeFunc={(password: string) =>
							setPassword(password)
						}
						type="password"
					/>
					{/* <button>Submit</button> */}
				</form>
			</div>
		</AuthBackground>
	);
}
