import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, Modal, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import Ionicons from 'react-native-vector-icons/Ionicons';

import formatDate from './utils/helper';
const ProductListingScreen = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const handleRestaurantPress = () => {
    navigation.navigate('Villa');
  };

  const handleGetItem = async () => {
    try {
      // const route = useRoute();
      // const dataProjects = route.params?.data || []
      const accessToken = await AsyncStorage.getItem("accessToken");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/subdivisions`,
      );
      // console.log('data ne project: ', dataProjects);
      setData(response.data.result);
    } catch (error) {
      console.log("response error", error);
    }
  };

  useEffect(() => {
    handleGetItem();
  }, []);

  const handleSearch = () => {
    const filteredData = data.filter(item =>
      item.subdivision_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setData(filteredData);
  };

  const handleEnterPress = () => {
    if (searchText === '') {
      handleGetItem();
    } else {
      handleSearch();
    }
  };

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };
  const handleProject = () => {
    navigation.navigate('Project');
  };
  const handlSubdivision = () => {
    navigation.replace('product');
  };
  const handleVilla = () => {
    navigation.navigate('Villa');
  };
  const handleReload = () => {
    navigation.navigate('HomeDrawer');
  };




  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress}>
          <Ionicons name="menu" size={24} color="#333" style={styles.menuIcon} />
        </TouchableOpacity>
        <TextInput
          ref={inputRef}
          placeholder="Search Here"
          placeholderTextColor="rgb(44, 44, 44)"
          style={styles.input}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'all') {
              handleEnterPress();
            }
          }}
        />
      </View>
      <Modal visible={showMenu} transparent={true} animationType="slide">
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={handleProject}>
            <Text style={styles.menuText}>Project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlSubdivision}>
            <Text style={styles.menuText}>Subdivision</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleVilla}>
            <Text style={styles.menuText}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleReload}>
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 120,
    paddingTop: 30,
  },
  menuIcon: {
    fontSize: 30,
    marginLeft: -10,
    marginRight: 20,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#ddd',
    height: 50,
  },
  menuIcon: {
    fontSize: 30,
    marginLeft: -10,
    marginRight: 20,
  },
  menuContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    backgroundColor: '#fff',
    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 16,
  },
  contentContainer: {
    paddingTop: 20,
    marginBottom: 200,
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

