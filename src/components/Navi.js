import React, { Component } from 'react';

class Navi extends Component {
  render() {
    return (
      <div style={{width:'100%', height:'300px',  display:'flex', flexDirection:'column'}}>
		<div style={{height:'80%', display:'flex', flexDirection:'row'}}>
			<div style={{width:'33%'}}/>
			<div style={{width:'33%', overflow:'hidden'}}>
				<img width='100%' src='https://www.kw.ac.kr/_res/ko/img/intro/symbol01_06.jpg' alt='Mark'/>
			</div>
			<div style={{width:'33%'}}/>
		</div>
		<div style={{height:'20%', display:'flex', flexDirection:'row'}}>
			<div style={{width:'33%', margin:'12px'}}>
				<a href='/'> PS4 </a>
			</div>
			<div style={{width:'33%', margin:'12px'}}>
				<a href='/'> Nintendo </a>
			</div>
			<div style={{width:'33%', margin:'12px'}}>
				<a href='/'> XBOX </a>
			</div>
		</div>
	  </div>
    );
  }
}

export default Navi;
