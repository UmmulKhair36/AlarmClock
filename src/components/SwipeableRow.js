import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Icons from '../assets/Icons';
import {Colors} from '../config';

function SwipeableRow({
  item,
  renderVisibleComponent = () => {},
  height = 150,
  onDelete = () => {},
  style = {},
}) {
  const [visible, setVisible] = useState(false);
  return (
    <SwipeRow
      style={{marginTop: 15, ...style}}
      stopLeftSwipe
      disableRightSwipe
      rightOpenValue={-105}
      onSwipeValueChange={e => {
        if (e.value < -70) {
          setVisible(true);
        } else if (e.value > -10) setVisible(false);
      }}>
      {renderHiddenComponent({item, visible, height, onDelete})}
      {renderVisibleComponent(item)}
    </SwipeRow>
  );
}

export default SwipeableRow;

function DeleteButton({onDelete}) {
  return (
    <View
      style={{
        height: '100%',
        width: 100,
        alignItems: 'flex-end',
        justifyContent: 'center',
        alignSelf: 'flex-end',
      }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onDelete}
        style={{
          backgroundColor: Colors.redBackground,
          height: 85,
          width: 85,
          borderRadius: 30,
          marginRight: 20,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
        }}>
        <Image
          source={Icons.cross}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
            tintColor: Colors.red,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function renderHiddenComponent({item, visible, height, onDelete}) {
  if (!visible) return <View></View>;
  return (
    <View style={{height: '100%', justifyContent: 'center'}}>
      <DeleteButton item={item} onDelete={onDelete} />
    </View>
  );
}
