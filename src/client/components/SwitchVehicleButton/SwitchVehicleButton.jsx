import React, { Component } from 'react';
import styles from './switchVehicleButton.scss';
class SwitchVehicleButton extends Component {
    render() {
        return <button className={"switch-vehicle-button"} onClick={this.props.action}>{this.props.children}</button>
    }
}

module.exports = SwitchVehicleButton;