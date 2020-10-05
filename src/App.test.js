import React from 'react';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
// import Title from './components/Title';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

// it('renders product list', () => {
//   const wrapper = mount(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   expect(wrapper.find('ul.products').length).toBe(1);
// });

// const title = 'Test Title';
// let wrapped = shallow(<Title>{title}</Title>);
// describe('Title', () => {
//   it('should render the Title Component correctly', () => {   
//     expect(wrapped).toMatchSnapshot();
//   });
//   it('renders the Titles children', () => { 
//     expect(wrapped.find('h1').text()).toEqual(title);
//   });
// });
