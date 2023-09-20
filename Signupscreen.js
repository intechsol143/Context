import { StyleSheet, Text, View, Button,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useAppContext } from './ContextApi';

const Signupscreen = ({navigation}) => {
    const { dispatch } = useAppContext();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        const signUpData = { name, email, password };
        dispatch({ type: 'SET_SIGNUP_DATA', payload: signUpData });
        navigation.navigate("Home")

    };
    return (
        <View>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={(txt) => setName(txt)}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(txt) => setPassword(txt)}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
        </View>
    )
}

export default Signupscreen

const styles = StyleSheet.create({})