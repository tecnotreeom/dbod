import React, { useState, useContext, useEffect, useRef } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {
	AccountBackground,
	AccountCover,
	AccountContainer,
	AuthButton,
	AuthInput,
	ErrorContainer,
	Title,
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { BrandHeader } from '../../../features/account/components/BrandHeader';
Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

export const LoginScreen = ({ navigation }) => {
	const [userName, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { onLogin, error, isLoading } = useContext(AuthenticationContext);
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();
	const allowsNotificationsAsync = async () => {
		const settings = await Notifications.getPermissionsAsync();
		return (
			settings.granted ||
			settings.ios?.status ===
				Notifications.IosAuthorizationStatus.PROVISIONAL
		);
	};
	useEffect(() => {
		registerForPushNotificationsAsync().then((token) =>
			setExpoPushToken(token)
		);

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});

		responseListener.current =
			Notifications.addNotificationResponseReceivedListener();

		return () => {
			Notifications.removeNotificationSubscription(
				notificationListener.current
			);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);
	const triggerNotify = () => {
		schedulePushNotification();
	};
	return (
		<>
			<BrandHeader />
		</>
		// <AccountBackground>
		// 	<AccountCover />
		// 	{/* <Title>DCLM Logs To Go</Title> */}
		// 	<AccountContainer>
		// 		<AuthInput
		// 			label="UserName"
		// 			value={userName}
		// 			textContentType="username"
		// 			autoCapitalize="none"
		// 			onChangeText={(u) => setEmail(u)}
		// 		/>
		// 		<Spacer size="large">
		// 			<AuthInput
		// 				label="Password"
		// 				value={password}
		// 				textContentType="password"
		// 				secureTextEntry
		// 				autoCapitalize="none"
		// 				onChangeText={(p) => setPassword(p)}
		// 			/>
		// 		</Spacer>
		// 		{error && (
		// 			<ErrorContainer size="large">
		// 				<Text variant="error">{error}</Text>
		// 			</ErrorContainer>
		// 		)}
		// 		<Spacer size="large">
		// 			{!isLoading ? (
		// 				<AuthButton
		// 					icon="lock-open-outline"
		// 					mode="contained"
		// 					onPress={() => onLogin(userName, password, expoPushToken)}
		// 				>
		// 					Login
		// 				</AuthButton>
		// 			) : (
		// 				<ActivityIndicator animating={true} color={Colors.blue300} />
		// 			)}
		// 		</Spacer>
		// 	</AccountContainer>
		// </AccountBackground>
	);
};

async function schedulePushNotification() {
	await Notifications.scheduleNotificationAsync({
		content: {
			title: "You've got mail! 📬",
			body: 'Here is the notification body',
			data: { data: 'goes here' },
		},
		trigger: { seconds: 2 },
	});
}

async function registerForPushNotificationsAsync() {
	let token;
	if (Constants.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
		console.log('token get by code', token);
	} else {
		alert('Must use physical device for Push Notifications');
	}

	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C',
		});
	}

	return token;
}
