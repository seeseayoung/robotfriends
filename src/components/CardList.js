import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

	
	const CardComponent = robots.map((robot) => {
		return <Card key={robot.name} id={robot.id} name={robot.name} email={robot.email} />
	});

	return (
		<div>
	      {CardComponent}
	    </div>
	);
}

export default CardList;