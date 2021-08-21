import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type MainTabParamList = {
  News: undefined;
  Training: undefined;
  HealthTips: undefined;
  Goals: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      
    </Tab.Navigator>
  );
}

export default MainTab;