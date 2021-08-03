import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from 'react-native';

import Header from  '../../components/Header';
import Banner from  './components/Banner';
import Assets from '../../config/Assets'
import styles from '../../styles/Home';

const dataFootCat = [
  {
    id: 1,
    name: 'Vegan Resto',
    time: 12,
    img: Assets._vegan_img,
  },
  {
    id: 2,
    name: 'Healthy Food',
    time: 8,
    img: Assets._heathly_img,
  },
  {
    id: 3,
    name: 'Healthy Food 2',
    time: 8,
    img: Assets._heathly_img,
  },
];

const dataMenu = [
  {
    id: 1,
    name: 'Green Noddle',
    desc: 'Noodle Home',
    price: 12,
    img: Assets._noodle_img,
  },
  {
    id: 2,
    name: 'Green Noddle',
    desc: 'Noodle Home',
    price: 12,
    img: Assets._noodle_img,
  },
  {
    id: 3,
    name: 'Green Noddle',
    desc: 'Noodle Home',
    price: 12,
    img: Assets._noodle_img,
  },
];

const Home = ({navigation}) => {
  return (
    <View style={styles.scrollContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground
            source={Assets._bg_main_img}
            resizeMode="cover"
            style={styles.containerBackground}></ImageBackground>
          {/* Header */}
          <Header />

          {/* Search */}
          <View style={styles.searchContainer}>
            {/* Search Input */}
            <Pressable
              onPress={() => {
                navigation.navigate('Filter');
              }}>
              <View style={styles.searchInputContainer}>
                <Image
                  style={styles.searchIcon}
                  source={Assets._icon_search}
                />
                <Text style={styles.searchPlaceholder}>
                  What do you want to order?
                </Text>
              </View>
            </Pressable>
            <View style={styles.filterBtn}>
              <Image source={Assets._icon_filter} />
            </View>
          </View>

          {/* Slide */}
          <Banner autoplay={true}></Banner>

          {/* List Food Cat */}
          <View style={styles.listContainer}>
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>Nearest Restaurant</Text>
              <Text style={styles.listHeaderTextMore}>View More</Text>
            </View>

            <View style={styles.listData}>
              <ScrollView
                horizontal
                contentContainerStyle={{
                  paddingVertical: 20,
                  paddingHorizontal: 4,
                }}
                showsHorizontalScrollIndicator={false}>
                {dataFootCat.map((item, index) => {
                  return (
                    <View style={styles.listItem} key={index}>
                      <Image source={item.img} style={styles.listImg} />
                      <View style={styles.listItemMeta}>
                        <Text style={styles.listItemTitle}>{item.name}</Text>
                        <Text style={styles.listItemTime}>
                          {item.time} Mins
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          {/* List Menu */}
          <View style={styles.listContainer}>
            <View style={[styles.listHeader, styles.mb20]}>
              <Text style={styles.listHeaderText}>Popular Menu</Text>
              <Text style={styles.listHeaderTextMore}>View More</Text>
            </View>

            <View style={styles.listData}>
              {dataMenu.map((item, index) => {
                return (
                  <View
                    style={[styles.listItem, styles.listItemHorizontal]}
                    key={index}>
                    <Image
                      source={item.img}
                      style={[styles.listImg, styles.listImgHorizontal]}
                    />
                    <View
                      style={[
                        styles.listItemMeta,
                        styles.listItemMetaHorizontal,
                      ]}>
                      <View style={styles.listItemDescWrap}>
                        <Text style={styles.listItemTitleHorizontal}>
                          {item.name}
                        </Text>
                        <Text style={styles.listItemDesc}>{item.desc}</Text>
                      </View>

                      <Text style={[styles.listItemPrice, styles.mr10]}>
                        ${item.price}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
