import React, { useContext, useState } from 'react';
import WebView from 'react-native-webview';

import { SafeArea } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
export const DashboardScreen = ({ route }) => {
	const { screenList } = useContext(AuthenticationContext);
	const { name } = route;
	const dashboardUrl = screenList.filter(
		(dashboard) => dashboard.name === name
	);
	return (
		<SafeArea>
			<WebView
				source={{
					uri: dashboardUrl[0].URL,
				}}
			/>
		</SafeArea>
	);
};
