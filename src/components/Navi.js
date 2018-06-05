import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../actions'
import logo from '../media/resource/logo.png'

class Navi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user,
			sticky: false,
		}
	}
	componentDidMount() {
		window.addEventListener("scroll", this.onScroll);	
	}
	componentWillReceiveProps(nextProps){
		this.setState({user: nextProps.user});
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
		<div style={{width:'100%', height:'230px',  display:'flex', flexDirection:'column', backgroundColor:'#4d6c8b'}}>
			<div style={{width:'100%', height:'20px', padding:'0px 8px', background:'white', zIndex:'5', position:'fixed', top:'0px', textAlign:'right', backgroundColor:'whiteSmoke'}}>
				{
					this.state.user.logged_in ?
					<Link style={{color:'white'}} to='/' onClick={ () => this.props.dispatch(logout()) }> 
						<Icon type='logout'/>로그아웃 
					</Link>
					:
					<Link style={{color:'white'}} to='/Login'> <Icon type='login'/>로그인 </Link>
				}
				<Link style={{color:'white'}} to='/Shopping_Cart'> <Icon type='shopping-cart'/>장바구니 </Link>
			</div>
			<div>
				<Row style={{marginTop:'30px'}}>
					<Link to="/"><img width='8%' src={logo} alt='Mark'/></Link>
				</Row>
			</div>
			{this.state.sticky === false ? 
			<div style={{height:'100px', display:'flex', flexDirection:'row', fontSize:'15px', paddingTop:'25px'}} >
				<div style={{width:'32.7%', margin:'4px'}}>
					<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PlayStation' }}} style={{color:'white'}}> PS4 </Link>
				</div>
				<div style={{width:'33%', margin:'4px'}}>
					<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}} style={{color:'white'}}> Nintendo </Link>
				</div>
				<div style={{width:'33%', margin:'4px'}}>
					<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}} style={{color:'white'}}> XBOX </Link>
				</div>
				</div>
				:
				<div style={{width: '100%', height:'50px', display:'flex', flexDirection:'row', position:'fixed', top:'20px',
				zIndex:'5', fontSize:'15px', backgroundColor:'whiteSmoke'}}>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PlayStation' }}} style={{color:'black'}}> PS4 </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}} style={{color:'black'}}> Nintendo </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}} style={{color:'black'}}> XBOX </Link>
					</div>
				</div>
			}
	  </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
	}
}

export default connect(mapStateToProps)(Navi);
