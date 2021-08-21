import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding';

export type RootStackParamList = {
    ProWelcome: undefined;
    Onboarding: undefined;
    CreateAccount: undefined;
    SignUp: undefined;
    MainTa: undefined;
    Setting: undefined;
    CategoriesDetail: undefined;
    CategoriesDetailSub: undefined;
    TopicDetail: undefined;
    ProfileAddFriend: undefined;
    ProfileCouponsVoucher: undefined;
    MainTopic: undefined;
    Search: undefined;
    Faq: undefined;
    Filter: undefined;
};

const Stack = createNativeStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;