import React, { useRef, useState } from 'react';
import { View, ScrollView, Text, Animated, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SearchHeader from './HeaderSearch';
import { useNavigation } from '@react-navigation/native';
import RestaurantCard from './component/card';


const ProductListingScreen = () => {
  const [visibleRestaurants, setVisibleRestaurants] = useState(3); 
  const navigation = useNavigation();
  const handleRestaurantPress = () => {
    navigation.navigate('Subdivision'); // Navigate to "subdivision" screen
  };
  const restaurants = [
		{
			name: 'Small Metal Ball',
			categories: '8424 Padberg Flats',
			deliveryTime: '$ 316.00/Night - FreeCancellation',
			distance: 'Bad(12)',
      status: 'InActive',
			image: require('../assets/4.jpg'),
			id: 1,
		},
		{
			name: 'Small Soft Ball',
			categories: '43299 Murazik Extension',
			deliveryTime: '$ 245.00/Night - FreeCancellation',
			distance: 'Average(11)',
      status: 'Active',
			image: require('../assets/5.jpg'),
			id: 2,
		},
		{
			name: 'Incredible Wooden Ball',
			categories: '73311 Freida Point',
			deliveryTime: '$ 662.00/Night - FreeCancellation',
			distance: 'Average(8)',
      status: 'InActive',
			image: require('../assets/6.jpg'),
			id: 3,
		},
		{
			name: "Handcrafted Wooden Towels",
			categories: '303 Volkman Lakes',
			deliveryTime: '$ 170.00/Night - FreeCancellation',
			distance: 'Good(5)',
      status: 'Active',
			image: require('../assets/7.jpg'),
			id: 4,
		},
		{
			name: 'Handmade Wooden Mouse',
			categories: '52623 Donnie Roads',
			deliveryTime: '$ 223.00/Night - FreeCancellation',
			distance: 'Good(14)',
      status: 'InActive',
			image: require('../assets/8.jpg'),
			id: 5,
		},
	];


  const loadMore = () => {
    setVisibleRestaurants(visibleRestaurants + 3); 
  };

  return (
    <View style={styles.container} >
      <SearchHeader />
      <ScrollView>
        <View style={styles.contentContainer}>
        <FlatList
            data={restaurants.slice(0, visibleRestaurants)}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={handleRestaurantPress}>
                <RestaurantCard info={item} />
              </TouchableOpacity>
            )}
            keyExtractor={(restaurant) => restaurant.id.toString()}
            showsVerticalScrollIndicator={false}
          />
          {visibleRestaurants < restaurants.length && (
            <TouchableOpacity onPress={loadMore} style={styles.loadMoreButton}>
              <Text style={styles.loadMoreButtonText}>Load More</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 20,
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
});

export default ProductListingScreen;

