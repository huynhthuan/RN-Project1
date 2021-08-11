import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Assets from '../../config/Assets';
import { TMainTabParamList } from '../../nav/MainTab';
import ItemCart from './components/ItemCart';

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

  footerList: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
});

type MainTabNavigationProp = StackNavigationProp<TMainTabParamList, 'Home'>;

type MainTabNavigationProps = {
  navigation: MainTabNavigationProp;
};

export interface IProduct {
  id: number;
  name: string;
  image: ImageSourcePropType;
  desc: string;
  price: number;
}

const dataProduct: IProduct[] = [
  {
    id: 1,
    name: 'Spacy fresh crab',
    image: Assets._dish_1,
    desc: 'Waroenk kita',
    price: 35,
  },
  {
    id: 2,
    name: 'Spacy fresh crab',
    image: Assets._dish_1,
    desc: 'Waroenk kita',
    price: 35,
  },
  {
    id: 3,
    name: 'Spacy fresh crab',
    image: Assets._dish_1,
    desc: 'Waroenk kita',
    price: 35,
  },
  {
    id: 4,
    name: 'Spacy fresh crab',
    image: Assets._dish_1,
    desc: 'Waroenk kita',
    price: 35,
  },
  {
    id: 5,
    name: 'Spacy fresh crab',
    image: Assets._dish_1,
    desc: 'Waroenk kita',
    price: 35,
  },
];

const Cart = ({ navigation }: MainTabNavigationProps) => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [dataCart, setDataCart] = React.useState<IProduct[]>(dataProduct);
  const [isLoadMore, setIsLoadMore] = React.useState<boolean>(false);
  return (
    <View style={styles.wrapAll}>
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
            <Image source={Assets._icon_back}></Image>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Order details</Text>

        <FlatList style={{ width: '100%' }}
          data={dataCart}
          renderItem={({ item }) => <ItemCart item={item}></ItemCart>}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setDataCart(dataProduct);
              setRefreshing(false);
            }, 2000)
          }}
          onEndReachedThreshold={0.5}
          onEndReached={
            () => {
              setIsLoadMore(true);
              setTimeout(() => {
                setDataCart(prev => prev.concat(dataProduct));
                setIsLoadMore(false);
              }, 500)
            }
          }
          ListFooterComponent={() => {
            return (
              <View style={styles.footerList}>
                {!!isLoadMore && <ActivityIndicator color="#15BE77"></ActivityIndicator>}
              </View>
            )
          }}
        ></FlatList>
      </View>
    </View>
  );
};

export default Cart;
