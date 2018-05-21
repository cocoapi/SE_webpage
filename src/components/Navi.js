import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { logout } from '../actions'

class Navi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.currentUser,
			sticky: false,
		}
	}
	componentDidMount() {
		this.state.user.logged_in !== this.props.currentUser.logged_in ? this.props.currentUser
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
		<div style={{width:'100%', height:'20px', padding:'0px 8px', background:'white', zIndex:'5', position:'fixed', top:'0px', textAlign:'right' }}>
			{
				this.state.user.logged_in !== this.props.currentUser.logged_in ?
					this.setState({user: this.props.currentUser}) : null
			}
			{
				this.state.user.logged_in ?
				<Link style={{color:'black'}} to='/' onClick={ () => this.props.userLogout() }> 
					<Icon type='logout'/>로그아웃 
				</Link>
				:
				<Link style={{color:'black'}} to='/Login'> <Icon type='login'/>로그인 </Link>
			}
			<Link style={{color:'black'}} to='/Shopping_Cart'> <Icon type='shopping-cart'/>장바구니 </Link>
		</div>
			<div style={{height:'200px', display:'flex', flexDirection:'row'}}>
				<div style={{width:'33%'}}/>
				<div style={{width:'33%', overflow:'hidden'}}>
					<Link to="/"><img width='100%' src='https://www.kw.ac.kr/_res/ko/img/intro/symbol01_06.jpg' alt='Mark'/></Link>
				</div>
			</div>
			{this.state.sticky === false ? 
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
				<div style={{width: '100%', height:'50px', display:'flex', flexDirection:'row', position:'fixed', top:'20px',
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

const mapDispatchToProps = (dispatch) => {
	return {
		userLogout: () => dispatch(logout())
	};
}

export default connect(state => state, mapDispatchToProps)(Navi);
