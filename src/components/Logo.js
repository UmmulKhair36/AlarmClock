import React, {Component} from 'react';
import {Image} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Images from '../assets/Images';

export default ({size = 220}) => {
  return (
    <Image
      source={Images.logo}
      style={{
        height: size / 2.5,
        width: size,
        paddingTop: getStatusBarHeight(),
      }}
      resizeMode="contain"
    />
  );
};
