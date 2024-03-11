import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { baseUrl } from "../utils/IP";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [agreeWithTerms, setAgreeWithTerms] = useState(false);
    const goToLogin = () => {
        navigation.navigate('Login');
      };

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                `${baseUrl}/users/register`,
                {
                    full_name: fullname,
                    birthday: birthday,
                    phone_number: phone,
                    user_name: username,
                    email: email,
                    password: password,
                    confirm_password: confirmPassword,
                }
            );
            console.log("response data", response.data);
            // .accessToken
            // await AsyncStorage.setItem("accessToken", response.data.accessToken);
            // localStorage.setItem("accessToken", accessToken);
            // axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
            navigation.navigate("Login");
            // handleGetStore();
        } catch (error) {
            console.log("response data", error);
        } finally {
            console.log("response data");
        }
    };

    return (

        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <Image
                    source={require("./the_oasis_luxury.png")}
                    style={styles.logo}
                />
            </View>
            <Text style={styles.title}>Welcome To TripFinder</Text>
            <Text style={styles.label}>Please Register for your account</Text>


            <TextInput
                style={styles.input}
                placeholder="Fullname"
                value={fullname}
                onChangeText={setFullname}
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Birthday"
                value={birthday}
                onChangeText={setBirthday}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <Text style={styles.checkbox}>{rememberMe ? '☑' : '☐'} Remember Me</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setAgreeWithTerms(!agreeWithTerms)}>
                    <Text style={styles.checkbox}>{agreeWithTerms ? '☑' : '☐'} I agree with the terms and conditions</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.label1}>Back to login</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    label1: {
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20,
        textDecorationLine: 'underline',
        color: '#26AAA0'
      },
    checkbox: {
        fontSize: 16,
    },
    linkText: {
        color: '#26AAA0',
        textDecorationLine: 'none',
    },
    linkText1: {
        color: '#26AAA0',
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#26AAA0',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    orText: {
        marginVertical: 10,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: -200,
        marginTop: -50,
        marginLeft: -250,
    },
});

export default RegisterScreen;