import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Assets from '../../config/Assets';

const styles = StyleSheet.create({
  onboardingBg: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Onboarding = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.onboardingBg}
      source={Assets._onboarding_bg}>
      <Pressable
        onPress={() => {
          navigation.navigate('OnboardingTwo');
        }}>
        <Image
          style={styles.logo}
          source={Assets._logo}></Image>
      </Pressable>
    </ImageBackground>
  );
};

export default Onboarding;
