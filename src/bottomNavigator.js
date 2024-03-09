import React, { useState } from 'react';
import { Text,TouchableOpacity, View, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import { useNavigation } from '@react-navigation/native';


const VerifyScreen = () => {
    const navigation = useNavigation();
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    const handleChangeText = (text, index) => {
        const newOTP = [...otp];
        newOTP[index] = text;
        setOTP(newOTP);
    };
    
    const handleSubmit = async () => {
        const emaill = await AsyncStorage.getItem("email");
        const OTP = otp.join(otp);
      try {
        const response = await axios.post(
          `${baseUrl}/users/forgot-password/OTP`,
          {
            email: emaill,
            otp: parseInt(OTP) 
          }
        );
        
        console.log("message: ", response.data.message);
        if(response.data.message === 'Verify forgot password token success')
          navigation.navigate("ConfirmPassword");
      } catch (error) {
        console.log("response data", error);
      } finally {
        console.log("response data");
      }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify</Text>
            <Text style={styles.label}>Please enter your code</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}
                        maxLength={1}
                        keyboardType="numeric"
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};
// 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 20,
        width: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: -150,
    },
    label: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        width: "90%",
        padding: 15,
        backgroundColor: "#26AAA0",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 50,
        borderRadius: 3,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
      },
});

export default VerifyScreen;
