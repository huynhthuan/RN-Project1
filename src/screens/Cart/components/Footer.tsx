import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export interface RefFooter {
    setIsLoadMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = React.forwardRef((props, ref) => {
    const [isLoadMore, setIsLoadMore] = React.useState<boolean>(false);
    React.useImperativeHandle(ref, () => {
        return {
            setIsLoadMore
        }
    });

    return (
        <View style={styles.footerList}>
            {!!isLoadMore && <ActivityIndicator color="#15BE77"></ActivityIndicator>}
        </View>
    )
});

export default Footer

const styles = StyleSheet.create({
    footerList: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
    },
})
