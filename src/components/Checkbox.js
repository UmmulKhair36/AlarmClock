import React from 'react';
import {TouchableOpacity, Image, LayoutAnimation} from 'react-native';
import Icons from '../assets/Icons';
import {Colors} from '../config';

const Checkbox = ({
  isChecked = false,
  containerStyle = {},
  iconStyle = {},
  onPress = () => {},
}) => {
  const [isCheck, setIsCheck] = React.useState(isChecked ? true : false);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        console.log('isCheck', isCheck);
        LayoutAnimation.linear();
        setIsCheck(!isCheck);
        onPress();
      }}
      style={{
        height: 20,
        width: 20,
        borderRadius: 5,
        backgroundColor: Colors.lightGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        ...containerStyle,
      }}>
      {isCheck && (
        <Image
          source={Icons.check}
          style={{
            width: 12,
            height: 12,
            resizeMode: 'contain',
            tintColor: Colors.primary,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
