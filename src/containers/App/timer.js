import {Animated, Text, TouchableOpacity, View} from 'react-native';
import React, {Component, useState} from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import AppBackground from '../../components/AppBackground';
import {Colors, Fonts} from '../../config';
import CustomButton from '../../components/CustomButton';
import moment from 'moment';

const Clock = () => {
  const [key, setKey] = useState(1);

  const [resendActivated, setResendActivated] = useState(false);
  const resend = async () => {
    const status = await resentVerification(email);
    if (status) {
      setKey(key + 1);
      setMsgOTPCode('');
      setResendActivated(false);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <CountdownCircleTimer
          // key={key.toString()}
          isPlaying
          rotation={'anticlockwise'}
          duration={30}
          colors={['teal', 2000]}
          trailColor={'white'}
          size={170}
          strokeWidth={4}
          strokeLinecap="round"
          // initialRemainingTime={'01:00'}
          onComplete={() => setResendActivated(true)}>
          {({remainingTime}) => (
            <TouchableOpacity
              disabled={!resendActivated}
              onPress={resend}
              style={{
                height: '95%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                width: '95%',
                borderRadius: 200,
              }}>
              {resendActivated ? (
                <Text
                  style={{
                    color: Colors.teal,
                    fontStyle: Fonts.poppinsMedium,
                    fontSize: 24,
                  }}>
                  00:00
                </Text>
              ) : (
                <Animated.Text
                  style={{
                    color: Colors.teal,
                    fontStyle: Fonts.poppinsMedium,
                    fontSize: 24,
                  }}>
                  00:{remainingTime}
                </Animated.Text>
              )}
            </TouchableOpacity>
          )}
        </CountdownCircleTimer>
      </View>
      <CustomButton
        onPress={resend}
        buttonStyle={{
          width: '40%',
          backgroundColor: 'teal',
        }}
        title={'Resend'}
      />
    </View>
  );
};

export default Clock;
