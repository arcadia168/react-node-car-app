import React, { Component } from 'react';
import CarPanel from './CarPanel/CarPanel.jsx';
import SwitchVehicleButton from './SwitchVehicleButton/SwitchVehicleButton.jsx';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    //explicitly bind hoisted functions to this on lexical scope.
    this.switchCar = this.switchCar.bind(this);

    const defaultCar = {
      discount: 10,
      vehicleType: 'SUV',
      price: '40',
      make_model: 'Honda CRV',
      provider: 'hertz'
    };

    this.state = {
      carToShow: defaultCar
    };
  }

  switchCar() {

    //Get car info
    axios.get('/api/cars')
      .then((response) => {
        let carsFromApi = [];

        //Apply discounts to car prices, if a discount is provided.
        if (response.data.discount_percentage) {
          const discountPercentage = response.data.discount_percentage;

          carsFromApi = response.data.results.map((car) => {
            const discountToSubtract = car.price * (discountPercentage * 0.01);
            const newCarPrice = car.price - discountToSubtract;
            const roundedNewCarPrice = Math.round(newCarPrice * 100) / 100; //Round the new car price to 2 d.p
            car.discount = discountPercentage;
            car.price = roundedNewCarPrice;
            return car;
          })
        } else {
          carsFromApi = response.data.results;
        }

        //Choose a car at random to display between 0 and 4
        let randomCarIndexToShow = Math.floor(Math.random() * 5);

        //Ensure we are not showing the same car as previous click
        let nextCarToShow;
        let sameCarAsLastTime = true;

        //Choose a random car, check that we won't be showing the same car twice.
        do {
          nextCarToShow = carsFromApi[randomCarIndexToShow];

          //If car make and model are same, choose another at random and re-check
          if (this.state.carToShow.make_model == nextCarToShow.make_model) {
              randomCarIndexToShow = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          } else {
            sameCarAsLastTime = false;
          }
        } while (sameCarAsLastTime);

        //Update the UI with the new, randomly chosen car
        this.setState({
          carToShow: nextCarToShow
        })
      })
      .catch(function (error) {
        console.log(error);
      });
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