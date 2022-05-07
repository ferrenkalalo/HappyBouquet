import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Routers from './routers';
import FlashMessage from 'react-native-flash-message';
import Tester from './pages/TESTER';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
      <FlashMessage position="top" />
    </NavigationContainer>
    // <Tester />
  );
};

export default App;
