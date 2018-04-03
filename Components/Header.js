import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style = {styles.viewStyle}>
      <Text style={styles.textStyle}>
        Seattle Tour
      </Text>
    </View>
  );
};
const styles = {
  textStyle : {
    fontSize: 26,
  },
  viewStyle : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export default Header;
