import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: []
    };
  }

  deleteBuilding(id) {
    const tempList = this.state.data
    const index = tempList.findIndex(listing => {return listing.id === id})
    const newList = tempList.slice(0, index).concat(tempList.slice(index+1))
    this.setState({
      data: newList
    })
  }

  addBuilding(newBuilding){
    console.log("GOT TO APP")
     var count = 1;
     var id = this.props.data.filter(
         listing =>{
           count++
           return listing
         }
     )
    id = count;
     console.log(count);
      var name = newBuilding.name;
      var code = newBuilding.code;
      var address = newBuilding.address;
      var latitude = newBuilding.coordinates.latitude;
      var longitude = newBuilding.coordinates.longitude;

      var curDirectory = {
        id: id,
        code: code,
        name: name,
        address: address,
        coordinates: {
          latitude: latitude,
          longitude: longitude
        }
      }

      const newDirectory = this.state.listings
          .map(value => { return value })
          .concat(curDirectory)


      this.setState({
        listings: newDirectory
      })
    alert('Building ' + newBuilding.name + " has been added!");


  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    //const list = this.state.favourites.concat([id])
    this.setState({
      selectedBuilding: id
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search 
          filterText={this.state.filterText} 
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building<br></br></b>
                      
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteBuilding={this.deleteBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <div className = "row">
          <AddBuilding
            addBuilding={this.addBuilding.bind(this)}
          />
        </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
