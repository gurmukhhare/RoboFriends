import React from 'react';

const Card=({ name,email,id}) =>{ //using destructuring to pass these properties for the cards
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> {/*adding predefined tachyons classes to add styling to cards*/}
			<img alt='robots'src={`https://robohash.org/${id}?100x200`} /> 
			{/*extracting randomly generated robo images from robohash website*/}

			<div>{/*adding card content in this div*/}
			<h2> {name}</h2> 
			<p> {email}</p>
			</div>
		</div>

	);
}

export default Card;