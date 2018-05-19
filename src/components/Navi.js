import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
		}
	}
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll);	
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll);
	}
	onScroll = (e) => {
		if (window.scrollY >= 200 && !this.state.sticky) {
			this.setState({sticky: true});
		} else if (window.scrollY < 200 && this.state.sticky) {
			this.setState({sticky: false});
		}
	}
  render() {
    return (
    <div style={{width:'100%', height:'250px',  display:'flex', flexDirection:'column'}}>
			<div style={{height:'200px', display:'flex', flexDirection:'row'}}>
				<div style={{width:'33%'}}/>
				<div style={{width:'33%', overflow:'hidden'}}>
					<Link to="/"><img width='100%' src='https://www.kw.ac.kr/_res/ko/img/intro/symbol01_06.jpg' alt='Mark'/></Link>
				</div>
			</div>
			{this.state.sticky == false ? 
			<div style={{height:'50px', display:'flex', flexDirection:'row', borderBottom:'1px solid black'}} >
				<div style={{width:'33%', margin:'4px'}}>
					<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PS' }}}> PS4 </Link>
				</div>
				<div style={{width:'33%', margin:'4px'}}>
					<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}}> Nintendo </Link>
				</div>
				<div style={{width:'33%', margin:'4px'}}>
					<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}}> XBOX </Link>
				</div>
				</div>
				:
				<div style={{width: '100%', height:'50px', display:'flex', flexDirection:'row', position:'fixed', top:'0px',
				background:'white', borderBottom:'1px solid black', zIndex:'5'}}>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PS' }}}> PS4 </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}}> Nintendo </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}}> XBOX </Link>
					</div>
				</div>
			}
	  </div>
    );
  }
}

export default Navi;
