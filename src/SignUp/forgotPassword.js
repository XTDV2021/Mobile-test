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
  Alert // Import Alert từ react-native
} from "react-native";
import { baseUrl } from "../utils/IP";


const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State để lưu thông báo lỗi

  const handleSubmit = async () => {
    if (!email) {
      // Kiểm tra nếu email không được nhập
      setErrorMessage("Please enter your email");
      return; 
    }

    if (!isValidEmail(email)) {

      setErrorMessage("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/users/forgot-password/mobile`,
        {
          email: email,
        }
      );
      await AsyncStorage.setItem("email", email);
      navigation.navigate("Otp");
    } catch (error) {
      console.log("response data", error);
    } finally {
      console.log("response data");
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  // Hàm kiểm tra định dạng email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./the_oasis_luxury.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Forget Password</Text>
      <Text style={styles.label}>Please enter your email</Text>

      <TextInput
        style={styles.input}
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null} 
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verify</Text>
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
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 120,
    marginTop: -250,
    marginLeft: -250,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label1: {
    fontSize: 16,
    marginBottom: 20,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: '#26AAA0'
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

export default ForgetPasswordScreen;
