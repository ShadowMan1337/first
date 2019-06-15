//used Hooks concept

import React , {useState} from 'react';
import {AmountField} from './AmountField';
import {MonthField} from './MonthField';

const SliderUse  = ({

			initialSize, 
			minSize,
			maxSize,
			int_rate,
			monthlyPayment,
			numPayments,
			rows
		
		}) => {

				const [amtvalue , setAmountValue] = useState(initialSize);
				const handleAmountChange = event => {
					setAmountValue(event.target.value);
				};		
					
				const [monthvalue , setMonthValue] = useState(initialSize);		
				const handleMonthChange = event => {
					setMonthValue(event.target.value);
				};

				const handleURL = () => {
					const BASE_URL = 'https://ftl-frontend-test.herokuapp.com/interest?';
					const FETCH_URL = `${BASE_URL}amount=${amtvalue}&numMonths=${monthvalue}`;
					console.log(FETCH_URL);

					fetch(FETCH_URL, {
						method: 'GET'
					})
					.then(response => response.json())
					.then(data => { 
						int_rate = data.interestRate;
						numPayments = data.numPayments;
						monthlyPayment = data.monthlyPayment.amount;
						alert("Interest: "+int_rate+"%\nMonthly Payment: $"+monthlyPayment+"\nNumber of Payments: "+numPayments);
						
					});

				}

		return(
			<div>
				<input 
					type="range"
					className="slider"
					min={minSize}
					max={maxSize}
					value={amtvalue}
					onChange={handleAmountChange}
					defaultChecked
				/>
				<div className="field-class">
					<AmountField  value={amtvalue} />
				</div>
				<p><font size="5">Enter Duration(in months)</font></p>
				<input 
					type="range"
					className="slider"
					min={6}
					max={24}
					value={monthvalue}
					onChange={handleMonthChange}
				/>
				<div className="field-class">
					<MonthField value={monthvalue} />
				</div>
	        <button className="button field-class" onClick={handleURL}>Submit</button>
	        <div>
	    </div>
	</div>
);
};


export {SliderUse};