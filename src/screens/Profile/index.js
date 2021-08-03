import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Assets from '../../config/Assets';
import Dish from './components/Dish';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },

  profileBg: {
    width: '100%',
    height: 320,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  profile: {
    paddingTop: 280,
    paddingBottom: 94,
  },

  profileContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  profileBar: {
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBarIcon: {
    width: 58,
    height: 5,
    borderRadius: 12,
    backgroundColor: '#FEF6ED',
  },

  profileMeta: {
    paddingHorizontal: 21,
  },
  profileMembership: {
    width: 111,
    height: 20,
    borderRadius: 18.5,
    height: 34,
    lineHeight: 34,
    backgroundColor: 'rgba(254, 173, 29, 0.1)',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(254, 173, 29, 1)',
    marginBottom: 28,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 27,
    fontWeight: 'bold',
    lineHeight: 35.38,
    color: 'rgba(9, 5, 28, 1)',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    lineHeight: 21,
    color: 'rgba(59, 59, 59, 0.3)',
  },
  profileVoucherWrap: {
    paddingHorizontal: 16,
    height: 64,
    lineHeight: 64,
    borderRadius: 22,
    backgroundColor: '#fff',
    elevation: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileFavoriteTitle: {
    paddingLeft: 13,
    fontWeight: 'bold',
    fontSize: 15,
    color: '#09051C',
    marginBottom: 20,
  },
  profileVoucherIcon: {
    marginRight: 16,
  },
  profileVoucherNotice: {
    fontWeight: 'bold',
    color: 'rgba(9, 5, 28, 1)',
    fontSize: 15,
  },
});

const data = [
  {
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '35',
    avatar: Assets._dish_1,
  },
  {
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '35',
    avatar: Assets._dish_1,
  },
  {
    name: 'Spacy fresh crab',
    desc: 'Waroenk kita',
    price: '35',
    avatar: Assets._dish_1,
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Assets._profile_bg}
        resizeMode="cover"
        style={styles.profileBg}></ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={styles.profileContent}>
            <View style={styles.profileBar}>
              <View style={styles.profileBarIcon}></View>
            </View>

            <View style={styles.profileMeta}>
              <Text style={styles.profileMembership}>Member Gold</Text>

              <View style={styles.profileInfo}>
                <View style={styles.profileInforLeft}>
                  <Text style={styles.profileName}>Anam Wusono</Text>
                  <Text style={styles.profileEmail}>anamwp66@gmail.com</Text>
                </View>

                <TouchableOpacity style={styles.profileEditWrap}>
                  <Image
                    source={Assets._profile_edit_btn}
                    style={styles.profileEditBtn}></Image>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.profileVoucherWrap}>
                <Image
                  style={styles.profileVoucherIcon}
                  source={Assets._profile_voucher_icon}></Image>
                <Text style={styles.profileVoucherNotice}>
                  You Have 3 Voucher
                </Text>
              </TouchableOpacity>

              <Text style={styles.profileFavoriteTitle}>Favorite</Text>

              {data.map((item, index) => {
                return (
                  <Dish
                    key={index}
                    name={item.name}
                    avatar={item.avatar}
                    price={item.price}
                    desc={item.desc}></Dish>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
