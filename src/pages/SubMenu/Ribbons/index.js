import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';

const Ribbons = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'RIBBONS'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView>
          <WhiteContainer title={'GREEN RIBBON'} />
          <WhiteContainer title={'WHITE RIBBON'} />
          <WhiteContainer title={'BLACK RIBBON'} />
          <WhiteContainer title={'RED RIBBON'} />
          <WhiteContainer title={'PINK RIBBON'} />
          <WhiteContainer title={'YELLOW RIBBON'} />
          <WhiteContainer title={'PURPLE RIBBON'} />
          <WhiteContainer title={'BLUE RIBBON'} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => navigation.navigate('HomePage')}
        title={'CHARCTER'}
      />
    </View>
  );
};

export default Ribbons;

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
