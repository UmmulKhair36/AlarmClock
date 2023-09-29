import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height >= 812 || width >= 812);

const isAndroidBezelLess =
  Platform.OS === 'android' && (height >= 700 || width >= 700);

export default {
  isIphoneX,
  isAndroidBezelLess,
  ToolbarHeight: isIphoneX ? 35 : 0,
};
