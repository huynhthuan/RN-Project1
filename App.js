/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Onboarding from './src/screens/Onboardings/Onboarding';
import OnboardingTwo from './src/screens/Onboardings/OnboardingTwo';
import OnboardingThree from './src/screens/Onboardings/OnboardingThree';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import SignUpProgress from './src/screens/Auth/SignUpProgress';
import PaymentMethod from './src/screens/Auth/PaymentMethod';
import UploadPhoto from './src/screens/Upload/UploadPhoto';
import UploadPreview from './src/screens/Upload/UploadPreview';
import SetLocation from './src/screens/Auth/SetLocation';
import SignUpSuccessNotice from './src/screens/Auth/SignUpSuccessNotice';
import VerificationCode from './src/screens/Auth/VerificationCode';
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import ResetPassword from './src/screens/Auth/ResetPassword';
import ResetPasswordSuccessNotice from './src/screens/Auth/ResetPasswordSuccessNotice';
import Filter from './src/screens/Filter/index';

import MainTab from './src/nav/MainTab';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnboardingTwo"
          component={OnboardingTwo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnboardingThree"
          component={OnboardingThree}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpProgress"
          component={SignUpProgress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPhoto"
          component={UploadPhoto}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UploadPreview"
          component={UploadPreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetLocation"
          component={SetLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpSuccessNotice"
          component={SignUpSuccessNotice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordSuccessNotice"
          component={ResetPasswordSuccessNotice}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
