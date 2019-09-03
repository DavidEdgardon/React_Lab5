// JavaScript source code
import React from 'react';
import PropTypes from 'prop-types';


class Detail extends React.Component{

	static defaultProps ={
	detailTitle: 'Hola Mundo',
	detailValue: 1234
}

	render(){
		const {detailTitle,detailValue} = this.props;
		return (
			<>
			<h2>{detailTitle}</h2>
			<h2>{detailValue}</h2>
			</>
		)
	}
}

Detail.propTypes = {
	detailTitle: PropTypes.string,
	detailValue: PropTypes.number
}

export default Detail;