import React, { useContext, useState } from 'react';
import { mapComponent } from '../config/mapper';
import { MaterialIcons } from '@expo/vector-icons';
import { AuthenticationContext } from '../services/authentication/authentication.context';
export const getTabScreenList = (data) => {
	let screenList = [];
	if (Array.isArray(data) && data.length > 0) {
		screenList = data.map((dashboard, index) => ({
			...dashboard,
			component: mapComponent(index),
			key: index,
		}));
	}
	return screenList;
};

export const getInitialScreenName = (data) => data[0].name;

const getIconName = (arr, routeName) =>
	arr.filter((data) => data.name === routeName);
export const iconTabRoute = ({ route }) => {
	const { screenList } = useContext(AuthenticationContext);
	const fetchedRouteArr = getIconName(screenList, route.name);
	const routeData = fetchedRouteArr[0];

	return {
		tabBarIcon: ({ focused, color, size }) => {
			let iconName;
			if (route.name === routeData.name) {
				iconName = focused ? routeData.icon : routeData.icon;
			}

			// You can return any component that you like here!
			return <MaterialIcons name={iconName} size={size} color={color} />;
		},
		// tabBarItemStyle: { backgroundColor: "#fff" },
		// tabBarStyle: {backgroundColor: "transparent",
		// margin:30,
		// elevation: 30,},
		tabBarActiveTintColor: '#523dd5',
		tabBarInactiveTintColor: 'gray',
	};
};

