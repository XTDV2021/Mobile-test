import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import { useNavigation } from '@react-navigation/native';
import formatDate from './utils/helper';

const ProfileScreen = () => {
  
  const navigation = useNavigation();

  const handleGetStore = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const user_Id = await AsyncStorage.getItem("user_id");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/users/${user_Id}`
      );
      // 
      SetData(response.data.user);
    } catch (error) {
      console.log("response error", error);
    }
  };
  const result = handleGetStore();
  const dataResult = result.then((value) => {
    // console.log("gia tri data: ",value); 
    return value;
  })
  const [data, SetData] = useState(dataResult);

  
  const saveProfile = () => {
   navigation.navigate("edit");
  };
  const logOutProfile = () => {
    navigation.navigate("Login");
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
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={data.email}
          editable={false}
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
      <TouchableOpacity onPress={saveProfile} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logOutProfile} style={styles.logOutButton}>
        <Text style={styles.logOutButtonText}>Logout</Text>
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
  logOutButton: {
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
  },
  logOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:15,
  },
  saveButton: {
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
