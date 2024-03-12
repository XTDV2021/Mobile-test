import React, { useEffect, useState, useRef } from 'react';
import { View, ScrollView, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import formatDate from './utils/helper';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const inputRef = useRef(null);

  const handleRestaurantPress = () => {
    navigation.navigate('Order');
  };

  const handleGetItem = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/villas`
      );
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
      item.address.toLowerCase().includes(searchText.toLowerCase())
      || item.villa_name.toLowerCase().includes(searchText.toLowerCase())
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
    navigation.navigate('product');
  };
  const handleVilla = () => {
    navigation.replace('Villa');
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
          placeholder="Search 'VietNam, Asia'"
          placeholderTextColor="rgb(44, 44, 44)"
          style={styles.input}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Enter') {
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
          <Text style={styles.Title}>Villa</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={handleRestaurantPress}>
                <View style={styles.container1} >
                  <View style={styles.cardContainer}>
                    <Image source={require('../assets/9.jpg')} style={styles.imageStyle} />
                    <View style={styles.infoStyle}>
                      <Text style={styles.categoryStyle}>{`${item.address} `}</Text>
                      <Text style={styles.titleStyle}>{`${item.villa_name} `}</Text>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5 }}>area: {`${item.area} `}</Text>
                      </View>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5 }}>Time: {formatDate(item.insert_date)}</Text>
                        <View style={styles.dashContainer}>
                          <View style={styles.dash}></View>
                        </View>
                        <Text style={{ marginLeft: 5 }}>{formatDate(item.update_date)}</Text>
                      </View>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5 }}>fluctuates_price: {`${item.fluctuates_price} $`}</Text>
                      </View>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5 }}>stiff_price: {`${item.stiff_price} $`}</Text>
                      </View>
                      <View style={styles.iconLabelStyle}>
                        <Text style={{ marginLeft: 5 }}>status: {`${item.status} `}</Text>
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
  contentContainer: {
    paddingTop: 20,
    marginBottom: 200,
  },
  Title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  container1: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: '90%',
    height: 420,
    borderRadius: radius,
    borderWidth: borderWidth,
    borderColor: borderColor,
    overflow: 'hidden',
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
    width: 10,
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
  logo: {
    width: 24,
    height: 27,
    marginLeft: 10,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#ddd',
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(237, 237, 237)',
    borderWidth: 1,
    borderColor: 'rgb(235, 235, 235)',
    borderRadius: 5,
    width: 250,
    height: 50,
    marginLeft: 5,
  },
  iconContainer: {
    padding: 10,
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
});

export default ProductScreen;
