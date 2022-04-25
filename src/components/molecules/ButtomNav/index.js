import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ButtomNav = () => {
  return (
    <View style={styles.container}>
      <Text>ButtomNav</Text>
      <Text>ButtomNav</Text>
      <Text>ButtomNav</Text>
    </View>
  );
};

export default ButtomNav;

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
