import React, { createContext, useState } from 'react';
import { loginRequest, pushExpoToken } from './authentication.service';
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [loginName, setLoginName] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [dashboard, setDashboard] = useState([]);
	const onLogin = (userName, password, expoPushToken) => {
		setIsLoading(true);
		if (userName !== '' && password !== '') {
			loginRequest(userName, password)
				.then((authResult) => {
					const resultCode = authResult.resultCode;
					if (resultCode === '1') {
						setError(`Error: ${authResult.resultMessage}`);
						setIsLoading(false);
					} else {
						const dashboardList = authResult.data;
						setDashboard([
							...dashboardList,
							{
								name: 'Profile',
								icon: 'settings',
							},
						]);
						setLoginName(authResult.userName);
						setIsAuthenticated(true);
						setIsLoading(false);
					}
				})
				.catch((e) => {
					setIsLoading(false);
					setIsAuthenticated(false);
					setError(e);
				});
			pushExpoToken(userName, expoPushToken);
		} else {
			setError('Error: Please Enter UserName & Password ');
			setIsLoading(false);
			return;
		}
	};
	const onLogout = () => {
		setDashboard([]);
		setError(null);
		setIsLoading(false);
		setIsAuthenticated(false);
	};
	return (
		<AuthenticationContext.Provider
			value={{
				screenList: dashboard,
				onLogin,
				onLogout,
				isLoading,
				error,
				isAuthenticated,
				loginName,
			}}
		>
			{children}
		</AuthenticationContext.Provider>
	);
};
