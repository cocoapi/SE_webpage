import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../actions'
import AddproductModal from './AddproductModal'
import logo from '../media/resource/logo.png'

class Navi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user,
			visible: false,
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
			<div style={{width:'100%', height:'20px', padding:'0px 8px', background:'#4d6c8b', zIndex:'5', position:'fixed', top:'0px', textAlign:'right'}}>
				{
					this.state.user.logged_in ?
					<Link style={{color:'white'}} to='/' onClick={ () => this.props.dispatch(logout()) }> 
						<Icon type='logout'/>로그아웃 
					</Link>
					:
					<Link style={{color:'white'}} to='/Login'> <Icon type='login'/>로그인 </Link>
				}
				{
					this.state.user.logged_in && this.state.user.user.role === true ?
						<Link style={{color:'white'}} to='/Admin'> <Icon type='tool'/> 관리자 기능 </Link>
						:
						<Link style={{color:'white'}} to='/Shopping_Cart'> <Icon type='shopping-cart'/> 장바구니 </Link>
				}
				{
					this.state.user.logged_in && this.state.user.user.role ?
						<AddproductModal/> : null
				}
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
				zIndex:'5', fontSize:'15px', backgroundColor:'#4d6c8b'}}>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/PlayStation', state: { consoleName: 'PlayStation' }}} style={{color:'white'}}> PS4 </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/Nintendo', state: { consoleName: 'Nintendo' }}} style={{color:'white'}}> Nintendo </Link>
					</div>
					<div style={{width:'33%', margin:'4px'}}>
						<Link to={{ pathname: '/XBOX', state: { consoleName: 'XBOX' }}} style={{color:'white'}}> XBOX </Link>
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
