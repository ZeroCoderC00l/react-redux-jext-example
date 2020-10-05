import React from 'react';
import { shallow, render, mount } from 'enzyme';
// import { ProductList } from '../../components/ProductList';
import ConnectedProductList from '../../components/ProductList';
import configureStore from 'redux-mock-store';


// it('renders no products when store is empty', () => {
//     const wrapper = shallow(<ProductList products={[]}/>);
//     expect(wrapper.find('product').length).toBe(0);
// });

const mockStore = configureStore();

it('renders no products when store is empty [with Connect to Mock Store]', () => {
    const store = mockStore({products: []});

    const wrapper = shallow(<ConnectedProductList store={store}/>);
    expect(wrapper.find('.product').length).toBe(0);
});

it('renders products [on Render with Connect to Mock Store]', () => {
    const store = mockStore({
        products: [{id: 1, name: "New Product", price: 100, image: ""}]
    });

    const wrapper = render(<ConnectedProductList store={store}/>);
    expect(wrapper.find('.product').length).toBe(1);
});

it('adds a product on Cart [with Mount with Connect to Mock Store]', () => {
    const store = mockStore({
        products: [{id: 1, name: "New Product", price: 100, image: ""}]
    });

    const wrapper = mount(<ConnectedProductList store={store}/>);
    wrapper.find('#product-1 button').simulate('click');

    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions[0].type).toBe('ADD_TO_CART');
    expect(actions[0].products).not.toBeNull();
});