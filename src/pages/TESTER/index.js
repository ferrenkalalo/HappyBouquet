import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Tester = () => {
  const [centang, setCentang] = useState(false);

  return (
    <View>
      <CheckBox
        disabled={false}
        value={centang}
        onValueChange={newValue => setCentang(newValue)}
        style={styles.checkbox}
      />
    </View>
  );
};

export default Tester;

const styles = StyleSheet.create({
  checkbox: {
    marginLeft: 10,
  },
});
