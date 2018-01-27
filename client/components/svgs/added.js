import React from 'react';


export default class Added extends React.Component {
    render() {
        return (
			<svg onClick={this.props.removeSong} fill="#1ED760" className="notadded" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
			    <defs>
			        <path d="M0 0h24v24H0V0z" id="a"/>
			    </defs>
			    <clipPath id="b">
			        <use overflow="visible"/>
			    </clipPath>
			    <path clip-path="url(#b)" d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/>
			</svg>
		 )
    }
}