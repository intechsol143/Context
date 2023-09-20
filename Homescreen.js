import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useAppContext } from './ContextApi'
const Homescreen = () => {
    const { state } = useAppContext(); // Access the context state
    const signUpData = state.signUpData;
    console.log("check Data", signUpData)
    return (
        <View>
            <Text>Homescreen</Text>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({})