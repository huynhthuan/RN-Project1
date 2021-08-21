import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { View, Text, Image, Colors, Button } from 'react-native-ui-lib';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const dataOnboarding = [
    {
        assetName: 'onboarding1',
        title: 'Your Yoga',
        desc: 'Does Hydroderm Work',
    },
    {
        assetName: 'onboarding2',
        title: 'Your Healthy',
        desc: `Recommended You To Use After Before Breast Enhancement`,
    },
    {
        assetName: 'onboarding3',
        title: 'Learning to Relax',
        desc: 'The Health Benefits Of Sunglasses',
    }
]

interface IPageOnBoarding {
    assetName: string,
    title: string,
    desc: string,
    onPress: () => void,
}

interface IRefDots {
    setIndexPageForcus: React.Dispatch<React.SetStateAction<number>>;
}

const Dots = React.forwardRef<IRefDots>((props, ref) => {
    const [indexPageForcus, setIndexPageForcus] = React.useState<number>(0);

    React.useImperativeHandle(ref, () => {
        return {
            setIndexPageForcus,
        };
    });

    const renderDots = React.useCallback(() => {
        let views = [];
        let length = dataOnboarding.length;
        for (let i = 0; i < length; i++) {
            views.push(
                <View
                    backgroundColor={
                        indexPageForcus === i ? Colors.primary : Colors.dark40
                    }
                    style={styles.dot}
                    key={i}
                />,
            );
        }
        return views;
    }, [indexPageForcus]);
    return <View style={styles.containerDots}>{renderDots()}</View>;
});



const PageOnBoarding = ({ assetName, title, desc, onPress }: IPageOnBoarding) => {
    return (
        <View style={{ width: width, height: '100%', backgroundColor: '#fff' }}>
            <Image assetGroup="Onboarding" marginB-20 assetName={assetName} style={{
                width: width, height: (width / 375) * 464
            }}></Image>

            <View flex bottom centerH>
                <View flex centerH marginB-36>
                    <Text marginB-10 h30>{title}</Text>
                    <Text b17 center color={Colors.dark10}>{desc}</Text>
                </View>
                <Button label="CREATE ACCOUNT" marginB-30 style={{ width: width - 82 }} onPress={onPress}></Button>
            </View>
        </View>
    );
};

const Onboarding = () => {
    const refDots = React.useRef<IRefDots>(null);
    const refScrollView = React.useRef<ScrollView>(null);
    const onMomentumScrollEnd = React.useCallback(({ nativeEvent }) => {
        const x = nativeEvent.contentOffset.x;
        let indexForcus = Math.round(x / width);
        refDots.current?.setIndexPageForcus(indexForcus);
    }, []);


    return (
        <View flex backgroundColor={Colors.white}>
            <ScrollView horizontal
                pagingEnabled showsHorizontalScrollIndicator={false} onMomentumScrollEnd={onMomentumScrollEnd} ref={refScrollView}>
                {dataOnboarding.map((item, index) => (
                    <PageOnBoarding
                        key={item.assetName}
                        assetName={item.assetName}
                        title={item.title}
                        desc={item.desc}
                        onPress={() => {
                            if (index === 2) return;
                            refScrollView.current?.scrollTo({
                                x: (index + 1) * width,
                                y: 0,
                                animated: true,
                            });
                            refDots.current?.setIndexPageForcus(index + 1);
                        }}
                    ></PageOnBoarding>
                ))}
            </ScrollView>
            <Dots ref={refDots} />
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    containerDots: {
        position: 'absolute',
        top: (width / 375) * 464,
        height: 10,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    dot: {
        borderRadius: 5,
        marginHorizontal: 5,
        height: 10,
        width: 10,
    },
});
