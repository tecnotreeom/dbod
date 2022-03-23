import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
const deviceHeight = Dimensions.get('window').height;
import Constants from 'expo-constants';
const headerHeight = 48;
const StatusBarBackground = styled.View`
	background: #4933d3;
	padding-top: ${Platform.OS === 'ios' ? Constants.statusBarHeight : 0}px;
	height: ${Platform.OS === 'ios'
		? Constants.statusBarHeight + headerHeight
		: headerHeight}px;
`;
// import Logo from './logo'
export const BrandHeader = ({ styles }) => {
	let bgColor = '#4933D3';
	return (
		<>
			<StatusBarBackground>
				<View style={[headerStyle.overlay, styles]}>
					<Svg
						width="100%"
						height={deviceHeight * 0.6}
						viewBox="0 0 500 500"
					>
						<Path
							d="M 0 -0.703 L 502.813 -0.703 L 500.003 130.269 L 0 246.835 L 0 -0.703 Z"
							fill={bgColor}
						/>
						<View
							style={{
								flex: 1,
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 180,
							}}
						>
							{/* <Logo dimension={100} borderRequired={true} /> */}
						</View>
					</Svg>
				</View>
			</StatusBarBackground>
			<StatusBar
				barStyle="light-content"
				animated={true}
				translucent={true}
				backgroundColor={bgColor}
			/>
		</>
	);
};

const headerStyle = StyleSheet.create({
	overlay: {
		opacity: 1,
		width: '100%',
		position: 'absolute',
		top: -10,
	},
});
