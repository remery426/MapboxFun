import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const ImgButton = ({ onPress, src }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image style = {styles.imageStyle} source = {{uri:src}}/>
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
  imageStyle: {
    margin: 2,
    width: 30,
    height: 30,
  },
  buttonStyle: {
    flex: 1,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    padding: 3
  }
};

export default ImgButton;
