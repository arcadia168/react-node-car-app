import React, { Component } from 'react';
import styles from './addVehicleButton.scss';
class AddVehicleButton extends Component {
    render() {
        return <button className={"add-vehicle-button"} onClick={this.props.action}>{this.props.children}</button>
    }
}

module.exports = AddVehicleButton;