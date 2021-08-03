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

  paymentMethods: {
    width: '100%',
    flexDirection: 'column',
  },

  paymenetOptionButton: {
    borderRadius: 22,
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    elevation: 1,
    backgroundColor: '#fff',
  },

  wrapAll: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const PaymentMethod = ({navigation}) => {
  return (
    <View style={styles.wrapAll}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.containerBgImage}
            source={Assets._bg_main_img}></Image>

          <View style={styles.buttonBackWrap}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUpProgress');
              }}
              style={styles.buttonBack}>
              <Image
                style={styles.buttonBackIcon}
                source={Assets._icon_back}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Payment Method</Text>

          <Text style={styles.desc}>
            This data will be displayed in your account profile for security
          </Text>

          <View style={styles.paymentMethods}>
            <View style={styles.paymenetOption}>
              <TouchableOpacity style={styles.paymenetOptionButton}>
                <Image
                  style={styles.paymentIcon}
                  source={Assets._paypal}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.paymenetOption}>
              <TouchableOpacity style={styles.paymenetOptionButton}>
                <Image
                  style={styles.paymentIcon}
                  source={Assets._visa}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.paymenetOption}>
              <TouchableOpacity style={styles.paymenetOptionButton}>
                <Image
                  style={styles.paymentIcon}
                  source={Assets._payonner}></Image>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonLinearWrap}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#53E88B', '#15BE77']}
              style={styles.buttonLinear}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UploadPhoto');
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

export default PaymentMethod;
