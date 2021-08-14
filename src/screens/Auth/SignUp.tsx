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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';
import { TRootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 47,
    paddingBottom: 60,
  },

  logo: {
    marginBottom: 60,
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

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#09051C',
    textAlign: 'center',
    marginBottom: 40,
  },

  form: {
    paddingHorizontal: 25,
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
    marginTop: 8,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#09051C',
  },

  loginMethods: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginBottom: 20,
  },

  methodLoginBtnWrap: {
    borderRadius: 15,
    borderColor: 'rgba(244, 244, 244, 1)',
    borderWidth: 1,
    width: '49%',
  },

  methodLoginBtn: {
    height: 57,
    lineHeight: 57,
    color: 'rgba(59, 59, 59, 1)',
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  methodLoginIcon: {
    marginRight: 14,
  },

  forgotPassText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#53E88B',
    color: '#53E88B',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 36,
  },
});

type MainTabNavigationProp = StackNavigationProp<
  TRootStackParamList
>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

const SignUp = ({navigation} : MainTabNavigationProps) => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: "#fff"}} showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.container}
        source={Assets._onboarding_bg}>
        <Image
          style={styles.logo}
          source={Assets._logo}></Image>

        <Text style={styles.title}>Login To Your Account</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
        </View>

        <Text style={styles.desc}>Or Continue With</Text>

        <View style={styles.loginMethods}>
          <View style={styles.methodLoginBtnWrap}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              style={styles.methodLoginBtn}>
              <Image
                style={styles.methodLoginIcon}
                source={Assets._fb_icon}></Image>
              <Text>Facebook</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.methodLoginBtnWrap}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}
              style={styles.methodLoginBtn}>
              <Image
                style={styles.methodLoginIcon}
                source={Assets._google_icon}></Image>
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          style={styles.forgotPassText}>
          Forgot Your Password?
        </Text>

        <View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#53E88B', '#15BE77']}
            style={styles.buttonLinear}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MainTab');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignUp;
