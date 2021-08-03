import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Assets from '../../config/Assets';
import ChatItem from './components/ChatItem';

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

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#09051C',
    textAlign: 'left',
    marginBottom: 19,
    lineHeight: 33,
    width: '100%',
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

  wrapAll: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const data = [
  {
    name: 'Anamwp',
    desc: 'Your Order Just Arrived!',
    time: '20:00',
    ava: Assets._ava_1,
  },
  {
    name: 'Guy Hawkins',
    desc: 'Your Order Just Arrived!',
    time: '20:00',
    ava: Assets._ava_2,
  },
  {
    name: 'Leslie Alexander',
    desc: 'Your Order Just Arrived!',
    time: '20:00',
    ava: Assets._ava_3,
  },
  {
    name: 'Guy Hawkins',
    desc: 'Your Order Just Arrived!',
    time: '20:00',
    ava: Assets._ava_2,
  },
  {
    name: 'Leslie Alexander',
    desc: 'Your Order Just Arrived!',
    time: '20:00',
    ava: Assets._ava_3,
  },
];

const Chat = ({navigation}) => {
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
                navigation.navigate('Home');
              }}
              style={styles.buttonBack}>
              <Image
                style={styles.buttonBackIcon}
                source={Assets._icon_back}></Image>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Chat</Text>

          {data.map((item, index) => {
            return (
              <ChatItem
                key={index}
                name={item.name}
                avatar={item.ava}
                desc={item.desc}
                time={item.time}></ChatItem>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;
