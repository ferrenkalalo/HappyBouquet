import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SubHeader2 from '../../components/molecules/SubHeader2';
import WhiteContainer from '../../components/molecules/WhiteContainer';
import Button from '../../components/atoms/Button';

const Overall = () => {
  return (
    <View style={styles.page}>
      <View style={styles.coantainer}>
        <WhiteContainer title={'SELECTED FLOWER'} />
        <WhiteContainer title={'SELECTED RIBBON'} />
        <WhiteContainer title={'SELECTED PAPPER'} />
        <WhiteContainer title={'CARD TEXT'} />
      </View>
      <View style={styles.price}>
        <Text>Size S</Text>
        <Text>Size M</Text>
        <Text>Size L</Text>
      </View>
      <View style={styles.done}>
        <Button title={'DONE'} />
      </View>
    </View>
  );
};

export default Overall;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFE2E2',
  },
  coantainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 50,
  },
  done: {
    paddingVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
});
