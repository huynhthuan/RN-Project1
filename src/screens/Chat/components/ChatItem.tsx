import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: '#fff',
    elevation: 1,
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  ava: {
    borderRadius: 16,
    marginRight: 18,
  },
  meta: {
    marginRight: 27,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#09051C',
    marginBottom: 8,
    lineHeight: 20,
  },
  desc: {
    fontSize: 14,
    color: 'rgba(59, 59, 59, .3)',
    lineHeight: 14,
  },
  time: {
    fontSize: 14,
    color: 'rgba(59, 59, 59, .3)',
    lineHeight: 14,
    height: '100%',
    alignContent: 'flex-start',
    marginTop: 10,
  },
});

type IChatItem = {
  name: string;
  avatar: ImageSourcePropType;
  time: string;
  desc: string;
}

const ChatItem = ({ name, avatar, time, desc }: IChatItem) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image style={styles.ava} source={avatar} resizeMode="cover"></Image>
        <View style={styles.meta}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
