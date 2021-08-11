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
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Assets from '../../config/Assets';

import LinearGradient from 'react-native-linear-gradient';
import { TRootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 38,
    paddingBottom: 60,
    paddingHorizontal: 25,
    resizeMode: 'contain',
    position: 'relative',
  },

  containerBgImage: {
    top: 0,
    position: 'absolute',
    right: 0,
  },

  logo: {
    marginBottom: 60,
  },

  buttonLinear: {
    borderRadius: 15,
    width: 157,
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

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#09051C',
    textAlign: 'left',
    marginBottom: 19,
    lineHeight: 33,
    width: '100%',
  },

  form: {
    width: '100%',
  },

  input: {
    height: 61,
    lineHeight: 61,
    paddingHorizontal: 18,
    color: 'rgba(59, 59, 59, 1)',
  },

  desc: {
    marginBottom: 40,
    lineHeight: 22,
    fontSize: 12,
    color: '#09051C',
  },

  buttonBackWrap: {
    marginBottom: 20,
  },

  buttonBack: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(249, 168, 77, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  buttonLinearWrap: {
    width: '100%',
    alignItems: 'center',
    marginTop: '27%',
  },

  inputGroup: {
    position: 'relative',
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 22,
  },

  inputIcon: {
    position: 'absolute',
    top: 20,
    right: 18,
    zIndex: 11,
  },

  wrapAll: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList
>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

const ResetPassword = ({ navigation }: MainTabNavigationProps) => {
  return (
    <View style={styles.wrapAll}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.containerBgImage}
            source={Assets._bg_main_img}></Image>

          <View style={styles.buttonBackWrap}>
            <TouchableOpacity style={styles.buttonBack}>
              <Image
                source={Assets._icon_back}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Reset your password here</Text>

          <Text style={styles.desc}>
            Select which contact details should we use to reset your password
          </Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Image
                style={styles.inputIcon}
                source={Assets._eye_icon}></Image>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
            </View>

            <View style={styles.inputGroup}>
              <Image
                style={styles.inputIcon}
                source={Assets._eye_icon}></Image>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
            </View>
          </View>

          <View style={styles.buttonLinearWrap}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#53E88B', '#15BE77']}
              style={styles.buttonLinear}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ResetPassword;
