import React, { useState } from 'react';
import { View, ScrollView, Text, Animated, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SearchHeader from './HeaderSearch';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import formatDate from './utils/helper';

const HistoryScreen = () => {

  const handleGetItem = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const user_Id = await AsyncStorage.getItem("user_id");
      const instance = axios.create({
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const response = await instance.get(
        `${baseUrl}/villas/user/${user_Id}`
      );
      SetData(response.data.result);
    } catch (error) {
      console.log("response error", error);
    }
  };
  const result = handleGetItem();
  const dataResult = result.then((value) => {
    return value;
  });
  const [data, SetData] = useState(dataResult);



  return (
    <View style={styles.container} >
      <SearchHeader />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.Title}>Your History</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (

              <View style={styles.container1} >
                <View style={styles.cardContainer}>
                  <Image source={require('../assets/9.jpg')} style={styles.imageStyle} />
                  <View style={styles.infoStyle}>
                    <Text style={styles.categoryStyle}>{`${item.address} `}</Text>
                    <Text style={styles.titleStyle}>{`${item.villa_name} `}</Text>

                    <View style={styles.iconLabelStyle}>
                      <Text style={{ marginLeft: 5, }}>Time: {formatDate(item.insert_date)}</Text>
                      <View style={styles.dashContainer}>
                        <View style={styles.dash}></View>
                      </View>
                      <Text style={{ marginLeft: 5, }}>{formatDate(item.update_date)}</Text>
                    </View>
                    <View style={styles.iconLabelStyle}>
                      <Text style={{ marginLeft: 5, }}>area: {`${item.area} `}</Text>
                    </View>
                    <View style={styles.iconLabelStyle}>
                      <Text style={{ marginLeft: 5, }}>fluctuates_price: {`${item.fluctuates_price} $ `}</Text>
                    </View>
                    <View style={styles.iconLabelStyle}>
                      <Text style={{ marginLeft: 5, }}>stiff_price: {`${item.stiff_price} $ `}</Text>
                    </View>
                    <View style={styles.iconLabelStyle}>
                      <Text style={{ marginLeft: 5, }}>status: {`${item.status} `}</Text>
                    </View>
                  </View>
                </View>
              </View>

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
  contentContainer: {
    paddingTop: 20,
    marginBottom: 50,
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
    overflow: 'hidden', // Để clip các phần viền ra khỏi card
  },
  imageStyle: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 5,
    marginBottom: 10,
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
  likeIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default HistoryScreen;
