import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RibbonNav, PapperNav, CardNav} from '../../../assets/images';

const BottomNav = ({navigation, onPressed, title, navImage}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressed}>
        {/* <Text>{title}</Text> */}
        <Image source={navImage} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Ribbons')}>
        {/* <Text>RIBBONS</Text> */}
        <Image source={RibbonNav} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Pappers')}>
        {/* <Text>PAPPERS</Text> */}
        <Image source={PapperNav} style={styles.imageNav} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Card')}>
        {/* <Text>CARD</Text> */}
        <Image source={CardNav} style={styles.imageNav} />
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

  imageNav: {
    height: 45,
    width: 45,
  },
});
