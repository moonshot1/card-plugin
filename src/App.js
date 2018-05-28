import React, {  PureComponent } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  constructor(props){
    super(props);

    console.log(this.props.parentObj);
  }

  render() {

    const listOfText = this.props.parentObj.map((data, index) => {

        const tx = Object.keys(data).map(function (keyName, keyIndex) {
          return (
            <div className="">
              {data[keyName]}
            </div>
          )
        })  

      return (  
        <div> 
          {tx}
        </div>
      )
    })
    
    return (
      <div className="App">
       { listOfText }
      </div>
    );
  }
}



App.propTypes = {
  parentObj: PropTypes.array.isRequired
}

export default App;
