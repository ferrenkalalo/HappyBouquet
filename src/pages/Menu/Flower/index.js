import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import ButtomNav from '../../../components/molecules/ButtomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';

const BouquetFlower = ({navigation}) => {
  return (
    // <ScrollView style={styles.page}>
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'BOUQUET FLOWER'}
      />
      <Gap height={40} />
      <View style={styles.container}>
        <WhiteContainer title={'GREEN FLOWER'} />
        <WhiteContainer title={'WHITE FLOWER'} />
        <WhiteContainer title={'YELLOW FLOWER'} />
        <WhiteContainer title={'RED FLOWER'} />
      </View>
      <ButtomNav onPressed={() => navigation.navigate('HomePage')} />
    </View>
    // </ScrollView>
  );
};

export default BouquetFlower;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE2E2',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingTop: 30,
    justifyContent: 'center',
  },
});
