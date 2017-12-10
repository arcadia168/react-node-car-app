import React, { Component } from 'react';
import styles from './carPanel.scss';

class CarPanel extends Component {
    render() {

        //Conditionally render a discount if present
        let discount = null;
        if (this.props.car.discount) {
            discount = <div className="discount-panel">Save {this.props.car.discount}%</div>
        }

        //Generate the logo img src url using car provider
        const carProviderLogo = `/dist/images/${this.props.car.provider}-logo.jpg`;

        const panelStyles = ["car-panel"];
        //Check animation state on re-render
        const hide = null;
        if (this.props.hide == true) {
            panelStyles.push('hide');
        } else {
            panelStyles.push('show');
        }

        return <div className={panelStyles.join(' ')}>
            {discount}
            <img className="rental-provider" src={carProviderLogo}></img>
            <hr className="panel-divider"></hr>
            <div className="car-details">
                <div className="make-model">{this.props.car.make_model}</div>
                <div className="vehicle-type">{this.props.car.type}</div>
            </div>
            <div className="price">£{this.props.car.price}</div>
        </div>;
    }
}

module.exports = CarPanel;