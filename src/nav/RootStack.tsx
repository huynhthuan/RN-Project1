import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/onboarding';
import Profile, { IUserInfo } from '../screens/profile';
import UpdateProfile from '../screens/updateProfile';

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

    //
    Profile: {
        name: string;
        age: string;
    };
    UpdateProfile: {
        name: string;
        age: string;
    };
};

const Stack = createNativeStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootStack;