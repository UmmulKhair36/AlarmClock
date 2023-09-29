import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {Colors, Fonts} from '../../config';
import CustomBackground from '../../components/CustomBackground';
import Header from '../../components/Header';

class Login extends Component {
  render() {
    return (
      <CustomBackground>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: Colors.teal,
            }}>
            Login
          </Text>
        </View>
      </CustomBackground>
    );
  }
}

export default Login;
