import React, { Component } from 'react';
import styles from './carPanel.scss';
class CarPanel extends Component {
    render() {

        //conditionally render a discount if present
        let discount = null;
        if (this.props.discount) {
            discount = <div className="discount-panel">Save {this.props.discount}%</div>
        }

        return <div className="car-panel">
            {discount}
            <img className="make-logo" src={this.props.logo}></img>
            <hr className="panel-divider"></hr>
            <div className="car-details">
                <div className="make-model">{this.props.make} {this.props.model}</div>
                <div className="vehicle-type">{this.props.vehicleType}</div>
            </div>
            <div className="price">£{this.props.price}</div>
        </div>;
    }
}

module.exports = CarPanel;