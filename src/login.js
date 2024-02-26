import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Alert} from 'react-native';

// function LoginScreen(props) {
//   const [user_name, setUser_name] = useState('');
//   const [password, setPassword] = useState('');

//   const onChangeUser_name = (text) => setUser_name(text);
//   const onChangePassword = (text) => setPassword(text);

//   const handleSubmit = () => {
//       fetch('http://localhost:5000/api/v1/users/login')
//           .then((response) => response.json())
//           .then((json) => {
//               // You can navigate here as well
//               navigation.navigate('HomeDrawer');
//               return json.movies;
//           })
//           .catch((error) => {
//               console.error(error);
//           });
//   };
const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        if (username === 'khang' && password === 'abcabc') {
            navigation.navigate('HomeDrawer');
        } else {
            Alert.alert('Incorrect username or password.');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.label}>Please log into your account</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {/* <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <Text style={styles.checkbox}>{rememberMe ? '☑' : '☐'} Remember Me</Text>
                </TouchableOpacity>
            </View> */}
         

            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.linkText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or log in with</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ flex: 1, marginRight: 5}}>
                    <Button
                        title="Facebook"
                        color="#3b5998"
                        onPress={() => { }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 5 }}>
                    <Button
                        title="Github"
                        color="#333"
                        onPress={() => { }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={{ flex: 1, marginRight: 5 }}>
                    <Button
                        title="Firebase"
                        color="#FFA611"
                        onPress={() => { }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 5}}>
                    <Button
                        title="Google+"
                        color="#dd4b39"
                        onPress={() => { }}
                    />
                </View>
            </View>

            <TouchableOpacity style={{ marginTop: 40 }} onPress={() => { }}>
                <Text style={styles.linkText}>Don't Have an Account? Registration</Text>
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
    errorText: {
        color: 'red',
        marginBottom: 10,
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

export default LoginScreen;