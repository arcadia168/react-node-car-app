import React, { Component } from 'react';
import CarPanel from './CarPanel/CarPanel.jsx';

class App extends Component {
  render() {
    return <div><CarPanel discount="10" vehicleType="SUV" price="40" make="Honda" model="CRV" logo="/dist/images/hertz-logo.jpg"/></div>;
  }
}

module.exports = App;