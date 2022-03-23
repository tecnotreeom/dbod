import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	useFonts as oswaldUseFonts,
	Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
	useFonts as latoUseFonts,
	Lato_400Regular,
} from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/layout/theme';
import { Navigation } from './src/layout/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
export default function App() {
	const [OswaldLoaded] = oswaldUseFonts({
		Oswald_400Regular,
	});
	const [LatoLoaded] = latoUseFonts({
		Lato_400Regular,
	});
	if (!OswaldLoaded || !LatoLoaded) {
		return null;
	}
	let bgColor = '#4933D3';
	return (
		<>
			<ThemeProvider theme={theme}>
				<AuthenticationContextProvider>
					<Navigation />
				</AuthenticationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar
				barStyle="light-content"
				animated={true}
				backgroundColor={bgColor}
				translucent={true}
			/>
		</>
	);
}
