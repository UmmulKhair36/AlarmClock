import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../config';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

const theme = {
  calendarBackground: Colors.background,
};

const CustomCalendar = (props, {onDaySelected = () => {}}) => {
  const [markedDatesArray, setMarkedDatesArray] = React.useState(
    props?.selectedDates || [],
  );
  return (
    <Calendar
      theme={theme}
      hideExtraDays={false}
      firstDay={7}
      hideDayNames={false}
      showWeekNumbers={false}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      enableSwipeMonths={true}
      style={{
        overflow: 'hidden',
        borderRadius: 8,
      }}
      onDayPress={day => {
        if (props?.multiselect) {
          const newArray = [...markedDatesArray];
          const index = newArray.findIndex(
            item => item?.dateString === day.dateString,
          );
          if (index === -1) {
            setMarkedDatesArray([...newArray, day]);
            onDaySelected([...newArray, day]);
          } else {
            newArray.splice(index, 1);
            setMarkedDatesArray([...newArray]);
            onDaySelected([...newArray]);
          }
        } else {
          setMarkedDatesArray([day]);
          onDaySelected([day]);
        }

        console.log('markedDatesArray', markedDatesArray);
      }}
      customHeader={({
        onPressArrowLeft,
        onPressArrowRight,
        month,
        addMonth,
      }) => {
        return (
          <View
            style={{
              width: '100%',
            }}>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                marginTop: 15,
              }}>
              <TouchableOpacity
                onPress={() => onPressArrowLeft(() => addMonth(-1))}>
                <View
                  style={{
                    backgroundColor: Colors.orange,
                    borderRadius: 100,
                    padding: 8,
                  }}>
                  <Image
                    source={Icons.next}
                    style={{
                      height: 12,
                      width: 12,
                      transform: [{rotate: '180deg'}],
                      tintColor: Colors.white,
                    }}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  color: Colors.black,
                  fontWeight: '600',
                  marginHorizontal: 25,
                }}>
                {moment(new Date(month)).format('MMMM YYYY')}
              </Text>
              <TouchableOpacity
                onPress={() => onPressArrowRight(() => addMonth(1))}>
                <View
                  style={{
                    backgroundColor: Colors.orange,
                    borderRadius: 100,
                    padding: 8,
                  }}>
                  <Image
                    source={Icons.next}
                    style={{
                      height: 12,
                      width: 12,
                      transform: [{rotate: '0deg'}],
                      tintColor: Colors.white,
                    }}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                justifyContent: 'space-around',
                // marginTop: 10,
                backgroundColor: Colors.lightPantone,
                paddingVertical: 10,
                borderRadius: 8,
                paddingHorizontal: 8,
                marginHorizontal: -5,
              }}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => {
                return (
                  <Text
                    style={{
                      fontSize: 14,
                      color: Colors.primary,
                      fontFamily: Fonts.poppinsBold,
                      fontWeight: '900',
                    }}>
                    {day}
                  </Text>
                );
              })}
            </View>
          </View>
        );
      }}
      dayComponent={({state, date, onPress}) => {
        currentDay = moment(date.timestamp).format('ddd');
        if (state === 'disabled') return null;
        let isSelect = markedDatesArray.find(
          item => item.dateString === date.dateString,
        );

        const isPast = moment(date.timestamp).isBefore(
          moment(new Date()).format(),
        );

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            disabled={
              props?.disableTouch ||
              isPast ||
              state === 'disabled' ||
              currentDay === 'Sun' ||
              currentDay === 'Sat'
            }
            onPress={() => onPress(date)}
            style={{
              backgroundColor: isSelect ? Colors.lightPantone : 'transparent',
              height: 30,
              width: 30,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: isSelect
                  ? Colors.primary
                  : isPast ||
                    state === 'disabled' ||
                    currentDay === 'Sun' ||
                    currentDay === 'Sat'
                  ? Colors.darkGrey
                  : Colors.black,
                fontSize: 14,
                fontFamily: Fonts.poppinsBold,
                fontWeight: '900',
              }}>
              {date.day}
            </Text>
          </TouchableOpacity>
        );
      }}
      {...props}
    />
  );
};

export default CustomCalendar;
