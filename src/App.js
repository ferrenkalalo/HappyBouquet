// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import SplashScreen from './pages/SplashScreen';

// const App = () => {
//   return <SplashScreen />;
// };

// export default App;

// const styles = StyleSheet.create({});

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTabNav from './components/molecules/BottomTabNav';
import Routers from './routers';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
      {/* <BottomTabNav /> */}
    </NavigationContainer>
  );
};

export default App;
