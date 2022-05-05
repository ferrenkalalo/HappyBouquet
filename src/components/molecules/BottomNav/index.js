import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BottomNav = ({navigation, onPressed, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressed}>
        <Text>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Ribbons')}>
        <Text>RIBBONS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pappers')}>
        <Text>PAPPERS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        <Text>CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    height: 60,
  },
});

// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Card from '../../../pages/SubMenu/Card';
// import Pappers from '../../../pages/SubMenu/Pappers';

// const BottomNav = ({navigation, navigate, title, onPressed}) => {
//   const Ribbons = () => navigation.navigate('Ribbons');

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPressed}>
//         <Text>{title}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={Ribbons}>
//         <Text>RIBBONS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={Pappers}>
//         <Text>PAPPERS</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={Card}>
//         <Text>CARD</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default BottomNav;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#F6F6F6',
//     width: 400,
//     height: 60,
//   },
// });
