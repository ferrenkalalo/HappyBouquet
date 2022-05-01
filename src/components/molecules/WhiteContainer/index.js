import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Gap from '../../atoms/Gap';

const WhiteContainer = ({title}) => {
  return (
    <View>
      <View style={styles.whitebox}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>descriptions...</Text>
        </View>
      </View>
      <Gap height={25} />
    </View>
  );
};

export default WhiteContainer;

const styles = StyleSheet.create({
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
