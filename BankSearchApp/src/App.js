import React from "react";
import { Dropdown, DropdownButton} from 'react-bootstrap';
import './App.css'
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      banks: [{
          'ifsc': '',
          'bank_id': '',
          'bank_name': '',
          'branch': '',
          'address': '',
          'city': '',
          'district': '',
          'state': ''
         }],
        favbanks: JSON.parse(localStorage.getItem('favbanks')) || [],
         city: ['BANGALORE', 'DELHI', 'HYDERABAD', 'KOLKATA', 'MUMBAI'],
         buttonTitle: 'Select City',
         search: '',
         fav: false,
         searching: false,
         showBanks: false,
         loading: false,
         count: true,
         flag: 0
    };
 }

  handleChange = (eventKey) => {
      this.setState({fav: false, showBanks: true , loading: true}) 
      this.setState({buttonTitle: this.state.city[eventKey]});
      console.log(this.state.city[eventKey]);
      const BASE_URL = 'https://vast-shore-74260.herokuapp.com/banks?'; //API BASE URL
      const FETCH_URL = `${BASE_URL}city=${this.state.city[eventKey]}`; //API FETCH URL
      console.log(FETCH_URL)
      fetch(FETCH_URL, {        //fetching json list and storing it into banks
      method: 'GET'
      }).then(response => response.json())
      .then((json) => {
            this.setState({
            banks: json.map(item => ({
              ifsc: item.ifsc,
              bank_id: item.bank_id,
              bank_name: item.bank_name,
              branch: item.branch,
              address: item.address,
              city: item.city,
              district: item.district,
              state: item.state,
          })
        ), loading: false});

      localStorage.setItem('bank', JSON.stringify(this.state.banks))   
      console.log(this.state.banks);   
      });
    }   

//Mark as Favourite implementation
  handleClick =(action) =>{
    let data = this.state.favbanks;
    console.log(action.original.ifsc)
    data = data.filter(row => {
            return row.ifsc.includes(action.original.ifsc)
        })

    data.length ? (console.log("It is present")) : (
                        this.setState({
                        favbanks: this.state.favbanks.concat(action.original)
                         }, () => {
                            localStorage.setItem('favbanks', JSON.stringify(this.state.favbanks))
                          }
                      ))
  }

  render() {
    var columns = [
        {
              Header: "IFSC",
              accessor: "ifsc",
              size: 20 
            },
            { Header: "ID",
                accessor: "bank_id",
                width: 50},
            { Header: "NAME",
                accessor: "bank_name",
                width: 300},
            { Header: "BRANCH",
                accessor: "branch"},
            { Header: "ADDRESS",
                accessor: "address",
                width: 500,
              Cell: props => <span className='number'>{props.value}</span>},
            { Header: "CITY",
                accessor: "city"},
            { Header: "DISTRICT",
                accessor: "district"},
            { Header: "STATE",
                accessor: "state"}   
          ];
        
        let data = this.state.banks;
        if(this.state.fav){
          data = this.state.favbanks;
        }
        else if(this.state.showBanks)
        {
          data=this.state.banks;
        }
        else if (this.state.searching) {
          console.log(this.state.searching)
          data = JSON.parse(localStorage.getItem('bank'))
          data = data.filter(row => {
            return row.bank_name.includes(this.state.search) || String(row.bank_id).includes(this.state.search) || row.ifsc.includes(this.state.search) || row.branch.includes(this.state.search) || row.address.includes(this.state.search) || row.city.includes(this.state.search) || row.district.includes(this.state.search) || row.state.includes(this.state.search)
          })
        }

    return (
      <div>
        <div className="App-title">Bank Search App</div>
        <div className="form-inline">
          <Dropdown>
          <DropdownButton id="dropdown-item-button" title={this.state.buttonTitle} onSelect={this.handleChange}>
            <Dropdown.Item eventKey="0">BANGALORE</Dropdown.Item>
              <Dropdown.Item eventKey="1">DELHI</Dropdown.Item>
              <Dropdown.Item eventKey="2">HYDERABAD</Dropdown.Item>
              <Dropdown.Item eventKey="3">KOLKATA</Dropdown.Item>
              <Dropdown.Item eventKey="4">MUMBAI</Dropdown.Item>
          </DropdownButton>
          </Dropdown>
        </div>
        <div>
          Click on any row to Mark as Favourite
          <button className="button" onClick={()=>this.setState({banks: [], fav:true})}>View Favourites</button>
        <hr />
        Search: <input 
                  value={this.state.search}
                  onChange={e => {this.setState({search: e.target.value, fav: false, showBanks: false, searching: true})}}
                />
        <ReactTable
          keyField="ifsc"
          data={data}
          loading = {this.state.loading}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[10, 25, 50, 100, 150, 250, 500]}
          getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              this.handleClick(rowInfo)
                
              if (handleOriginal) {
              handleOriginal()
                }
              }
            }
          }}
          />
      </div>
      </div>
    );
  }
}

export default App;
