import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Assets from '../../../config/Assets';

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  slideContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 20,
  },

  slideImg: {
    width: widthScreen - 50,
  },

  wrapper: {
    height: 150,
  },
});

const Banner = ({autoplay}) => {
  return (
    <View style={styles.slideContainer}>
      <Swiper
        style={styles.wrapper}
        autoplay={autoplay}
        showsButtons={false}
        paginationStyle={{bottom: 4}}>
        <Image
          style={styles.slideImg}
          source={Assets._promo_banner}
        />
        <Image
          style={styles.slideImg}
          source={Assets._promo_banner}
        />
        <Image
          style={styles.slideImg}
          source={Assets._promo_banner}
        />
      </Swiper>
    </View>
  );
};

export default Banner;
