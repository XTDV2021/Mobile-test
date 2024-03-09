import React, { useRef,useLayoutEffect, useState } from 'react';
import { View, ScrollView, Text, Animated, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground, } from 'react-native';
import SearchHeader from './HeaderSearch';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import formatDate from './utils/helper';
const ProductListingScreen = () => {
  const navigation = useNavigation();
  const handleRestaurantPress = () => {
    navigation.navigate('Villa'); 
  };

  const handleGetItem = async () => {
    try {
      const project_id = await AsyncStorage.getItem("project_id");
      const accessToken = await AsyncStorage.getItem("accessToken");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/subdivisions`
      );
      SetData(response.data.result);
    } catch (error) {
      console.log("response error", error);
    }
  };
  const result = handleGetItem();
  const dataResult = result.then((value) => {
    return value;
  })
  const [data, SetData] = useState(dataResult);




  return (
    <View style={styles.container} >
      <SearchHeader />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.Title}>Subdivision</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={handleRestaurantPress}>
                <View style={styles.container1} >
                  <View style={styles.cardContainer}>
                    <Image source={require('../assets/9.jpg')} style={styles.imageStyle} />
                    <View style={styles.infoStyle}>
                      <Text style={styles.categoryStyle}>{`${item.location} `}</Text>
                      <Text style={styles.titleStyle}>{`${item.subdivision_name} `}</Text>

                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5, }}>Time: {formatDate(item.insert_date)}</Text>
                        <View style={styles.dashContainer}>
                          <View style={styles.dash}></View>
                        </View>
                        <Text style={{ marginLeft: 5, }}>{formatDate(item.update_date)}</Text>
                      </View>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5, }}>quantity: {`${item.quantityVilla} Villas `}</Text>
                      </View>

                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5, }}>status: {`${item.status} `}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}

          />
        </View>
      </ScrollView>
    </View>
  );
};


const radius = 10;
const borderWidth = 1;
const borderColor = 'rgba(0, 0, 0, 0.1)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // backButton: {
  //   marginTop: 100,
  //   marginBottom: 50, 
  //   marginLeft: -350,
  // },
  contentContainer: {
    paddingTop: 20,
  },
  Title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  loadMoreButton: {
    backgroundColor: '#26AAA0',
    padding: 10,
    alignItems: 'center',
    marginLeft: 120,
    marginVertical: 80,
    borderRadius: 5,
    width: 150,
  },
  loadMoreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: '90%',
    height: 350,
    borderRadius: radius,
    borderWidth: borderWidth,
    borderColor: borderColor,
    overflow: 'hidden', // Để clip các phần viền ra khỏi card
  },
  imageStyle: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '800',
  },
  categoryStyle: {
    fontWeight: '200',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconLabelStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  dashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 10,
  },

  dash: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 10, // Độ dài của dấu gạch ngang
  },
});

export default ProductListingScreen;

