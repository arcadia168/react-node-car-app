import React from 'react';
import { shallow } from 'enzyme';
import AddVehicleButton from '../src/client/components/AddVehicleButton/AddVehicleButton.jsx';
import renderer from 'react-test-renderer';

test('#AddVehicleButtonComponent', () => {
    const mockCallback = jest.fn();
    const addVehicleButton = renderer.create(
        <AddVehicleButton action={mockCallback}>Test Add Vehicle</AddVehicleButton>
    );
    let addVehicleButtonTree = addVehicleButton.toJSON();
    expect(addVehicleButtonTree).toMatchSnapshot();

    //manually trigger callback
    addVehicleButtonTree.props.onClick()
    expect(mockCallback).toHaveBeenCalled()
});