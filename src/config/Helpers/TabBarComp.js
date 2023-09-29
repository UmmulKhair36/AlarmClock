import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  LayoutAnimation,
  Dimensions,
} from 'react-native';
import Colors from '../Colors';
import Icons from '../../assets/Icons';
import NavService from './NavService';

const {width} = Dimensions.get('window');

const routes = [
  {
    name: 'HomeStack',
    icon: Icons.warriorsPrograms,
    iconsGlow: Icons.warriorsProgramsGlow,
  },
  {
    name: 'HomeStack1',
    icon: Icons.warriorsExercise,
    iconsGlow: Icons.warriorsExerciseGlow,
  },
  {
    name: 'HomeStack2',
    icon: Icons.motivation,
    iconsGlow: Icons.motivationGlow,
  },
  {
    name: 'HomeStack3',
    icon: Icons.warriorsCommunity,
    iconsGlow: Icons.warriorsCommunityGlow,
  },
  {
    name: 'HomeStack4',
    icon: Icons.warriorsMeal,
    iconsGlow: Icons.warriorsMealGlow,
  },
];

const TabBarComp = ({state}) => {
  const [keyboardOpen, setKeyboardOpen] = React.useState(false);
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        LayoutAnimation.linear();
        setKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        LayoutAnimation.linear();
        setKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  if (keyboardOpen) return null;

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        position: 'absolute',
        width: width - 40,
        alignSelf: 'center',
        bottom: 25,
      }}>
      <View
        style={{
          backgroundColor: Colors.white,
          flexDirection: 'row',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 30,
          height: 90,
        }}>
        {routes.map((route, index) => {
          const isFocused = state.index === index;
          const onPress = () => NavService.navigate(route.name);
          return (
            <TouchableOpacity
              key={index}
              disabled={isFocused}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              activeOpacity={0.8}
              onPress={onPress}
              style={styles.tabs}>
              {isFocused ? (
                <Image
                  source={route.iconsGlow}
                  style={{
                    height: 80,
                    width: 80,
                    // tintColor: Colors.black,
                  }}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={route.icon}
                  style={{
                    height: 35,
                    width: 35,
                    tintColor: Colors.black,
                  }}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default TabBarComp;
const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    // paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
