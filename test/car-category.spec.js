import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/client/components/App.jsx';
import CarCategory from '../src/client/components/CarCategories/CarCategory/CarCategory.jsx';
import renderer from 'react-test-renderer';

test('#CarCategoryComponent', () => {
    const mockCars = [{
        "make_model": "Ford Ka",
        "type": "Compact",
        "provider": "budget",
        "price": 52.02
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
    },];
    const carCategory = renderer.create(
        <CarCategory categoryName="Compact" cars={mockCars} />
    );
    let carCategoryTree = carCategory.toJSON();
    expect(carCategoryTree.children[0].children[0]).toEqual("Compact");
    expect(carCategoryTree).toMatchSnapshot();
});