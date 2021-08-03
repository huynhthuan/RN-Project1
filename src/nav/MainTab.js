import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as IconlyPack from 'react-native-iconly';

import Home from '../screens/Home/index';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Chat from '../screens/Chat';

const widthScreen = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  btnTab: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTab: {
    width: widthScreen - 32,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 16,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 22,
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 7,
    minHeight: 14,
    minWidth: 14,
    alignItems: 'center',
    justifyContent: 'center',
    top: -3,
    right: -5,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  txtNumberCart: {
    fontSize: 9,
    lineHeight: 12,
    color: '#FFF',
  },
});

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgba(83, 232, 139, 1)',
        inactiveTintColor: 'rgba(83, 232, 139, .5)',
      }}
      tabBar={MyTab}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Home set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.User set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Buy set="bold" color={color} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color}) => <IconlyPack.Chat set="bold" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MyTab = ({state, activeTintColor, inactiveTintColor, navigation}) => {
  let routeNames = state.routeNames;
  let currentIndex = state.index; //index tab dang focus
  const renderContent = (item, color) => {
    switch (item) {
      case 'Home':
        return <IconlyPack.Home set="bold" color={color} key={item} />;
      case 'Profile':
        return <IconlyPack.User set="bold" color={color} key={item} />;
      case 'Cart':
        return (
          <View>
            <IconlyPack.Buy set="bold" color={color} key={item} />
            <View style={styles.badge}>
              <Text style={styles.txtNumberCart}>7</Text>
            </View>
          </View>
        );
      case 'Chat':
        return (
          <View>
            <IconlyPack.Chat set="bold" color={color} key={item} />
            <View style={styles.badge} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.containerTab}>
      {routeNames.map((item, index) => {
        let color =
          currentIndex === index ? activeTintColor : inactiveTintColor;
        return (
          <TouchableOpacity key={index}
            style={styles.btnTab}
            onPress={() => navigation.navigate(item)}>
            {renderContent(item, color)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainTab;
