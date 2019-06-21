import React, {Component} from 'react';

class Languages extends Component{
	render(){
		return(
			<div>
				<ul className="list-unstyled interests-list">
                    <li>{this.props.item.name}<span className="lang-desc">({this.props.item.details})</span></li>
                </ul>
             </div>

			);
	}
}

export default Languages;
