import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AppBackground from '../../components/AppBackground';
import {Colors, Fonts} from '../../config';
import {saveUser} from '../../redux/actions';
import moment from 'moment';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Home = props => {
  ///////////////Current time///////////////////
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []);
  ////////////////////////
  ///////////////////////
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const [selectedDateTimes, setSelectedDateTimes] = useState([]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const dt = new Date(date);
    const x1 = dt.toLocaleDateString();
    setSelectedDate(x1);
    hideDatePicker();
    // Automatically show the time picker after selecting the date
    showTimePicker();
  };

  const handleTimeConfirm = date => {
    const dt = new Date(date);
    const x = dt.toLocaleTimeString();
    setSelectedTime(x);

    if (selectedDate) {
      setSelectedDateTimes([
        ...selectedDateTimes,
        {date: selectedDate, time: x},
      ]);
      setSelectedDate(null);
      setSelectedTime(null);
    }

    hideTimePicker();
  };

  const removeSelectedDateTime = index => {
    const newSelectedDateTimes = [...selectedDateTimes];
    newSelectedDateTimes.splice(index, 1);
    setSelectedDateTimes(newSelectedDateTimes);
  };
  /////////////////////////////
  /////////////////////////////

  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{flex: 0.35}}>
        <View style={{paddingTop: getStatusBarHeight()}}>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              marginLeft: 20,
              fontFamily: Fonts.Light,
            }}>
            Alarm
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              tintColor: 'teal',
            }}
            source={require('../../assets/Icons/clock.png')}></Image>
          <Text
            style={{
              marginTop: 20,
              fontSize: 50,
              color: 'black',
              fontWeight: 'bold',
              fontFamily: Fonts.Light,
              marginBottom: 50,
            }}>
            {currentTime}
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 0.9,
              // justifyContent: 'center',
              // alignItems: 'center',
              marginTop: 40,
              padding: 20,
            }}>
            {selectedDateTimes.map((dateTime, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fffafa',
                  padding: 10,
                  paddingVertical: 10,
                  borderRadius: 5,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: Fonts.Light,
                    fontSize: 23,
                    fontWeight: 'bold',
                  }}>{`${dateTime.time}`}</Text>
                <Text
                  style={{
                    flex: 1,
                    color: 'black',
                    marginLeft: 20,
                  }}>{`${dateTime.date}`}</Text>
                <TouchableOpacity
                  onPress={() => removeSelectedDateTime(index)}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: '#b22222',
                    padding: 10,
                    // borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: Fonts.Light,
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <View style={{flex: 0.15}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => showDatePicker()}
              style={{
                backgroundColor: 'teal',
                width: '50%',
                height: 50,
                // borderWidth: 1,
                // borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{color: 'white', fontFamily: Fonts.Light, fontSize: 20}}>
                {selectedDate && selectedTime
                  ? `${selectedDate}, ${selectedTime}`
                  : 'Add Alarm'}
              </Text>
            </TouchableOpacity>
          </View>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </View>
      </View>
      {/* <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          props.navigation.navigate('timer');
        }}
        style={{
          backgroundColor: 'teal',
          width: '50%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>timer</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
