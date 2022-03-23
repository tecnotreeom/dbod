import React, { useContext } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { AuthenticationContext } from '../services/authentication/authentication.context';
export const IndexScreen = () => {
	const { screenList } = useContext(AuthenticationContext);
	return (
		<View style={styles.container}>
			<Text>Hello DBOD om!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
