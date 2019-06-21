import React, {Component} from 'react';

class Interests extends Component{

render(){
	return(
		<div>
				<ul className="list-unstyled interests-list">
                    <li>{this.props.item}</li>
                </ul>
         </div>
		);
	}
}

export default Interests;