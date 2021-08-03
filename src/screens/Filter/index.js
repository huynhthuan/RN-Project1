import React from 'react';
import Header from '../../components/Header';

import LinearGradient from 'react-native-linear-gradient';

import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../../styles/Filter';
import Assets from '../../config/Assets';

const Section = ({title, data}) => {
  return (
    <View style={styles.filterBox}>
      <View style={styles.filterHeading}>
        <Text style={styles.filterHeadingText}>{title}</Text>
      </View>

      <View style={styles.filterBody}>
        {data.map((item, index) => {
          return (
            <Text key={index} style={styles.filterChossen}>
              {item}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const Filter = () => {
  const dataFilterType = ['Restaurant', 'Menu'];
  const dataFilterLocation = ['1 Km', '>10 Km', '< 10 Km'];
  const dataFilterFood = [
    'Cake',
    'Soup',
    'Main Course',
    'Appetizer',
    'Dessert',
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}

        <Header></Header>

        {/* Search */}
        <View style={styles.searchContainer}>
          {/* Search Input */}
          <View style={styles.searchInputContainer}>
            <Image
              style={styles.searchIcon}
              source={Assets._icon_search}
            />
            <TextInput
              style={styles.searchPlaceholder}
              placeholder=" What do you want to order?"
              placeholderTextColor="#DA6317"></TextInput>
          </View>
        </View>

        {/* Filter list */}
        <Section title="Type" data={dataFilterType}></Section>
        <Section title="Location" data={dataFilterLocation}></Section>
        <Section title="Food" data={dataFilterFood}></Section>

        <View>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#53E88B', '#15BE77']}
            style={styles.filterBtnWrap}>
            <TouchableOpacity style={styles.filterBtn}>
              <Text style={styles.filterBtnText}>Search</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default Filter;
