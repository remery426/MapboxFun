import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>

      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonStyle: {
    width: '49%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
  }
};

export default Button;
