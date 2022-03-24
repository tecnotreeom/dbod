import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../layout/theme/colors';
import { Text } from '../../../components/typography/text.component';

export const AccountBackground = styled.ImageBackground.attrs({
	source: require('../../../../assets/home_bg.png'),
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
	flex: 1;
	justify-content: center
	padding-left: 20px;
	padding-right: 20px;
`;

export const AuthButton = styled(Button).attrs({
	color: colors.brand.loginBtm,
})`
	padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)``;

export const Title = styled(Text)`
	font-size: 30px;
`;

export const ErrorContainer = styled.View`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${(props) => props.theme.space[2]};
	margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
	width: 100%;
	height: 40%;
	position: absolute;
	top: 30px;
	padding: ${(props) => props.theme.space[2]};
`;
