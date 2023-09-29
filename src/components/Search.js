import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts, NavService} from '../config';
import Icons from '../assets/Icons';

export default Search = ({
  onSearch = () => {},
  showFilter = true,
  placeholder = 'What are you looking for?',
}) => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        height: 55,
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.grey,
        alignItems: 'center',
        paddingHorizontal: 15,
      }}>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={Icons.search}
          style={{width: 20, height: 20}}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Colors.darkGrey}
        keyboardType={'default'}
        returnKeyLabel="Search"
        returnKeyType="search"
        onSubmitEditing={() => onSearch(text)}
        onChangeText={text => setText(text)}
        value={text}
        style={{
          flex: 1,
          fontSize: 16,
          fontFamily: Fonts.tomatoRegular,
          marginLeft: 10,
          color: Colors.black,
        }}
      />
      {showFilter && (
        <TouchableOpacity
          onPress={() => NavService.navigate('Filter')}
          activeOpacity={0.8}>
          <Image
            source={Icons.filter}
            style={{width: 20, height: 20}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
