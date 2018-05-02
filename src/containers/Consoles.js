import React, { Component } from 'react';
import List from '../components/List';
import Ads from '../components/Ads';

class Consoles extends Component {
  constructor(props){
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
    }
  }
  render() {
    return (
      <div style={{height:'1000px', display:'flex', flexDirection:'column'}}>
		    <div style={{heigth:'100px'}} >
          <p> { this.state.consoleName } </p>
        </div>
        <Ads />
        <List data={this.state.consoleName}/>
        <List />
	    </div>
    );
  }
}

export default Consoles;
