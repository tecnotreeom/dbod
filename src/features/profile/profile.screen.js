import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { View, Button } from 'react-native';
import { List, Avatar, Switch } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '../../components/typography/text.component';
import { Spacer } from '../../components/spacer/spacer.component';
import { SafeArea } from '../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;
export const ProfileScreen = () => {
	const { onLogout } = useContext(AuthenticationContext);
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	return (
		<SafeArea>
			<AvatarContainer>
				<Avatar.Icon size={64} icon="human" backgroundColor="#2182BD" />
				<Spacer position="top" size="large">
					<Text variant="label">Om Gupta</Text>
				</Spacer>
			</AvatarContainer>
			{/* <List.Section>
				<SettingsItem
					title="Logout"
					left={(props) => (
						<List.Icon {...props} color="black" icon="door" />
					)}
					onPress={onLogout}
				/>
			</List.Section> */}
			{/* <LinearGradient
				colors={['#a87f06', '#e2c102']}
				start={{ x: 0.0, y: 1.25 }}
				end={{ x: 1, y: 0.25 }}
				style={{
					flex: 2,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
				}}
			></LinearGradient> */}
			<View
				style={{
					marginLeft: 20,
					marginRight: 20,
					marginBottom: 0,
					justifyContent: 'center',
					alignItems: 'center',
					alignSelf: 'center',
					position: 'absolute',
					bottom: 35,
				}}
			>
				<Button
					block
					bordered
					light
					style={{
						borderColor: '#C9C9C9',
						color: '#841584',
					}}
					title="Logout"
					onPress={onLogout}
				></Button>
				<View
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'row',
						padding: 10,
					}}
				>
					<Text
						style={{
							color: '#B7B7B7',
							fontSize: 10,
							fontWeight: '400',
							opacity: 0.45,
						}}
					>
						Powered by
					</Text>
					<Text
						style={{
							color: '#B7B7B7',
							fontSize: 12,
							fontWeight: '500',
							opacity: 0.55,
						}}
					>
						TECNOTREE
					</Text>
				</View>
				<Text style={{ textAlign: 'right', marginRight: 5 }}>v1.0.0</Text>
			</View>
		</SafeArea>
	);
};
