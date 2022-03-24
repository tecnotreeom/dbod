import React, { Component } from 'react';
import { Image } from 'react-native';
import logoImage from '../../../images/playstore.png';

export default class Logo extends Component {
	render() {
		const {
			dimension,
			width,
			height,
			borderRequired,
			source = logoImage,
			logoStyles,
		} = this.props;
		const styles = {
			width: dimension || width,
			height: dimension || height,
			borderWidth: borderRequired ? 4 : 0,
			borderColor: '#FFF',
		};
		return <Image source={source} style={[styles, logoStyles]} />;
	}
}
