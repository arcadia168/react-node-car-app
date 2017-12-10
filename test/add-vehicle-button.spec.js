import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/client/components/App.jsx';
import AddVehicleButton from '../src/client/components/AddVehicleButton/AddVehicleButton.jsx';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({
    adapter: new Adapter()
});

test('#AddVehicleButtonComponent', () => {
    const mockCallBack = jest.fn();
    const button = shallow((<AddVehicleButton action={mockCallBack}>Test Add Vehicle Button</AddVehicleButton>));
    expect(button.text()).toEqual('Test Add Vehicle Button');   
});