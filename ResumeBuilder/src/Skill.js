import React, {Component} from 'react';

class Skill extends Component {

	render(){

		return(
			<div className="item">
                        <h3 className="level-title">{this.props.item.name}</h3> 
		</div>	
		);
	}
}

export default Skill;