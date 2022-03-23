import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './account.navigator';
import { AppNavigator } from './app.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { BrandHeader } from '../../features/account/components/BrandHeader';
export const Navigation = () => {
	const { isAuthenticated } = useContext(AuthenticationContext);
	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <BrandHeader />}
		</NavigationContainer>
	);
};
