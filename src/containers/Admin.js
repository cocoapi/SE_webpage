import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Divider} from 'antd';
import { BarChart, Line, linearGradient, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, Bar, LineChart } from 'recharts';
import Subtitle from '../components/Subtitle';
const { Column } = Table;

const chartData =[
  { name: 'PlayStation', Hardware: 1200, Title: 1400 },
  { name: 'Nintendo', Hardware:2000, Title: 1000},
  { name: 'XBOX', Hardware: 1000, Title:500}
]

const chartData2 =[
  { name: '06-01', PS: 1200, Nintendo: 1400, XBOX: 1100 },
  { name: '06-02', PS: 1100, Nintendo: 400, XBOX: 1000 },
  { name: '06-03', PS: 1500, Nintendo: 1500, XBOX: 600 }
]

const data = [{
  key: '1',
  name: 'John Brown',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  address: 'Sidney No. 1 Lake Park',
}];


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      products: [],
      chartData:[],
      users:[],
      recentPurchase:[],
      deleteUser: false
    };
  }
  
  onClickDelete = (e, record) => {
    e.preventDefault();
    axios.delete(`http://mjsong.iptime.org:3001/users/${record.email}`)
    .then( res => {
      console.log(res);

      var data = this.state.users.filter( user => {
        if(user.email !== record.email){
          return user;
        }
      })
      this.setState({users: data})
    })
    .catch( e => {
      console.log(e);
    })
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    axios.get(`http://mjsong.iptime.org:3001/users`)
         .then( res => {
           res.data.map((obj, index) => {
            obj.key = index+1;
            return obj;
          })

          this.setState({users: res.data})
         })
         .catch( e => {
           console.log(e);
         }) // 회원정보 전체 GET
        
    // axios.get('http://mjsong.iptime.org:3001/purchHists/sell') // 최근 5일동안 판매량
    //      .then( res => {
    //         console.log(res.data)
    //      })
    //      .catch( e => {
    //         console.log(e);
    //      })

    axios.get('http://mjsong.iptime.org:3001/products/sell') // 콘솔 별 판매량
         .then(res => {
           var data = [];
           data.push({
             name: 'XOBX',
             Hardware: res.data.XBOX.hardware,
             Title: res.data.XBOX.title
           })
           data.push({
            name: 'PlayStation',
            Hardware: res.data.PlayStation.hardware,
            Title: res.data.PlayStation.title
          })
          data.push({
            name: 'Nintendo',
            Hardware: res.data.Nintendo.hardware,
            Title: res.data.Nintendo.title
          })

          this.setState({chartData: data})
         })
         .catch(e => {
           console.log(e);
         })

         axios.get(`http://mjsong.iptime.org:3001/purchHists/date`)
         .then( res => {
          this.setState({recentPurchase: res.data})
          })
         .catch( e => {
           console.log(e);
         }) // 회원정보 전체 GET
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={20} offset={2}>
            <div style={{backgroundColor:'whiteSmoke'}}>
              <Subtitle title='콘솔 별 판매량'/>
              <Row>
                <Col span={12} offset={4}>
                  <BarChart width={730} height={250} data={this.state.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Hardware" fill="#8884d8" />
                    <Bar dataKey="Title" fill="#82ca9d" />
                  </BarChart>
                </Col>
              </Row>
              <Row style={{paddingTop:'20px'}}>
                <Col span={12} offset={4}>
                  <LineChart width={730} height={250} data={chartData2}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="PS" stroke="#8884d8" />
                      <Line type="monotone" dataKey="Nintendo" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="XBOX" stroke="#FFA500" />
                  </LineChart>
                 </Col>
                </Row>
            </div>
              <div style={{backgroundColor:'whiteSmoke'}}>
                <Subtitle title='최근 판매 내역'/>
                <Row style={{marginTop:'20px'}}>
                  <Col span={20} offset={2}>
                    <Table dataSource={this.state.users}>
                      <Column
                          title='Name'
                          dataIndex='nickname'
                          key='nickname'
                          render={text => <a href="javascript:;">{text}</a>}
                      />
                      <Column
                          title='Address'
                          dataIndex='address'
                          key='address'
                      />
                      <Column
                          title='Action'
                          key='action'
                          render={(text, record) => (
                            <span>
                              <Link to={{pathname: `/OrderedList/${record._id}`}}>주문내역</Link>
                              <Divider type="vertical" />
                              <a href="javascript:;" onClick={(e) => this.onClickDelete(e, record)}>Delete</a>
                              <Divider type="vertical" />
                          </span>)}
                      />
                    </Table>
                  </Col>
                </Row>
              </div>
              <div style={{backgroundColor:'whiteSmoke'}}>
                <Subtitle title='회원 관리'/>
                <Row style={{marginTop:'20px'}}>
                  <Col span={20} offset={2}>
                    <Table dataSource={this.state.users}>
                      <Column
                          title='Name'
                          dataIndex='nickname'
                          key='nickname'
                          render={text => <a href="javascript:;">{text}</a>}
                      />
                      <Column
                          title='Address'
                          dataIndex='address'
                          key='address'
                      />
                      <Column
                          title='Action'
                          key='action'
                          render={(text, record) => (
                            <span>
                              <Link to={{pathname: `/OrderedList/${record._id}`}}>주문내역</Link>
                              <Divider type="vertical" />
                              <a href="javascript:;" onClick={(e) => this.onClickDelete(e, record)}>Delete</a>
                              <Divider type="vertical" />
                          </span>)}
                      />
                    </Table>
                  </Col>
                </Row>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;