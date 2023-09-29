import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icons from '../assets/Icons';
import {Colors, Fonts} from '../config';
const {width} = Dimensions.get('window');

export default function CustomTextInput(props) {
  const [showText, setShowText] = useState(props?.isPassword ? true : false);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={{
        width: width - 60,
        height: 55,
        backgroundColor: Colors.background,
        paddingHorizontal: 15,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        borderWidth: 1,
        borderColor: isFocused ? Colors.primary : Colors.darkGrey,
        marginTop: 15,
        ...props.containerStyle,
      }}>
      {props.icon && (
        <Image
          source={props?.icon}
          style={{
            width: 22,
            height: 22,
            resizeMode: 'contain',
            tintColor: Colors.greyText,
            marginRight: 10,
            ...props.iconStyle,
          }}
        />
      )}
      <TextInput
        style={{
          flex: 1,
          color: Colors.black,
          fontSize: 16,
          fontFamily: Fonts.tomatoRegular,
          ...props.inputStyle,
        }}
        placeholderTextColor={Colors.darkGrey}
        secureTextEntry={showText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {props.rightIcon && (
        <TouchableOpacity
          onPress={props.onRightIconPress}
          activeOpacity={0.8}
          style={{
            marginLeft: 10,
          }}>
          <Image
            source={props.rightIcon}
            style={{
              width: 22,
              height: 22,
              resizeMode: 'contain',
              tintColor: Colors.border,
              marginLeft: 10,
              ...props.rightIconStyle,
            }}
          />
        </TouchableOpacity>
      )}
      {props.isPassword && (
        <TouchableOpacity
          onPress={() => setShowText(!showText)}
          activeOpacity={0.8}
          style={{
            marginLeft: 10,
          }}>
          <Image
            source={showText ? Icons.eyeHidden : Icons.eyeShown}
            style={{
              width: 22,
              height: 22,
              resizeMode: 'contain',
              tintColor: Colors.grey,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      )}
      {props.optional && (
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: Colors.darkPink,
              fontFamily: Fonts.tomatoRegular,
            }}>
            (Optional)
          </Text>
        </View>
      )}
    </View>
  );
}
