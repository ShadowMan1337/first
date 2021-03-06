import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Import React Tableimport ReactTable from "react-table";
import "react-table/react-table.css";


class table extends Component
 {  constructor(){    
 	super();  
    this.state =  {     
     	data: [],    
      	firstName: "", 
        lastName: ""  
          }; 
     }

   handleChange = event => { 
      if (event.target.name === "firstName") 
           this.setState({ firstName: event.target.value }); 
              if (event.target.name === "lastName")  
                  this.setState({ lastName: event.target.value }); 
       };

   handleSubmit = event => { 
      event.preventDefault();
     };

     renderEditable = cellInfo => { 
        return (     
         <div  style={{ backgroundColor: "#fafafa" }}  
               contentEditable    
               suppressContentEditableWarning   
               onBlur={e = { 
                	const data = [...this.state.data];
                	data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;  
                    this.setState({ data });
                }}
               dangerouslySetInnerHTML={{ 
                __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }} />  
      );
   };

   render() { 
      const { data } = this.state;
      return (    
        <div className="App"> 
               <header className="App-header">         
                <img src={logo} className="App-logo" alt="logo" />       
                   <h1 className="App-title">Welcome to React</h1>      
               </header>    
               <p className="App-intro">  
               <form onSubmit={this.handleSubmit}>  
                 <h3>Add new record</h3> 
                 <label>            
                 FirstName:          
                 <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}  
                 />           
                 </label>{" "}
                 <label>LastName:<input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}
                 />
                 </label> 
                 <input type="submit" value="Add" />     
                  </form></p><div>        
                  <ReactTable data={data}         
                       columns={[{                
                       	Header: "First Name",              
						accessor: "firstName",   
						Cell: this.renderEditable 
		             },          
                     {  Header: "Last Name",
                        accessor: "lastName",         
                        Cell: this.renderEditable 
                     },    
                     {             
                        Header: "Full Name",
                        id: "full",   

                        accessor: d => (  
                           <div  dangerouslySetInnerHTML={{ __html: d.firstName + " " + d.lastName }} />           
                          ) 
                     }   
               ]}           
                defaultPageSize={10}          
  			   className="-striped -highlight" 
                	/>       
              </div> 
          </div>   
         ); 
    }
}

export default table;