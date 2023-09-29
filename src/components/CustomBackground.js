import {ImageBackground, ScrollView, View} from 'react-native';
import React from 'react';
import {Colors} from '../config';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Logo from './Logo';
import Images from '../assets/Images';

function CustomBackground({children, back = true, logo = true}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: getStatusBarHeight(),
        backgroundColor: Colors.primary,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        {logo && <Logo />}
        <View style={{flex: 1}}>{children}</View>
      </ScrollView>
    </View>
  );
}

export default CustomBackground;
