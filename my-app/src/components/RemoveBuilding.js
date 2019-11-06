  import React from 'react';

class RemoveBuilding extends React.Component {
	render() {

        return (
            <button className="mybutton"
            onClick={this.props.removeBuilding}>Remove Building</button>
        );
    }
}
export default RemoveBuilding;