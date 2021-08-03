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
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
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

  succesImg: {
    marginBottom: 33,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(83, 232, 139, 1)',
    marginBottom: 12,
  },

  desc: {
    fontSize: 23,
    fontWeight: '700',
    color: 'rgba(9, 5, 28, 1)',
    marginBottom: '24%',
  },
});

const SignUpSuccessNotice = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.onboardingBg}
      source={Assets._onboarding_bg}>
      <Image
        style={styles.succesImg}
        source={Assets._succes_img}></Image>
      <Text style={styles.title}>Congrats!</Text>
      <Text style={styles.desc}>Your Profile Is Ready To Use</Text>

      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#53E88B', '#15BE77']}
          style={styles.buttonLinear}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Try Order</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default SignUpSuccessNotice;
