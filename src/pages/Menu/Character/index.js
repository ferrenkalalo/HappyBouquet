import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';
import ButtomNav from '../../../components/molecules/ButtomNav';
import WhiteContainer from '../../../components/molecules/WhiteContainer';

const BouquetCharacter = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <SubHeader2
          onPress={() => navigation.navigate('HomePage')}
          title={'BOUQUET CHARACTER'}
        />
        <Gap height={40} />
        <View style={styles.container}>
          <WhiteContainer title={'PATRICK STAR'} />
          <WhiteContainer title={'SPONGEBOB'} />
          <WhiteContainer title={'STITCH'} />
          <WhiteContainer title={'MICKEY MOUSE'} />
        </View>
        <ButtomNav />
      </View>
    </ScrollView>
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
