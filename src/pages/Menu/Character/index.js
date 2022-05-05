import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';

const BouquetCharacter = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'BOUQUET CHARACTER'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'PATRICK STAR'} />
          <WhiteContainer title={'SPONGEBOB'} />
          <WhiteContainer title={'STITCH'} />
          <WhiteContainer title={'MICKEY MOUSE'} />
          <WhiteContainer title={'PATRICK STAR'} />
          <WhiteContainer title={'SPONGEBOB'} />
          <WhiteContainer title={'STITCH'} />
          <WhiteContainer title={'MICKEY MOUSE'} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => navigation.navigate('BouquetCharacter')}
        title={'CHARCTER'}
      />
    </View>
  );
};

export default BouquetCharacter;

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
