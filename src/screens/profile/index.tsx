import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../nav/RootStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { UserContext } from '../../../App';
import Container from '../../components/Container';
import Txt from '../../components/Txt';


export interface IUserInfo {
    name: string;
    age: string;
}

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Profile'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type Props = {
    navigation: ProfileScreenNavigationProp;
    route: ProfileScreenRouteProp;
};

const Profile = ({ navigation, route }: Props) => {
    // const [userInfo, setUserInfo] = React.useState<IUserInfo>({
    //     name: 'Nguyen Van A',
    //     age: `20`,
    // });

    // React.useEffect(() => {
    //     //listent params change

    //     if (route.params?.age && route.params?.name) {
    //       setUserInfo({
    //         name: route.params.name,
    //         age: route.params.age,
    //       });
    //     }
    //   }, [route.params?.age, route.params?.name]);

    const userContext = React.useContext(UserContext);
    const userInfo = userContext.userInfo;

    return (
        <Container>
            <Txt>{`Ten: ${userInfo.name}`}</Txt>
            <Txt>{`Age: ${userInfo.age}`}</Txt>

            <Button
                title="Cập nhật thông tin"
                onPress={() => {
                    navigation.navigate('UpdateProfile', {
                        name: userInfo.name,
                        age: userInfo.age,
                    });
                }}
            />
        </Container>
    );
};

export default Profile

const styles = StyleSheet.create({})
