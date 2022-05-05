import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import WhiteContainer from '../../../components/molecules/WhiteContainer';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';

const BouquetMoney = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'BOUQUET MONEY'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView>
          <WhiteContainer title={'Pecahan Rp. 10.000'} />
          <WhiteContainer title={'Pecahan Rp. 20.000'} />
          <WhiteContainer title={'Pecahan Rp. 50.000'} />
          <WhiteContainer title={'Pecahan Rp. 100.000'} />
          <WhiteContainer title={'Pecahan Rp. 10.000'} />
          <WhiteContainer title={'Pecahan Rp. 20.000'} />
          <WhiteContainer title={'Pecahan Rp. 50.000'} />
          <WhiteContainer title={'Pecahan Rp. 100.000'} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => navigation.navigate('BouquetMoney')}
        title={'MONEY'}
      />
    </View>
  );
};

export default BouquetMoney;

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
