import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useSelector} from 'react-redux';
import {Colors, Fonts, NavService} from '../index';
import Icons from '../../assets/Icons';
import Logo from '../../components/Logo';
import LinearGradient from 'react-native-linear-gradient';
import ProfileImage from '../../components/ProfileImage';

const menuItems = [
  {
    title: 'Home',
    icon: Icons.home,
    // onPress: () => NavService.navigate('Wishlist'),
  },
  {
    title: 'favourites',
    icon: Icons.favourites,
    // onPress: () => NavService.navigate('TabStack', {screen: 'Cart'}),
  },
  {
    title: 'Password',
    icon: Icons.password,
    // onPress: () => NavService.navigate('Address'),
  },
  {
    title: 'My Courses',
    icon: Icons.courses,
    // onPress: () => NavService.navigate('Orders'),
  },
  {
    title: 'Reminders',
    icon: Icons.reminders,
    // onPress: () => NavService.navigate('Reminders'),
  },
  {
    title: `God's Daily Motivation`,
    icon: Icons.dailyMotivation,
    // onPress: () => NavService.navigate('ReferFriend'),
  },
  {
    title: 'Manage Subscription',
    icon: Icons.subscription,
    // onPress: () => NavService.navigate('Rewards'),
  },
  {
    title: 'Privacy Policy',
    icon: Icons.privacy,
    // onPress: () => NavService.navigate('QRScanner'),
  },
  {
    title: 'Terms & Conditions',
    icon: Icons.terms,
    // onPress: () => NavService.navigate('QRScanner'),
  },
  {
    title: 'Help & Feedback',
    icon: Icons.help,
    // onPress: () => NavService.navigate('QRScanner'),
  },
  {
    title: 'FAQs',
    icon: Icons.faqs,
    // onPress: () => NavService.navigate('QRScanner'),
  },
  {
    title: 'Logout',
    icon: Icons.logout,
    // onPress: () => NavService.navigate('QRScanner'),
  },
];

const {width, height} = Dimensions.get('screen');

const Drawer = () => {
  const user = useSelector(state => state?.user?.userData);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={item?.onPress}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 25,
        }}>
        <Image
          source={item?.icon}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            tintColor: Colors.pink,
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            color: Colors.black,
            fontFamily: Fonts.SfProDisplayRegular,
          }}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: getStatusBarHeight(),
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#d2d2d2',
        paddingBottom: 20,
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => NavService.closeDrawer()}
        style={{
          alignSelf: 'flex-end',
          marginRight: 20,
        }}>
        <Image
          style={{height: 20, width: 20, resizeMode: 'contain'}}
          source={Icons.close}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          start={{x: -0.2, y: 1.5}}
          end={{x: 1.2, y: -0.3}}
          style={{
            height: 110,
            width: width - 40,
            borderRadius: 20,
            marginTop: 20,
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}
          colors={Colors.gradient}>
          <ProfileImage size={85} imageUri={user?.imageUrl} />
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                color: Colors.white,
                fontFamily: Fonts.SfProDisplayRegular,
                fontSize: 28,
              }}>
              {user?.name}
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontFamily: Fonts.SfProDisplayRegular,
                fontSize: 12,
                marginVertical: 2,
              }}>
              {user?.email}
            </Text>
            <Text
              style={{
                color: Colors.white,
                fontFamily: Fonts.SfProDisplayRegular,
                fontSize: 14,
                marginTop: 7,
              }}>
              View And Edit Profile
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={{width: '100%', height: '100%', marginVertical: 10}}
        contentContainerStyle={{alignItems: 'center'}}>
        <View
          style={{
            marginTop: 20,
            width: '80%',
            paddingBottom: 20,
          }}>
          <FlatList
            scrollEnabled={false}
            bounces={false}
            showsVerticalScrollIndicator={false}
            data={menuItems}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
      <Logo size={100} />
    </View>
  );
};

export default Drawer;
