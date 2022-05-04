import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BottomNav = ({
  navigation,
  onPressed,
  onPressed1,
  onPressed2,
  onPressed3,
  title,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressed}>
        <Text>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressed1}
        //onPress={() => navigation.navigate('Ribbons')}
      >
        <Text>RIBBONS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressed2}
        //onPress={() => navigation.navigate('Pappers')}
      >
        <Text>PAPPERS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressed3}
        //onPress={() => navigation.navigate('Card')}
      >
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
    width: 400,
    height: 60,
  },
});
