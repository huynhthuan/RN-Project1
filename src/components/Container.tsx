import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { ThemeContext } from '../../App'

interface Props {
    children: React.ReactNode;
    style?: ViewStyle;
}

const Container = ({ children, style }: Props) => {
    const theme = React.useContext(ThemeContext).theme;
    return (
        <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({})
