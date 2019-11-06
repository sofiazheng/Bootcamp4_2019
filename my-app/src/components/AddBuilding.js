import React from 'react';
import './style.css';

class AddBuilding extends React.Component
{
    state = {
        code: '',
        name: '',
        longitude: '',
        latitude: '',
        address: ''
    }

    onSubmit = (info) => {
        info.preventDefault()
        this.props.addBuilding(this.state.code, this.state.name, this.state.longitude, this.state.latitude, this.state.address)
        this.setState({
            code: '',
            name: '',
            longitude: '',
            latitude: '',
            address: ''
        })
    }

    onChange = (info) => this.setState({
        [info.target.name]: info.target.value,
    })

    //formatting taken from opensource bootstrap code
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-row">
                    <div className="form-group col-ml">
                        <label for="addBuildingName">Name</label>
                        <input className="form-control form-control-sm" placeholder="Building Name" id="addBuildingName" name="name" value={this.state.name} onChange={this.onChange.bind(this)} type="text"/>
                    </div>
                    <div className="form-group col-mr">
                        <label for="addBuildingCode">Code</label>
                        <input className="form-control form-control-sm" placeholder="Building Code" id="addBuildingCode" name="code" value={this.state.code} onChange={this.onChange.bind(this)} type="text"/>
                    </div>
                </div>

                <div className="form-group form-row">
                    <label for="addAddress">Address</label>
                    <input className="form-control form-control-sm" placeholder="Address" id="addAddress" name="address" value={this.state.address} onChange={this.onChange.bind(this)} type="text"/>
                </div>
                
                <div className="form-row">
                    <div className="form-group col">
                        <label for="addBuildingLongitude">Longitude</label>
                        <input className="form-control form-control-sm" placeholder="Longitude" id="addBuildingLongitude" name="longitude" value={this.state.longitude} onChange={this.onChange.bind(this)} type="text"/>
                    </div>
                    <div className="form-group col">
                        <label for="addBuildingLatitude">Latitude</label>
                        <input className="form-control form-control-sm" placeholder="Latitude" id="addBuildingLatitude" name="latitude" value={this.state.latitude} onChange={this.onChange.bind(this)} type="text"/>
                    </div>
                </div>

                <button className="mybutton" type="submit">Submit</button>
            </form>
        );
    }
}



export default AddBuilding;