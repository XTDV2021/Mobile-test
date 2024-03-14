import React, { useRef, useState } from 'react';
import { View, ScrollView, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { BANNER_H } from './constants';
// import TopNavigation from './TopNavigation';
import DummyText from './Dummytext';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchHeader from '../HeaderSearch';
import AmenitiesScreen from '../Item';
import Address from './address';
import Book from './book';
import Detail from './Details';
const SubdivisionScreen = () => {
  const [selected, setSelected] = useState('');
  const scrollRef = useRef(null);

  const handlePress = (title) => {
    setSelected(title);
    // Tính toán vị trí cần cuộn đến dựa trên title
    let scrollToY = 0;
    switch (title) {
      case 'Book':
        scrollToY = 0;
        break;
      case 'Overview':
        scrollToY = 230;
        break;
      case 'Amenities':
        scrollToY = 720; // Vị trí cần cuộn đến cho AmenitiesScreen
        break;
      case 'Location':
        scrollToY = 1000; // Vị trí cần cuộn đến cho Address
        break;
        case 'Detail':
          scrollToY = 1200; // Vị trí cần cuộn đến cho Address
          break;
      default:
        scrollToY = 0;
    }
    // Cuộn đến vị trí tính toán
    scrollRef.current.scrollTo({ y: scrollToY, animated: true });
  };
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <SearchHeader />
      <ScrollView horizontal={true} style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={() => handlePress('Book')}>
          <Text style={[styles.headerItem, selected === 'Book' && { color: '#26AAA0' }]}>Book</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress('Overview')}>
          <Text style={[styles.headerItem, selected === 'Overview' && { color: '#26AAA0' }]}>Overview</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress('Amenities')}>
          <Text style={[styles.headerItem, selected === 'Amenities' && { color: '#26AAA0' }]}>Amenities</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress('Location')}>
          <Text style={[styles.headerItem, selected === 'Location' && { color: '#26AAA0' }]}>Location</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => handlePress('Detail')}>
          <Text style={[styles.headerItem, selected === 'Detail' && { color: '#26AAA0' }]}>Detail</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
      
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('./banner.jpg')}
          />
        </View>
        <Book />
        <DummyText />
        <AmenitiesScreen />
        <Address />
        <Detail/>
      </Animated.ScrollView>
     
    </View>
    
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(242, 242, 242, 0.8)',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(204, 204, 204, 0.8)',
    height: 80,
  },
  headerItem: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default SubdivisionScreen;
