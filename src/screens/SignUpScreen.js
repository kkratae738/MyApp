import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
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