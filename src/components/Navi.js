import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
					<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PS' }}}> PS4 </Link>
				</div>
				<div style={{width:'33%', margin:'12px'}}>
					<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}}> Nintendo </Link>
				</div>
				<div style={{width:'33%', margin:'12px'}}>
					<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}}> XBOX </Link>
				</div>
			</div>
	  </div>
    );
  }
}

export default Navi;
