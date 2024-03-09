import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import { useNavigation } from '@react-navigation/native';
import formatDate from './utils/helper';

const EditProfileScreen = () => {
const [username, setUsername] = useState("");
const [birthday, setBirthday] = useState("");
const [rememberMe, setRememberMe] = useState(false);
const navigation = useNavigation();
const requestToken = (token) => {
  return axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });
}
const handleSubmit = async () => {
  try {
    const user_Id = await AsyncStorage.getItem("user_id");
    const response = await axios.post(
        `${baseUrl}/accounts/${user_Id}`,
      {
        user_name: username,
        birthday: password,
      }
    );
    // console.log("response data", response.data.result.access_token);
    await AsyncStorage.setItem("accessToken", response.data.result.access_token);
    await AsyncStorage.setItem("user_id", response.data.result.user_id);
  
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.result.access_token}`;
      navigation.navigate("HomeDrawer");
  } catch (error) {
    console.log("response data", error);
  } finally {
    console.log("response data");
  }
};
  

  const goBack = () => {
    navigation.navigate('HomeDrawer'); 
  };
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="#666" style={styles.backIcon} />
      </TouchableOpacity>
      <Image
        style={styles.avatar}
        source={require('../assets/Profile.jpg')}
      />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{`${data.user_name} `}</Text>
        <Text style={styles.email}>{`${data.full_name} `}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={formatDate(data.birthday)}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={data.phone_number}
          onChangeText={text => SetData.phone_number(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={data.email}
          onChangeText={text => SetData.email(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="venus-mars" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={data.gender}
          editable={false}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginTop: -100,
    marginBottom: 50, 
    marginLeft: -350,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: '#777',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: 380,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'gray',
  },
  saveButton: {
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
