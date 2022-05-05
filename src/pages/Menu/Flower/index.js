import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';
import Tester from '../../TESTER';

const BouquetFlower = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'BOUQUET FLOWER'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'GREEN FLOWER'} />
          <WhiteContainer title={'WHITE FLOWER'} />
          <WhiteContainer title={'YELLOW FLOWER'} />
          <WhiteContainer title={'RED FLOWER'} />
          <WhiteContainer title={'BLACK FLOWER'} />
          <WhiteContainer title={'PURPLE FLOWER'} />
          <WhiteContainer title={'PINK FLOWER'} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => navigation.navigate('BouquetFlower')}
        onPressed1={() => navigation.navigate('Ribbons')}
        onPressed2={() => navigation.navigate('Pappers')}
        onPressed3={() => navigation.navigate('Card')}
        title={'FLOWERS'}
      />
    </View>
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
