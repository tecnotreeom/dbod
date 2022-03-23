import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../features/account/screens/login.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
	<Stack.Navigator headerShown="false">
		<Stack.Screen
			name="Login"
			component={LoginScreen}
			options={{ title: '' }}
		/>
	</Stack.Navigator>
);
