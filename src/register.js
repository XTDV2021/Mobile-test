import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [agreeWithTerms, setAgreeWithTerms] = useState(false);


    const handleLogin = () => {
        navigation.navigate('HomeDrawer');
    };

    return (
        
        <View style={styles.container}>
               <View style={styles.checkboxContainer}>
                    <Text style={styles.linkText1}>TripFinder.</Text> 
            </View>
            <Text style={styles.title}>Welcome To TripFinder</Text>
            <Text style={styles.label}>Please Register for your account</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
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

            <Text style={styles.orText}>Or Register Up With</Text>

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
    checkbox: {
        fontSize: 16,
    },
    linkText: {
        color: '#26AAA0',
        textDecorationLine: 'none',
    },
    linkText1: {
        color: '#26AAA0',
        fontSize:20,
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
});

export default RegisterScreen;