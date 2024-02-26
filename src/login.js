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
  Alert,
} from "react-native";

// function LoginScreen(props) {
//   const [user_name, setUser_name] = useState('');
//   const [password, setPassword] = useState('');

//   const onChangeUser_name = (text) => setUser_name(text);
//   const onChangePassword = (text) => setPassword(text);

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  //   const request = axios.create({
  //     headers: { Authorization: `Bearer ${accessToken}` },
  //   });
  const handleSubmit = async () => {
    try {
      console.log("info", username + password);
      const response = await axios.post(
        "https://admin.reso.vn/api/v1/auth/login",
        {
          username: username,
          password: password,
        }
      );
      console.log("response data", response.data.accessToken);
      await AsyncStorage.setItem("accessToken", response.data.accessToken);
      //   localStorage.setItem("accessToken", accessToken);
      //   axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
      //   navigation.navigate("Home");
      handleGetStore();
    } catch (error) {
      console.log("response data", error);
    } finally {
      console.log("response data");
    }
  };
  const handleGetStore = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      console.log("token", accessToken);
      const instance = axios.create({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const response = await instance.get(
        "https://admin.reso.vn/api/v1/brands/b21e84cc-5bff-408e-b38e-026aa996d251/stores?page=1&size=10"
      );
      console.log("response data", response.data);
    } catch (error) {
      console.log("response error", error);
    } finally {
      console.log("response data");
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
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      {/* {error ? <Text style={styles.errorText}>{error}</Text> : null} */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or log in with</Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View style={{ flex: 1, marginRight: 5 }}>
          <Button title="Facebook" color="#3b5998" onPress={() => {}} />
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Button title="Github" color="#333" onPress={() => {}} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View style={{ flex: 1, marginRight: 5 }}>
          <Button title="Firebase" color="#FFA611" onPress={() => {}} />
        </View>
        <View style={{ flex: 1, marginLeft: 5 }}>
          <Button title="Google+" color="#dd4b39" onPress={() => {}} />
        </View>
      </View>

      <TouchableOpacity style={{ marginTop: 40 }} onPress={() => {}}>
        <Text style={styles.linkText}>Don't Have an Account? Registration</Text>
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

export default LoginScreen;
