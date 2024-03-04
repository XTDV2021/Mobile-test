import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ProfileScreen = () => {
  const [dateOfBirth, setDateOfBirth] = useState('2002-10-30');
  const [phoneNumber, setPhoneNumber] = useState('0972266748');
  const [email, setEmail] = useState('huyhoangrt009@gmail.com');
  const [gender, setGender] = useState('Nam');

  const saveProfile = () => {
    // Lưu thông tin profile
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../assets/Profile.jpg')}
      />
      <View style={styles.userInfo}>
        <Text style={styles.username}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dateOfBirth}
          editable={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="venus-mars" size={20} color="#666" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          editable={false}
        />
      </View>
      <TouchableOpacity onPress={saveProfile} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProfileScreen;
