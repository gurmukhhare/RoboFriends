import React from 'react';

const Scroll=(props)=>{
	return (
		<div style={{overflow: 'scroll', border: '8 px solid black', height: '800px'}}> {/*can use double curly brackets with "style" to style within JSX*/}
			{props.children}
		</div>
	);
};

export default Scroll;