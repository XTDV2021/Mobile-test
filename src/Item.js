import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,TouchableWithoutFeedback } from 'react-native';

const AmenitiesScreen = () => {
  const handleShowAllAmenities = () => {
    alert('Show all amenities clicked!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amenities</Text>
      <View style={styles.amenitiesContainer}>
        <TouchableOpacity style={styles.amenity}>
          <Image
            source={require('../assets/wifi.png')} // Replace with your actual icon
            style={styles.icon}
          />
          <Text style={styles.amenityText}>Free wifi</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.amenity}>
          <Image
            source={require('../assets/car.png')} // Replace with your actual icon
            style={styles.icon}
          />
          <Text style={styles.amenityText}>Free parking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.amenity}>
          <Image
            source={require('../assets/pool.png')} // Replace with your actual icon
            style={styles.icon}
          />
          <Text style={styles.amenityText}>Free pool</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.amenity}>
          <Image
            source={require('../assets/air.png')} // Replace with your actual icon
            style={styles.icon}
          />
          <Text style={styles.amenityText}>Air Freshener</Text>
        </TouchableOpacity>
      </View>
      <TouchableWithoutFeedback onPress={handleShowAllAmenities}>
        <Text style={[styles.headerItem]}>Show all amenities</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgb(247, 247, 247)',
  
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  amenity: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 8,
    width: 160,
    height: 160,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 8, // Move the image above text
  },
  amenityText: {
    fontSize: 16,
    textAlign: 'center', // Center text
  },
  headerItem: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#26AAA0',
  },
});

export default AmenitiesScreen;