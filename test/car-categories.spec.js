import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/client/components/App.jsx';
import CarCategories from '../src/client/components/CarCategories/CarCategories.jsx';
import renderer from 'react-test-renderer';

test('#CarCategoriesComponent', () => {
    const mockCars = [{
        "make_model": "Ford Ka",
        "type": "Compact",
        "provider": "budget",
        "price": 52.02
    }, {
        "make_model": "Ford Kuga",
        "type": "SUV",
        "provider": "budget",
        "price": 81.64
    }, {
        "make_model": "Ford Fiesta",
        "type": "Compact",
        "provider": "enterprise",
        "price": 65.87
    }, {
        "make_model": "Audi A3",
        "type": "Compact",
        "provider": "enterprise",
        "price": 39.59
    }, {
        "make_model": "Audi Q5",
        "type": "SUV",
        "provider": "budget",
        "price": 60.74
    }];
    const carCategories = renderer.create(
        <CarCategories cars={mockCars} />
    );
    let carCategoriesTree = carCategories.toJSON();
    expect(carCategoriesTree).toMatchSnapshot();
});