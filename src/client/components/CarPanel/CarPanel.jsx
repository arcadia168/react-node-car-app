import React, { Component } from 'react';
import styles from './carPanel.scss';
class CarPanel extends Component {
    render() {

        //conditionally render a discount if present
        let discount = null;
        if (this.props.car.discount) {
            discount = <div className="discount-panel">Save {this.props.car.discount}%</div>
        }

        return <div className="car-panel">
            {discount}
            <img className="make-logo" src={this.props.car.logo}></img>
            <hr className="panel-divider"></hr>
            <div className="car-details">
                <div className="make-model">{this.props.car.make} {this.props.car.model}</div>
                <div className="vehicle-type">{this.props.car.vehicleType}</div>
            </div>
            <div className="price">£{this.props.car.price}</div>
        </div>;
    }
}

module.exports = CarPanel;