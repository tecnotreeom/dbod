export const loginRequest = async (userName, password) => {
	try {
		//https://crm.mtnnigeria.net/dap-api/service-mgmt/api/dbod/v1/dbodLogin
		const response = await fetch(
			'https://mybiz.mtn.com.gh/service-mgmt/api/dbod/v1/dbodLogin',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userName: userName,
					password: password,
				}),
			}
		);
		const loginApiResponse = await response.json();
		return loginApiResponse;
	} catch (error) {
		console.error(error);
	}
};

export const pushExpoToken = async (userName, expoToken) => {
	try {
		const response = await fetch(
			'https://mybiz.mtn.com.gh/service-mgmt/api/dbod-mobile-app/v1/pushAppToken',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: userName,
					token: expoToken,
				}),
			}
		);
		const expoTokenResponse = await response.json();
		return expoTokenResponse;
	} catch (error) {
		console.error(error);
	}
};
