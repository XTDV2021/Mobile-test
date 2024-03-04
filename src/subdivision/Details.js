import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from '../utils/IP';

const Detail = () => {
const handleGetVillas = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/villas`
      );
      SetVilla(response.data.result);
    } catch (error) {
      console.log("response error", error);
    }
  };
  const villas = handleGetVillas();
  const villasResult = villas.then((value) => {
    // console.log(value); 
    return value;
  })
  const [villa, SetVilla] = useState(villasResult);



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail</Text>
          <Text style={styles.text}>Area: {`${villa.area} `}</Text>
          <Text style={styles.text}>fluctuates_price:{`${villa.fluctuates_price} `}</Text>
          <Text style={styles.text}>stiff_price: {`${villa.stiff_price} `}</Text>
          <Text style={styles.text}>status: {`${villa.status} `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 250,
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

export default Detail;
