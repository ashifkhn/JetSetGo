/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import { Alert } from 'react-native';



function App(): JSX.Element {
  return (
    <StackNavigator/>
  );
}

export default App;
