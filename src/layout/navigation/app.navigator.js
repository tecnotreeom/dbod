import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	getTabScreenList,
	getInitialScreenName,
	iconTabRoute,
} from '../../utils/transform-util';
import { IndexScreen } from '../../features/index.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppNavigator = () => {
	const { screenList } = useContext(AuthenticationContext);
	let dashboardScreens = getTabScreenList(screenList);
	let initialScreenName = getInitialScreenName(screenList);

	return (
		<Tab.Navigator
			screenOptions={iconTabRoute}
			initialRouteName={initialScreenName}
		>
			{dashboardScreens.map((screenRoute) => {
				return (
					<Tab.Screen
						key={screenRoute.key}
						name={screenRoute.name}
						component={screenRoute.component}
					/>
				);
			})}
			{/* <Tab.Screen name="DBOD" component={DashboardScreen} />
			<Tab.Screen name="MyProfile" component={SettingsNavigator} /> */}
		</Tab.Navigator>
	);
};
