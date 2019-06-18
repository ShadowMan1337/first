import React from "react";
import { Dropdown, DropdownButton} from 'react-bootstrap';
import './App.css'
import ReactTable from "react-table";
import "react-table/react-table.css";
import classnames from 'classnames';

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
         favbanks: JSON.parse(localStorage.getItem('fav')) || [],
         city: ['BANGALORE', 'DELHI', 'HYDERABAD', 'KOLKATA', 'MUMBAI'],
         buttonTitle: 'Select City',
         search: '',
         fav: false,
         count: 0
    };
    this.tmp = new Set();
  }

  handleChange = (eventKey) => {
      this.setState({buttonTitle: this.state.city[eventKey], count: this.state.count+1});
      console.log(this.state.city[eventKey], this.state.count);
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
        )});
        console.log(this.state.banks);   
      });
    }   


  handleClick =(action) =>{
    console.log(action.original);
    this.setState({
    favbanks: this.state.favbanks.concat(action.original)
      }, () => {
    localStorage.setItem('fav', JSON.stringify(this.state.favbanks))
  });
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
        else if (this.state.search) {
          console.log(this.state.search)
          data = data.filter(row => {
            return row.ifsc.includes(this.state.search) || String(row.bank_id).includes(this.state.search) || row.bank_name.includes(this.state.search) || row.branch.includes(this.state.search) || row.address.includes(this.state.search) || row.city.includes(this.state.search) || row.district.includes(this.state.search) || row.state.includes(this.state.search)
          })
        }
          else{
            data=this.state.banks;
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
          <button className="button" onClick={()=>this.setState({fav:true})}>View Favourites</button>
        <hr />
        Search: <input 
                  value={this.state.search}
                  onChange={e => this.setState({search: e.target.value})}
                />
        <ReactTable
          keyField="ifsc"
          data={data}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[10, 25, 50, 100, 150, 250, 500]}
          getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              {this.handleClick(rowInfo)}
                
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
