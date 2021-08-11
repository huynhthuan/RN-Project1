import Assets from '../../../config/Assets';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IProduct } from '..';

interface Props {
    item: IProduct;
}

const ItemCart = ({ item }: Props) => {
    const [quantity, setQuantity] = React.useState(1);
    return (
        <View style={styles.item}>
            <Image style={styles.ava} source={item.image} resizeMode="cover"></Image>
            <View style={styles.meta}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>

            <View style={styles.quantityWrap}>
                <TouchableOpacity style={styles.btnQuantity} onPress={() => setQuantity(quantity - 1)}>
                    <Image source={Assets._minus_icon}></Image>
                </TouchableOpacity>
                <Text style={styles.quantityNumber}>{quantity}</Text>
                <TouchableOpacity style={[styles.btnQuantity, styles.btnQuantityActive]} onPress={() => setQuantity(quantity + 1)}>
                    <Image source={Assets._plus_icon}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemCart

const styles = StyleSheet.create({
    quantityWrap: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantityNumber: {
        marginHorizontal: 10
    },
    btnQuantity: {
        width: 26,
        height: 26,
        borderRadius: 8,
        backgroundColor: 'rgba(83, 232, 139, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnQuantityActive: {
        backgroundColor: 'rgb(83, 232, 139)',
    },
    item: {
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderRadius: 22,
        backgroundColor: '#eaeaea',
        elevation: 1,
        marginBottom: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ava: {
        borderRadius: 16,
        // marginRight: 18,
    },
    meta: {
        // marginRight: 27,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#09051C',
        marginBottom: 8,
        lineHeight: 20,
    },
    desc: {
        fontSize: 14,
        color: 'rgba(59, 59, 59, .3)',
        lineHeight: 14,
    },
    time: {
        fontSize: 14,
        color: 'rgba(59, 59, 59, .3)',
        lineHeight: 14,
        height: '100%',
        alignContent: 'flex-start',
        marginTop: 10,
    },
    price: {
        fontSize: 19,
        color: 'rgba(83, 232, 139, 1)',
        lineHeight: 25,
    },
    buttonLinear: {
        borderRadius: 17.5,
    },
    buyAgainBtn: {
        width: 85,
        height: 29,
    },
    buyAginBtnText: {
        textAlign: 'center',
        color: '#fff',
        lineHeight: 29,
        fontSize: 12,
        fontWeight: 'bold'
    },
})
