import React, {Component} from 'react';
import {SliderUse} from './SliderUse';
import './App.css';

class App extends Component{

  render(){
  return (
    <div className="App">
    <div className="App-title">Bank Loan Enquiry</div>
      <div>
        <p><font size="5">Enter Loan Amount(in $)</font></p>
        <SliderUse
          initialSize={0}
          minSize={500}
          maxSize={5000}
          />
     </div>
    </div>
  );
}
}

export default App;
