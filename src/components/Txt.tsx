import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, TextProps } from 'react-native-ui-lib';
import { ThemeContext, UserContext } from '../../App';

interface Props {
    children: string,
    txtProps?: TextProps,
}
const Txt = ({ children, ...txtProps }: Props) => {
    const color = React.useContext(ThemeContext).theme.color;

    return (
        <Text color={color} {...txtProps}>
            {children}
        </Text>
    )
}

export default Txt

const styles = StyleSheet.create({})
