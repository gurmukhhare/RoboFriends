import React from 'react';
import Card from './Card';

const CardList=({ robots })=> { //this is a pure/deterministic component. Always has same output for same input
	return (
		<div>
		    {
			robots.map((user,i)=>{
				return (
					<Card 
						key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}/>
				);
			})




		}
		</div>
	);
}

export default CardList;