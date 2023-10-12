import axios from "axios";
import jwt_decode from "jwt-decode";
import { NewUser } from "../models/NewUser";
import { DisplayUser } from "../models/DisplayUser.interface";
import { LoginUser } from "../models/LoginUser.interface";
import { JWT } from "../models/Jwt";
import { DecodedJwt } from "../models/DecodedJwt.interface";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
	const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, newUser);
	return response.data;
}

const login = async (user: LoginUser): Promise<JWT> => {
	const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`, user);
	if (response.data) {
		localStorage.setItem('jwt', JSON.stringify(response.data));
		const decodedJwt: DecodedJwt = jwt_decode(response.data.token);
		localStorage.setItem('user', JSON.stringify(decodedJwt.user));
	}
	return response.data;
}

const logout = (): void => {
	localStorage.removeItem('user');
	localStorage.removeItem('jwt');
}

const verifyJwt = async (jwt: string): Promise<boolean> => {
	const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/verify-jwt`, {jwt});
	if (response.data) {
		const jwtExpirationMs = response.data.exp * 100;
		return jwtExpirationMs > Date.now();
	}
	return response.data;
}

const authService = {
	register,
	login,
	logout,
	verifyJwt,
}

export default authService;