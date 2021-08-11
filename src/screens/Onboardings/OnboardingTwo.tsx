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
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import { TRootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 40,
  },

  imageBanner: {
    marginBottom: 39,
  },

  title: {
    maxWidth: 211,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#09051C',
    textAlign: 'center',
    marginBottom: 20,
  },

  desc: {
    maxWidth: 244,
    fontSize: 12,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 42,
  },

  buttonLinear: {
    borderRadius: 15,
  },

  button: {
    width: 157,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList
>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

const OnboardingTwo = ({ navigation }: MainTabNavigationProps) => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <Image
            style={styles.imageBanner}
            source={Assets._img_onboarding_2}></Image>
          <Text style={styles.title}>Find your Comfort Food here</Text>
          <Text style={styles.desc}>
            Here You Can find a chef or dish for every taste and color. Enjoy!
          </Text>

          <View>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#53E88B', '#15BE77']}
              style={styles.buttonLinear}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('OnboardingThree');
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OnboardingTwo;
