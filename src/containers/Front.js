import React, { Component } from 'react';
import List from '../components/List';
import Ads from '../components/Ads';

class Front extends Component {
  render() {
    return (
      <div>
        <Ads />
        <List />
        <List />
      </div>
    );
  }
}

export default Front;
