import React from 'react';
import {render} from '@testing-library/react-native';
import App from './../App';




test('renders correctly', () => {
  const App = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

