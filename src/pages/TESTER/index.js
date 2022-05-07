import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Tester = () => {
  const [centang, setCentang] = useState(false);

  //
  //constructor(props) {
  // super(props);
  //this.state = {radioButton: 'value1'};
  // const [radioButton, setRadioButton] = useState('');
  //}
  //

  return (
    <View>
      <CheckBox
        disabled={false}
        value={centang}
        onValueChange={newValue => setCentang(newValue)}
        style={styles.checkbox}
      />
      <CheckBox
        disabled={false}
        value={centang}
        onValueChange={newValue => setCentang(newValue)}
        style={styles.checkbox}
      />
      <CheckBox
        disabled={false}
        value={centang}
        onValueChange={newValue => setCentang(newValue)}
        style={styles.checkbox}
      />
    </View>

    // <View>
    //   <CheckBox
    //     title="value1"
    //     checkedIcon="dot-circle-o"
    //     uncheckedIcon="circle-o"
    //     checked={radioButton === 'value1'}
    //     onPress={() => this.setRadioButton({radioButton: 'value1'})}
    //   />
    //   <CheckBox
    //     title="value2"
    //     checkedIcon="dot-circle-o"
    //     uncheckedIcon="circle-o"
    //     checked={radioButton === 'value2'}
    //     onPress={() => this.setRadioButton({radioButton: 'value2'})}
    //   />
    //   <CheckBox
    //     title="value3"
    //     checkedIcon="dot-circle-o"
    //     uncheckedIcon="circle-o"
    //     checked={radioButton === 'value3'}
    //     onPress={() => this.setRadioButton({radioButton: 'value3'})}
    //   />
    //   <CheckBox
    //     title="value4"
    //     checkedIcon="dot-circle-o"
    //     uncheckedIcon="circle-o"
    //     checked={radioButton === 'value4'}
    //     onPress={() => this.setRadioButton({radioButton: 'value4'})}
    //   />
    //   <CheckBox
    //     title="value5"
    //     checkedIcon="dot-circle-o"
    //     uncheckedIcon="circle-o"
    //     checked={radioButton === 'value5'}
    //     onPress={() => this.setRadioButton({radioButton: 'value5'})}
    //   />
    // </View>
  );
};

export default Tester;

const styles = StyleSheet.create({
  checkbox: {
    marginLeft: 10,
  },
});

// constructor(props){
//   super(props);
//   this.state = {radioButton:'value1'};
// }
// render(){
//   return(
//       <View>
//           <CheckBox
//               title='value1'
//               checkedIcon='dot-circle-o'
//               uncheckedIcon='circle-o'
//               checked={this.state.radioButton === 'value1'}
//               onPress={() => this.setState({radioButton: 'value1'})}
//               ></CheckBox>
//           <CheckBox
//               title='value2'
//               checkedIcon='dot-circle-o'
//               uncheckedIcon='circle-o'
//               checked={this.state.radioButton === 'value2'}
//               onPress={() => this.setState({radioButton: 'value2'})}
//               ></CheckBox>
//           <CheckBox
//               title='value3'
//               checkedIcon='dot-circle-o'
//               uncheckedIcon='circle-o'
//               checked={this.state.radioButton === 'value3'}
//               onPress={() => this.setState({radioButton: 'value3'})}
//               ></CheckBox>
//           <CheckBox
//               title='value4'
//               checkedIcon='dot-circle-o'
//               uncheckedIcon='circle-o'
//               checked={this.state.radioButton === 'value4'}
//               onPress={() => this.setState({radioButton: 'value4'})}
//               ></CheckBox>
//           <CheckBox
//               title='value5'
//               checkedIcon='dot-circle-o'
//               uncheckedIcon='circle-o'
//               checked={this.state.radioButton === 'value5'}
//               onPress={() => this.setState({radioButton: 'value5'})}
//               ></CheckBox>

//       </View>
//   );
// }

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import RadioForm, {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel,
// } from 'react-native-simple-radio-button';

// const Tester = ({value}) => {
//   const radio_props = [
//     {label: 'param1', value: 0},
//     {label: 'param2', value: 1},
//   ];
//   value = 0;

//   return (
//     <View>
//       <Text>Tester</Text>
//       <View>
//         <RadioForm
//           radio_props={radio_props}
//           initial={0}
//           onPress={value => {
//             this.setState({value: value});
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// export default Tester;

// const styles = StyleSheet.create({});
