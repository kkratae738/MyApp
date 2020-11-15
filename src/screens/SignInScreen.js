import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SignInScreen() {
    return (
        <View style={Styles.continer}>
            <Text>Sign In Screen</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})