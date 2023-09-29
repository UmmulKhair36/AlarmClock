import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {Colors} from '../config';
import Header from './Header';
import Images from '../assets/Images';

const AppBackground = ({
  children,
  title,
  back = false,
  nav = '',
  menu = false,
  plusIcon = false,
  heartIcon = false,
  uploadIcon = false,
  infoIcon = false,
  rightIcons = false,
  rightIcons2 = false,
  rightIcons3 = false,
  isFavorite = false,
  onHeartPress = () => {},
  contentContainerStyle,
}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FBFBFC'}}>
      <Header
        title={title}
        back={back}
        nav={nav}
        menu={menu}
        plusIcon={plusIcon}
        heartIcon={heartIcon}
        uploadIcon={uploadIcon}
        infoIcon={infoIcon}
        rightIcons={rightIcons}
        rightIcons2={rightIcons2}
        rightIcons3={rightIcons3}
        onHeartPress={onHeartPress}
        isFavorite={isFavorite}
      />
      <ScrollView
        style={{flex: 1, backgroundColor: Colors.primary}}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[
          {
            flexGrow: 1,
            paddingBottom: 50,
            paddingHorizontal: 20,
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export default AppBackground;
