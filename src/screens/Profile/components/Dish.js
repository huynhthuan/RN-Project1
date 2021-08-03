import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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
  price: {
    fontSize: 19,
    color: 'rgba(83, 232, 139, 1)',
    lineHeight: 25,
  },
  buttonLinear: {
    borderRadius: 17.5,
  },
  buyAgainBtn: {
    width: 85,
    height: 29,
  },
  buyAginBtnText: {
    textAlign: 'center',
    color: '#fff',
    lineHeight: 29,
    fontSize: 12,
    fontWeight: 'bold'
  },
});

const Dish = ({name, avatar, price, desc}) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image style={styles.ava} source={avatar} resizeMode="cover"></Image>
        <View style={styles.meta}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#53E88B', '#15BE77']}
          style={styles.buttonLinear}>
          <TouchableOpacity style={styles.buyAgainBtn}>
            <Text style={styles.buyAginBtnText}>Buy Again</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default Dish;
