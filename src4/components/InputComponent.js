/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput} from 'react-native';
import React from 'react';

const InputComponent = props => {
  console.log('props = ', props);
  const {title, height} = props;
  return (
    <View>
      <Text style={{marginTop: 12, marginBottom: 12}}>{title}</Text>
      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
          height: 50,
          fontSize: 16,
        }}
        {...props}
      />
    </View>
  );
};

export default InputComponent;
