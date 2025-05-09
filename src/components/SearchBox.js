import React from 'react';

const SearchBox = ({event}) => {

	return (
		
		<input 
		type = 'search' 
		placeholder = 'search robots' 
		className = 'bg-light-green pa3 ma2' 
		onChange = {event}/>
		
	);
}

export default SearchBox;