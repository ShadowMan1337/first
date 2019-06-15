import React from 'react';

const AmountField = ({value}) => {
	return(
			<div className="amtfield">
				<input type="text" value={value}/>
			</div>
		);	
}

export {AmountField};