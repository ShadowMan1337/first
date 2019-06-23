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
         buttonTitle: 'Select City',
         bankData: [], 
         favbanks: JSON.parse(localStorage.getItem('favbanks')) || [],
         city: ['BANGALORE', 'DELHI', 'HYDERABAD', 'KOLKATA', 'MUMBAI'],
         search: '',
         fav: false,
         searching: false,
         showBanks: false
    };   
 }

 componentWillMount(){
  const BASE_URL = 'https://vast-shore-74260.herokuapp.com/banks?';
        for(let j = 0; j < this.state.city.length ; j++)
        {
          const FETCH_URL = `${BASE_URL}city=${this.state.city[j]}`;
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
              localStorage.setItem(this.state.city[j], JSON.stringify(this.state.banks))
        })
      }
    }

  handleChange=(eventKey)=>{
      this.setState({buttonTitle: this.state.city[eventKey], fav: false, showBanks: true}) 
      this.setState({bankData: JSON.parse(localStorage.getItem(this.state.city[eventKey]))});
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

      let data = this.state.bankData;
      if(this.state.fav){
        data = this.state.favbanks;
      }
      else if (this.state.searching) {
        console.log(this.state.searching)
        data = data.filter(row => {
            return row.bank_name.includes(this.state.search) 
         })
      }
        
    return (
      <div>
        <div className="App-title">Bank Search App</div>
        <div className="form-inline">
          <Dropdown>
          <DropdownButton id="dropdown-item-button" title={this.state.buttonTitle} onSelect={this.handleChange} >
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
