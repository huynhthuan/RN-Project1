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
import {createStackNavigator} from '@react-navigation/stack';

import LinearGradient from 'react-native-linear-gradient';
import Assets from '../../config/Assets';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 47,
  },

  logo: {
    marginBottom: 60,
  },

  buttonLinear: {
    borderRadius: 15,
    marginBottom: 20,
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
    paddingLeft: 60,
  },

  desc: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#09051C',
  },

  forgotPassText: {
    textDecorationLine: 'underline',
    textDecorationColor: '#53E88B',
    color: '#53E88B',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 36,
  },

  inputGroup: {
    position: 'relative',
  },

  inputIcon: {
    position: 'absolute',
    top: 17,
    left: 20,
  },

  inputIconEye: {
    position: 'absolute',
    right: 20,
    left: null,
  },

  options: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 43,
  },

  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  checkBoxWrap: {
    marginBottom: 12,
    width: '100%',
  },

  checkBoxIcon: {
    marginRight: 8,
  },

  checkBoxText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
    lineHeight: 20,
  },
});

const SingIn = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        style={styles.container}
        source={Assets._onboarding_bg}>
        <Image
          style={styles.logo}
          source={Assets._logo}></Image>

        <Text style={styles.title}>Sign Up For Free</Text>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Image
              style={styles.inputIcon}
              source={Assets._user_icon}></Image>
            <TextInput
              style={styles.input}
              placeholder="Anamwp . . |"
              placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Image
              style={styles.inputIcon}
              source={Assets._mail_icon}></Image>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
          </View>

          <View style={styles.inputGroup}>
            <Image
              style={styles.inputIcon}
              source={Assets._password_icon}></Image>
            <Image
              style={[styles.inputIcon, styles.inputIconEye]}
              source={Assets._eye_icon}></Image>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(59, 59, 59, 0.3)"></TextInput>
          </View>
        </View>

        <View style={styles.options}>
          <View style={styles.checkBoxWrap}>
            <TouchableOpacity style={styles.checkBox}>
              <Image
                style={styles.checkBoxIcon}
                source={Assets._check_icon}></Image>
              <Text style={styles.checkBoxText}>Keep Me Signed In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkBoxWrap}>
            <TouchableOpacity style={styles.checkBox}>
              <Image
                style={styles.checkBoxIcon}
                source={Assets._check_icon}></Image>
              <Text style={styles.checkBoxText}>
                Email Me About Special Pricing
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#53E88B', '#15BE77']}
            style={styles.buttonLinear}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUpProgress');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <Text
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          style={styles.forgotPassText}>
          Already have an account?
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default SingIn;
