import React, { Component } from 'react';
import styles from './carCategories.scss';
import CarCategory from './CarCategory/CarCategory.jsx';

class CarCategories extends Component {
    render() {

        const cars = this.props.cars;

        //extract cars into 'type' categories using hash map with array of cars in category
        let carCategories = {};
        debugger;
        for (let i = 0; i < cars.length; i++) {
            const currentCar = cars[i];
            const currentCarType = currentCar.type;
            //If this type of car doesn't exist in the hash map, add it
            if (!(currentCarType in carCategories)) {
                carCategories[currentCarType] = [currentCar]
            } else {
                carCategories[currentCarType].push(currentCar);
            }
        }

        //build list of things to render
        var arrayToRender = Object.keys(carCategories).map((carCategory, index) => {
            return (
                <CarCategory categoryName={carCategory} cars={carCategories[carCategory]} />
            )
        })

        //wrapping and adding unique key in order to surpress console warning.
        return <div>
            {arrayToRender.map((element, key) => <div key={key}>{element}</div>)}
        </div>
    }
}

module.exports = CarCategories;