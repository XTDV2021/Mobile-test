import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Address = () => {
  const navigation = useNavigation(); 

  const handlePress = () => {
    navigation.navigate('Location');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location</Text>
      <Text style={styles.text}>
     Take an easy walk to the main historic sites of the city. 
     The neighborhood is perfect for an authentic taste of Roman life,
     with shops, art galleries, restaurants, bars, and clubs all nearby
     and ready to be discovered.
    </Text>
    <Text style={styles.text1}>
     26 mins by car without traffic
    </Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text2}>
          Address:   
          <Text style={[styles.address]}> 34/10 Trường Tộ, quận 3, tp.HCM </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    marginTop: 5,
    marginHorizontal: 24,
    fontSize: 16,
    color: 'gray',
  },
  text1: {
    marginTop: 10,
    marginHorizontal: 24,
    fontSize: 16,
  },
  text2: {
    marginTop: 15,
    marginHorizontal: 24,
    fontSize: 16,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  address: {
    color: '#26AAA0',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
});

export default Address;
