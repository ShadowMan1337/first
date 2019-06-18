import React from 'react';


const MonthField = ({value}) => {
	return(
			<div className="monthfield">
				<input type="text" value={value}/>
			</div>
		);	
}

export {MonthField};