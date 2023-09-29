import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icons from '../assets/Icons';
import {Colors, Fonts, NavService} from '../config';

const {width} = Dimensions.get('window');

const Header = ({
  title,
  back = true,
  menu = true,
  nav = '',
  isFavorite = false,
  plusIcon = true,
  heartIcon = true,
  uploadIcon = true,
  infoIcon = true,
  rightIcons = true,
  rightIcons2 = true,
  rightIcons3 = true,
  onHeartPress = () => {},
}) => {
  const onPress = () => {
    nav.length ? NavService.navigate(nav) : NavService.goBack();
  };
  return (
    <View
      style={{
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        height: 45,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        {back && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={onPress}>
            <Image
              source={Icons.back}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
            <Text
              style={{
                color: Colors.black,
                fontSize: 14,
                fontFamily: Fonts.SfProDisplayMedium,
                textAlign: 'center',
                marginLeft: 10,
                marginRight: 15,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        )}
        {title?.length > 0 && (
          <Text
            style={{
              color: Colors.black,
              fontSize: 22,
              fontFamily: Fonts.SfProDisplayBold,
              // textAlign: 'center',
              // position: 'absolute',
              // left: 0,
              // right: 0,
              // width: width - 40,
            }}>
            {title}
          </Text>
        )}
        {menu && (
          <TouchableOpacity
            style={{marginRight: 15}}
            activeOpacity={0.8}
            onPress={() => {
              NavService.openDrawer();
            }}>
            <Image
              source={Icons.menu}
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      {uploadIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // NavService.navigate('QRScanner');
          }}>
          <Image
            source={Icons.upload}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: Colors.black,
            }}
          />
        </TouchableOpacity>
      )}
      {infoIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // NavService.navigate('QRScanner');
          }}>
          <Image
            source={Icons.info}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: Colors.black,
            }}
          />
        </TouchableOpacity>
      )}
      {plusIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            // NavService.navigate('QRScanner');
          }}>
          <Image
            source={Icons.plus}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: Colors.black,
            }}
          />
        </TouchableOpacity>
      )}
      {heartIcon && (
        <TouchableOpacity activeOpacity={0.8} onPress={onHeartPress}>
          <Image
            source={isFavorite ? Icons.heartFilled : Icons.heart}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              tintColor: isFavorite ? Colors.red : Colors.black,
            }}
          />
        </TouchableOpacity>
      )}
      {rightIcons && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // NavService.navigate('TabStack', {screen: 'Cart'});
            }}>
            <Image
              source={Icons.search}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // NavService.navigate('TabStack', {screen: 'Cart'});
            }}>
            <Image
              source={Icons.notification}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      {rightIcons2 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 50,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity activeOpacity={0.8} onPress={onHeartPress}>
            <Image
              source={isFavorite ? Icons.heartFilled : Icons.heart}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: isFavorite ? Colors.red : Colors.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // NavService.navigate('TabStack', {screen: 'Cart'});
            }}>
            <Image
              source={Icons.upload}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
      {rightIcons3 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 75,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // NavService.navigate('TabStack', {screen: 'Cart'});
            }}>
            <Image
              source={Icons.calendar}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={onHeartPress}>
            <Image
              source={isFavorite ? Icons.heartFilled : Icons.heart}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: isFavorite ? Colors.red : Colors.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              // NavService.navigate('TabStack', {screen: 'Cart'});
            }}>
            <Image
              source={Icons.upload}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                tintColor: Colors.black,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
