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

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import { TRootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  wrapAll: {
    flex: 1,
    backgroundColor: '#fff',
  },

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
    height: 57,
    lineHeight: 57,
    borderStyle: 'solid',
    borderColor: 'rgba(244, 244, 244, 1)',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 28,
    color: 'rgba(59, 59, 59, 1)',
    marginBottom: 12,
  },

  desc: {
    marginBottom: 20,
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

  forgotMethods: {
    width: '100%',
  },

  forgotButton: {
    borderRadius: 22,
    elevation: 1,
    marginBottom: 20,
    paddingVertical: 27,
    paddingHorizontal: 23,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  forgotButtonImage: {
    marginRight: 16,
  },

  forgotButtonText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(130, 130, 130, 1)',
    marginBottom: 4,
  },

  forgotDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  forgotDots: {
    marginRight: 14,
  },

  forgotDetailSuggest: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(9, 5, 28, 1)',
  },
});

type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList
>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

const ForgotPassword = ({ navigation }: MainTabNavigationProps) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.containerBgImage}
            source={Assets._bg_main_img}></Image>

          <View style={styles.buttonBackWrap}>
            <TouchableOpacity style={styles.buttonBack}>
              <Image source={Assets._icon_back}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Forgot password?</Text>

          <Text style={styles.desc}>
            Select which contact details should we use to reset your password
          </Text>

          <View style={styles.forgotMethods}>
            <View>
              <TouchableOpacity style={styles.forgotButton}>
                <Image
                  style={styles.forgotButtonImage}
                  source={Assets._forgot_sms_icon}></Image>
                <View>
                  <Text style={styles.forgotButtonText}>Via sms:</Text>
                  <View style={styles.forgotDetail}>
                    <Image
                      style={styles.forgotDots}
                      source={Assets._dots}></Image>
                    <Image
                      style={styles.forgotDots}
                      source={Assets._dots}></Image>
                    <Text style={styles.forgotDetailSuggest}>2714</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.forgotButton}>
                <Image
                  style={styles.forgotButtonImage}
                  source={Assets._forgot_email_icon}></Image>
                <View >
                  <Text style={styles.forgotButtonText}>Via email:</Text>
                  <View style={styles.forgotDetail}>
                    <Image
                      style={styles.forgotDots}
                      source={Assets._dots}></Image>
                    <Text style={styles.forgotDetailSuggest}>@gmail.com</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
    </View >
  );
};

export default ForgotPassword;
