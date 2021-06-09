import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import RegisterAccountForm from "../LoginForm/RegisterAccount";
import NavBar from "../../SharedComponents/NavBar/NavBar";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";

const LoginPage = () => {
	const [user, setUser] = useContext(UserContext);

	let history = useHistory();
	let location = useLocation();
	let { from } = location.state || { from: { pathname: "/" } };
	useEffect(() => {
		if (user?.email) {
			history.replace(from);
		}
	}, [user]);
	return (
		<>
			<NavBar />
			<div className="  loginPagePart  ">
				<div className="col d-flex align-items-center justify-content-center registerForm ">
					<RegisterAccountForm />
				</div>
			</div>
		</>
	);
};

export default LoginPage;
