import React, { Component } from 'react';
import styles from './carCategory.scss';
import CarPanel from '../../CarPanel/CarPanel.jsx';

class CarCategory extends Component {
    render() {
        debugger;
        const carsToShow = this.props.cars;

        return <div className="car-category">
            <div className="category-title" >{this.props.categoryName}</div>
            <div className="category-container">
                {carsToShow.map((carToShow, key) => (
                    <CarPanel key={key} car={carToShow} />
                ))}
            </div>
        </div>;
    }
}

module.exports = CarCategory;