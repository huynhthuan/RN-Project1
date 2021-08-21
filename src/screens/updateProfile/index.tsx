import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { darkTheme, lightTheme, ThemeContext, UserContext } from '../../../App';
import Container from '../../components/Container';
import Txt from '../../components/Txt';

type UpdateProfileScreenRouteProp = RouteProp<
    RootStackParamList,
    'UpdateProfile'
>;
type UpdateProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'UpdateProfile'
>;

type Props = {
    route: UpdateProfileScreenRouteProp;
    navigation: UpdateProfileScreenNavigationProp;
};

const UpdateProfile = ({ route, navigation }: Props) => {
    // const { name, age } = route.params;
    // const [updateProfile, setUpdateProfile] = React.useState({
    //     name: name,
    //     age: age,
    // });

    const userContext = React.useContext(UserContext);
    const themeContext = React.useContext(ThemeContext)

    const userInfo = userContext.userInfo;
    const setUpdateProfile = userContext.setUserInfo;
    const setTheme = themeContext.setTheme;
    const isLightTheme = themeContext.theme.backgroundColor === '#fff';


    return (
        <Container>
            <View>
                <Txt>Tên</Txt>
                <TextInput
                    placeholder="Họ và tên"
                    defaultValue={userInfo.name}
                    onChangeText={(name: string) => {
                        setUpdateProfile({ ...userInfo, name });
                    }}
                />
            </View>
            <View>
                <Txt>Tuổi</Txt>
                <TextInput
                    placeholder="Nhập số tuổi"
                    defaultValue={userInfo.age}
                    onChangeText={(age: string) => {
                        setUpdateProfile({ ...userInfo, age });
                    }}
                />
            </View>

            <Button
                title="Cập nhật"
                onPress={() => {
                    // route.params.setUserInfo({
                    //     name: updateProfile.name,
                    //     age: updateProfile.age,
                    // });
                    navigation.goBack();

                    // navigation.navigate('Profile', {
                    //     name: userInfo.name,
                    //     age: userInfo.age
                    // });
                }}
            />

            <Button
                title="Cập nhật theme"
                onPress={() => {
                    (isLightTheme) ? setTheme(darkTheme) : setTheme(lightTheme);
                }}
            />
        </Container>
    );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
