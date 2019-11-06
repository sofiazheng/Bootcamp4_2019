import React from 'react';
import RemoveBuilding from './RemoveBuilding';
import './style.css'

export default ({data, filterText, selectedUpdate, deleteBuilding}) => {

		//console.log('This is my directory file', this.props.data);
		const buildingList = data
		.filter(directory => {
			//remove nonmatching names
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		.map(directory => {
			return (
				<div className="card">
				<tr key={directory.id} 
					onClick={() => selectedUpdate(directory.id)}>
					<td>{directory.code} {directory.name}</td>
					{/* <td> {directory.name} </td> */}
					{/* <RemoveBuilding className="mybutton"
						id = {directory.id}
						deleteBuilding = {deleteBuilding.bind(this)}
					/> */}
				</tr>
				</div>
			);
		});

		return (
		<div>
			<ui>
				{buildingList}
			</ui>
		</div>
		);
}

