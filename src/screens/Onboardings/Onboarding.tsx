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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import Assets from '../../config/Assets';
import { TMainTabParamList } from '../../nav/MainTab';
import { TRootStackParamList } from '../../../App';

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

type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList
>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

const Onboarding = ({ navigation }: MainTabNavigationProps) => {
  return (
    <ImageBackground
      style={styles.onboardingBg}
      source={Assets._onboarding_bg}>
      <Pressable
        onPress={() => {
          navigation.navigate('OnboardingTwo');
        }}>
        <Image
          source={Assets._logo}></Image>
      </Pressable>
    </ImageBackground>
  );
};

export default Onboarding;
