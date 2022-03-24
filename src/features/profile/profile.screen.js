import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { View, Button } from 'react-native';
import { List, Avatar, Switch, Colors } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '../../components/typography/text.component';
import { Spacer } from '../../components/spacer/spacer.component';
import { SafeArea } from '../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { capitalizeFirstLetter } from '../../utils/transform-util';
const SettingsItem = styled(List.Item)`
	padding: ${(props) => props.theme.space[2]};
`;
const AvatarContainer = styled.View`
	align-items: center;
`;
export const ProfileScreen = () => {
	const { onLogout, loginName } = useContext(AuthenticationContext);
	const [isSwitchOn, setIsSwitchOn] = useState(false);
	const [expanded, setExpanded] = React.useState(false);
	const handlePress = () => setExpanded(!expanded);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
	const displayName = capitalizeFirstLetter(loginName);
	return (
		<SafeArea>
			<AvatarContainer>
				<Avatar.Icon size={64} icon="human" backgroundColor="#523DD5" />
				<Spacer position="top" size="large">
					<Text variant="label">{displayName}</Text>
				</Spacer>
			</AvatarContainer>
			<List.Section>
				<List.Accordion
					title="Check for updates"
					left={(props) => <List.Icon {...props} icon="update" />}
				>
					{/* <List.Item title="First item" />
					<List.Item title="Second item" /> */}
				</List.Accordion>

				<List.Accordion
					title="Change Password"
					left={(props) => <List.Icon {...props} icon="logout" />}
					// expanded={expanded}
					// onPress={handlePress}
				>
					{/* <List.Item title="First item" />
					<List.Item title="Second item" /> */}
				</List.Accordion>
			</List.Section>
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
						borderColor: '#523DD5',
						color: '#523DD5',
					}}
					title="Logout"
					icon="logout"
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
