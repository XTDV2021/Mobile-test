import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';


import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./utils/IP";
import Ionicons from 'react-native-vector-icons/Ionicons';
import formatDate from './utils/helper';

const PostScreen = () => {
    const [likedItems, setLikedItems] = useState([]);
    const [searchText, setSearchText] = useState('');
    const inputRef = useRef(null);
    const handleGetItem = async () => {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");
            const instance = axios.create({
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const response = await instance.get(
                `${baseUrl}/users/get/blogPosts`
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

    const handleLikePress = (item) => {
        const isLiked = likedItems.includes(item.id); // Check if item is already liked
        setLikedItems((prevLikedItems) =>
            isLiked
                ? prevLikedItems.filter((id) => id !== item.id) // Remove from liked list
                : [...prevLikedItems, item.id] // Add to liked list
        );
    };
    const handleSearch = () => {
        const filteredData = data.filter(item =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        SetData(filteredData);
    };

    const handleEnterPress = () => {
        if (searchText === '') {
            handleGetItem();
        } else {
            handleSearch();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    ref={inputRef}
                    placeholder="Search Here"
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
            <View style={styles.contentContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.container1}>
                            <View style={styles.cardContainer}>
                                <Image source={require('../assets/9.jpg')} style={styles.imageStyle} />
                                <View style={styles.infoStyle}>
                                    <Text style={styles.titleStyle}>{`${item.title} `}</Text>
                                    <TouchableOpacity onPress={() => handleLikePress(item)} style={styles.likeIconContainer}>
                                        <Ionicons name={likedItems.includes(item.id) ? 'heart' : 'heart-outline'} size={30} color={likedItems.includes(item.id) ? 'pink' : 'black'} />
                                    </TouchableOpacity>
                                    <View style={styles.iconLabelStyle}>
                                        <Text style={{ marginLeft: 5 }}>Time: {formatDate(item.insert_date)}</Text>
                                        <View style={styles.dashContainer}>
                                            <View style={styles.dash}></View>
                                        </View>
                                        <Text style={{ marginLeft: 5 }}>{formatDate(item.update_date)}</Text>
                                    </View>
                                    <View style={styles.iconLabelStyle}>
                                        <Text style={{ marginLeft: 5 }}>{`${item.description_detail}`}</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    );
};

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
    input: {
        fontSize: 18,
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: '#ddd',
        height: 50,
    },
    contentContainer: {
        paddingTop: 20,
    },
    container1: {
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    cardContainer: {
        width: '100%',
        height: 500,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    imageStyle: {
        height: 300,
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

export default PostScreen;
