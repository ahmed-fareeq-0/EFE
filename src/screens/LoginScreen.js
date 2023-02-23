import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/Provider';

const LoginScreen = () => {
    
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPass] = useState(null);

    const {login} = useContext(Context)


    return (
        <View style={styles.container} >
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter email' onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter password' onChangeText={(text) => setPass(text)} />
            </View>

            <View style={styles.btnDad}>
                <Text style={styles.btn} onPress={() => login(email, password)}>Login</Text>
            </View>

            <View style={{ alignSelf: "center", paddingVertical: 30 }}>
                <Text>are you registered?</Text>
                <Text onPress={() => navigation.navigate('Register')} style={styles.registerPage}>register here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#FFF",
        justifyContent: "center",
    },
    title: {
        fontSize: 35,
        fontFamily: "SemiBold",
        alignSelf: "center",
    },
    inputDad: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 30,
        marginTop: 50,
        paddingHorizontal: 10,
        backgroundColor: "#E8EEF1",
        borderRadius: 20,
        paddingVertical: 2
    },
    input: {
        paddingHorizontal: 10,
    },
    btnDad: {
        marginHorizontal: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#43B0F1",
        paddingVertical: 10,
        borderRadius: 23
    },
    btn: {
        color: "white",
        fontFamily: "SemiBold"
    },
    registerPage: {
        alignSelf: "center",
        color: "#43B0F1",
        fontFamily: "SemiBold",
    },
})

export default LoginScreen