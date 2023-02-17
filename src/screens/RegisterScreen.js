import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Register</Text>


            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter username' />
            </View>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter password' />
            </View>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Confirm the password' />
            </View>

            <View style={styles.btnDad}>
                <Text style={styles.btn}>Login</Text>
            </View>

            <View style={{
                alignSelf: "center",
                paddingVertical: 30
            }}>
                <Text>are you logged?</Text>
                <Text
                    onPress={()=> navigation.navigate('Login')}
                    style={styles.registerPage}>Login here</Text>
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
        marginTop: 35,
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
        // paddingVertical: 30
    },
})

export default RegisterScreen