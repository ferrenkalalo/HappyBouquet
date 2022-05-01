import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const BottomNav = ({onPressed}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        //onPress={() => navigation.navigate('BouquetFlower')}
        onPress={onPressed}>
        <Text>BottomNav</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>BottomNav</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>BottomNav</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>BottomNav</Text>
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
