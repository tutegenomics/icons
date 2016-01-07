var React = require('react');


export class tuteIcons extends React.Component {

	render() {
		let icons = __REPLACE__;
		let propIcon = () => {
			return {__html: icons[this.props.icon]};
		};
		return <span className="icon" dangerouslySetInnerHTML={propIcon()} />;
	};
}

/* commonjs package manager support */
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
	module.exports = tuteIcons;
}