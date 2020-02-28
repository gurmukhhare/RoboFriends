import React from 'react';

const SearchBox =({searchfield, searchChange})=>{ //searchbox component for website to search for robot contact info
	return(
		<div className='pa2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange} />
		</div>
	);

}

export default SearchBox;