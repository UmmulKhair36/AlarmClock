import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Colors, Devices, NavService} from '../config';
import Icons from '../assets/Icons';

const routes = [
  {name: 'DrawerStack', icon: Icons.newsFeed},
  {name: 'Messages', icon: Icons.chat},
  {name: 'Notifications', icon: Icons.bell},
  {name: 'Profile', icon: Icons.profile},
];

export default function BottomTabs() {
  return (
    <View
      style={{
        padding: Devices.isIphoneX ? 20 : 10,
        paddingTop: 10,
        backgroundColor: Colors.white,
      }}>
      <View
        style={{
          backgroundColor: Colors.primary,
          flexDirection: 'row',
          overflow: 'hidden',
          borderRadius: 10,
          paddingHorizontal: 20,
        }}>
        {routes.map((route, index) => {
          const isFocused = index === 0;
          const onPress = () => {
            NavService.navigate(route.name);
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={{
                flex: 1,
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <View
                style={{
                  height: 45,
                  width: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={route.icon}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: Colors.white,
                  }}
                  resizeMode="contain"
                />
              </View>
              {isFocused ? (
                <View
                  style={{
                    width: 45,
                    height: 2,
                    borderRadius: 16,
                    backgroundColor: Colors.white,
                    position: 'absolute',
                    bottom: 5,
                  }}
                />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
