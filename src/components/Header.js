import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import Assets from '../config/Assets';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 18,
  },

  headerText: {
    fontSize: 31,
    color: '#09051C',
    fontWeight: 'bold',
  },

  notiBtn: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#FAFDFF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Find Your {'\n'}Favorite Food</Text>
      <View style={styles.notiBtn}>
        <Image source={Assets._icon_notifiaction} />
      </View>
    </View>
  );
};

export default Header;
