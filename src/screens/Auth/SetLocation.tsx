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

  uploadPreview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  uploadPreviewImage: {
    width: 251,
    height: 260,
    borderRadius: 22,
  },

  locationSelect: {
    borderRadius: 22,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    elevation: 4,
    width: '100%',
    backgroundColor: '#fff',
  },

  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 27,
  },

  locationIcon: {
    marginRight: 14,
  },

  locationTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#09051C',
  },

  locationButton: {
    borderRadius: 15,
    backgroundColor: '#F6F6F6',
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: '500',
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

const SetLocation = ({ navigation }: MainTabNavigationProps) => {
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
                navigation.navigate('UploadPreview');
              }}
              style={styles.buttonBack}>
              <Image
                source={Assets._icon_back}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Set Your Location </Text>

          <Text style={styles.desc}>
            This data will be displayed in your account profile for security
          </Text>

          <View style={styles.locationSelect}>
            <View style={styles.locationHeader}>
              <Image
                style={styles.locationIcon}
                source={Assets._location_icon}></Image>
              <Text style={styles.locationTitle}>Your Location</Text>
            </View>

            <View >
              <TouchableOpacity style={styles.locationButton}>
                <Text >Set Location</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonLinearWrap}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#53E88B', '#15BE77']}
              style={styles.buttonLinear}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUpSuccessNotice');
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

export default SetLocation;
