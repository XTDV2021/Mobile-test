import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLabel from './iconlabel';

const iconColor = '#6c5ce7';

const RestaurantCard = ({ info }) => {
  const { name, categories, deliveryTime, distance, image, status } = info;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.categoryStyle}>{categories}</Text>
          <Text style={styles.titleStyle}>{name}</Text>

          <View style={styles.iconLabelStyle}>
            <Text>{deliveryTime}</Text>

          </View>
          <IconLabel name="location" label={distance} color={iconColor} />
          <View style={styles.iconLabelStyle}>
            <Icon name="clock-o" size={20} color="black" />
            <Text style={{marginLeft:5,}}>{status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const offset = 40;
const radius = 10;
const borderWidth = 1; // Độ dày của đường viền mờ
const borderColor = 'rgba(0, 0, 0, 0.1)'; // Màu của đường viền mờ

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
  cardContainer: {
    width: '90%',
    height: 320,
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
});

export default RestaurantCard;
