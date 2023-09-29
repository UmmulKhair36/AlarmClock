import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {NavService} from './config';
import {connect} from 'react-redux';
import Images from './assets/Images';

//Screens
import {AuthStack, AppStack} from './containers';

const Stack = createNativeStackNavigator();

class Navigation extends Component {
  state = {
    ready: true,
    // initialRouteName: 'AuthStack',
    initialRouteName: 'AppStack',
  };

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    setTimeout(() => {
      const {userData} = this.props;
      if (userData) {
        this.setState({initialRouteName: 'AppStack'});
      }
      this.setState({ready: true});
    }, 2000);
  }

  render() {
    const {initialRouteName, ready} = this.state;
    if (!ready) return null;
    return (
      <ImageBackground source={Images.background} style={{flex: 1}}>
        <NavigationContainer
          ref={ref => NavService.setTopLevelNavigator(ref)}
          screenOptions={{animation: 'simple_push'}}>
          <Stack.Navigator
            screenOptions={{
              contentStyle: {backgroundColor: 'transparent'},
              animation: 'simple_push',
              headerShown: false,
            }}
            initialRouteName={initialRouteName}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </ImageBackground>
    );
  }
}

function mapStateToProps({user: {userData}}) {
  return {userData};
}

export default connect(mapStateToProps)(Navigation);
