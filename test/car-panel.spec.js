import React from 'react';
import { shallow } from 'enzyme';
import CarPanel from '../src/client/components/CarPanel/CarPanel.jsx';
import renderer from 'react-test-renderer';

test('#CarPanelComponent', () => {
    const mockCar = {
        "make_model": "Ford Ka",
        "type": "Compact",
        "provider": "budget",
        "price": 52.02
    };
    const carCategories = renderer.create(
        <CarPanel car={mockCar} />
    );
    let carPanelTree = carCategories.toJSON();
    expect(carPanelTree).toMatchSnapshot();
});