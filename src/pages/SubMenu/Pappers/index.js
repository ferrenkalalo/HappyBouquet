import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import BottomNav from '../../../components/molecules/BottomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';

const Pappers = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader2
        onPress={() => navigation.navigate('HomePage')}
        title={'PAPPERS'}
      />
      <Gap height={15} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <WhiteContainer title={'GREEN PAPPERS'} />
          <WhiteContainer title={'WHITE PAPPERS'} />
          <WhiteContainer title={'BLACK PAPPERS'} />
          <WhiteContainer title={'RED PAPPERS'} />
          <WhiteContainer title={'PINK PAPPERS'} />
          <WhiteContainer title={'YELLOW PAPPERS'} />
          <WhiteContainer title={'PURPLE PAPPERS'} />
          <WhiteContainer title={'BLUE PAPPERS'} />
        </ScrollView>
      </View>
      <BottomNav
        onPressed={() => {
          navigation.goBack();
        }}
        title={'BACK'}
      />
    </View>
  );
};

export default Pappers;

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
