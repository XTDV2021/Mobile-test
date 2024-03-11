import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  Alert,
} from "react-native";
import { baseUrl } from "../utils/IP";

const ChangePasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async () => {
        // Kiểm tra nếu mật khẩu hoặc xác nhận mật khẩu không được nhập
        if (!password || !confirmPassword) {
            Alert.alert("Error", "Please enter both password and confirm password");
            return;
        }

        // Kiểm tra nếu mật khẩu và xác nhận mật khẩu không trùng khớp
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match. Please try again.");
            return;
        }

        const email = await AsyncStorage.getItem("email");
        try {
            const response = await axios.post(
                `${baseUrl}/users/reset-password/mobile`,
                {
                    email: email,
                    password: password,
                    confirm_password: confirmPassword,
                }
            );
            console.log("res: ", response.data.message);
            await AsyncStorage.setItem("email", email);
            navigation.navigate("Login");
        } catch (error) {
            console.log("response data", error);
        } finally {
            console.log("response data");
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("./the_oasis_luxury.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>Confirm New Password</Text>
            <Text style={styles.label}>Please enter your new password</Text>

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 120,
        marginTop: -150,
        marginLeft: -250,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 20,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 20,
    },
    checkbox: {
        fontSize: 16,
    },
    linkText: {
        color: "#26AAA0",
        textDecorationLine: "none",
    },
    button: {
        width: "100%",
        padding: 15,
        backgroundColor: "#26AAA0",
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 3,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    orText: {
        marginVertical: 10,
    },
});

export default ChangePasswordScreen;
