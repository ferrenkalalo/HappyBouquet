import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SubHeader from '../../components/molecules/SubHeader';
import Gap from '../../components/atoms/Gap';
import {HomeFlower, HomeIcon} from '../../assets';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SubHeader onPress={() => navigation.navigate('ProfilePage')} />
      <Gap height={30} />
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BouquetFlower')}
            activeOpacity={0.8}>
            <View style={styles.container}>
              <View style={styles.TextWrapper}>
                <Text style={styles.text}>BOUQUET FLOWER</Text>
                <Text>Start from 75k</Text>
              </View>
            </View>
            <Gap height={30} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('BouquetCharacter')}
          activeOpacity={0.8}>
          <View style={styles.container2}>
            <View style={styles.TextWrapper}>
              <Text style={styles.text}>BOUQUET CHARACTER</Text>
              <Text>Start from 75k</Text>
            </View>
          </View>
        </TouchableOpacity>

        <Gap height={30} />
        <TouchableOpacity
          onPress={() => navigation.navigate('BouquetMoney')}
          activeOpacity={0.8}>
          <View style={styles.container}>
            <View style={styles.TextWrapper}>
              <Text style={styles.text}>BOUQUET MONEY</Text>
              <Text>Start from 75k</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 170,
    width: 320,
    backgroundColor: '#FFE2E2',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 7,
  },
  container2: {
    height: 170,
    width: 320,
    backgroundColor: '#FFC7C7',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 7,
  },
  TextWrapper: {
    width: 160,
    padding: 15,
  },
  text: {
    // paddingHorizontal: 10,
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
});
