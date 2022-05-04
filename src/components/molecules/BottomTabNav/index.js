// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import BouquetFlower from '../../../pages/Menu/Flower';
// import Ribbons from '../../../pages/SubMenu/Ribbons';
// import Pappers from '../../../pages/SubMenu/Pappers';
// import Card from '../../../pages/SubMenu/Card';

// const BottomTab = createBottomTabNavigator();

// const BottomTabNav = () => {
//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//         title: false,
//         tabBarLabel: ,
//         tabBarShowLabel: false,
//       }}>
//       <BottomTab.Screen name="BouquetFlower" component={BouquetFlower} />
//       <BottomTab.Screen name="Ribbons" component={Ribbons} />
//       <BottomTab.Screen name="Pappers" component={Pappers} />
//       <BottomTab.Screen name="Card" component={Card} />
//     </BottomTab.Navigator>
//   );
// };

// export default BottomTabNav;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BouquetFlower from '../../../pages/Menu/Flower';
import Ribbons from '../../../pages/SubMenu/Ribbons';
import Pappers from '../../../pages/SubMenu/Pappers';
import Card from '../../../pages/SubMenu/Card';

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="BouquetFlower" component={BouquetFlower} />
      <BottomTab.Screen name="Ribbons" component={Ribbons} />
      <BottomTab.Screen name="Pappers" component={Pappers} />
      <BottomTab.Screen name="Card" component={Card} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({});
