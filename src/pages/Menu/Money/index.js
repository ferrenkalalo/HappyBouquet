import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SubHeader2 from '../../../components/molecules/SubHeader2';
import Gap from '../../../components/atoms/Gap';

const BouquetMoney = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <SubHeader2
          onPress={() => navigation.navigate('HomePage')}
          title={'BOUQUET MONEY'}
        />
        <Gap height={40} />
        <View style={styles.container}>
          <View>
            <View style={styles.whitebox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Pecahan Rp. 10.000</Text>
                <Text style={styles.subtitle}>descriptions...</Text>
              </View>
            </View>
            <Gap height={25} />

            <View style={styles.whitebox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Pecahan Rp. 20.000</Text>
                <Text style={styles.subtitle}>descriptions...</Text>
              </View>
            </View>
            <Gap height={25} />

            <View style={styles.whitebox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Pecahan Rp. 50.000</Text>
                <Text style={styles.subtitle}>descriptions...</Text>
              </View>
            </View>
            <Gap height={25} />

            <View style={styles.whitebox}>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>Pecahan Rp. 100.000</Text>
                <Text style={styles.subtitle}>descriptions...</Text>
              </View>
            </View>
            <Gap height={25} />
          </View>
        </View>
        <View style={styles.bar}>
          <Text>-</Text>
        </View>
      </View>
    </ScrollView>
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
  },
  bar: {
    flex: 0.12,
    backgroundColor: '#F6F6F6',
  },
  whitebox: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    width: 320,
    height: 107,
  },
  textWrapper: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
  title: {
    color: 'black',
    fontSize: 17,
  },
  subtitle: {
    paddingTop: 20,
    color: 'grey',
    fontSize: 16,
  },
});
