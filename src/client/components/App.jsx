import React, { Component } from 'react';
import CarPanel from './CarPanel/CarPanel.jsx';
import SwitchVehicleButton from './SwitchVehicleButton/SwitchVehicleButton.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    //explicitly bind hoisted functions to this on lexical scope.
    this.switchCar = this.switchCar.bind(this);
    
    const defaultCar = {
      discount: 10,
      vehicleType: 'SUV',
      price: '40',
      make: 'Honda',
      model: 'CRV',
      logo: '/dist/images/hertz-logo.jpg'
    };
    
    this.state = { carToShow: defaultCar };
  }

  switchCar() {

    const newCarToShow = {
      discount: null,
      vehicleType: 'Compact',
      price: '28.50',
      make: 'Ford',
      model: 'Ka',
      logo: '/dist/images/avis-logo.jpg'
    }

    this.setState({
      carToShow: newCarToShow
    })
  }

  render() {
    const carToShow = this.state.carToShow;

    return <div>
      <SwitchVehicleButton action={this.switchCar}>Add Vehicle</SwitchVehicleButton>
      <CarPanel car={carToShow} />
    </div>;
  }
}

module.exports = App;