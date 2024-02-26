import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import footerBg from './footer-bg.svg';

const Footer = (props) => {
  const [pressedText, setPressedText] = useState(null);

  const handlePress = (text) => {
    console.log(`${text} pressed`);
    setPressedText(text);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={props.bgSrc ? { uri: props.bgSrc } : footerBg}
        style={styles.backgroundImage}
      />

      {/* Logo */}
      <View style={styles.logoContainer}>
        {/* <Image source={require('./path/to/logo.png')} /> */}
        <Text style={styles.logoText}>TripFinder</Text>
      </View>

      {/* Navigation Links */}
      <View style={styles.navigationLinks}>
        <TouchableOpacity onPress={() => handlePress('Hotels')}>
          <Text style={[styles.navigationLink, pressedText === 'Hotels' && { color: '#26AAA0' }]}>
            Hotels
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Listing')}>
          <Text style={[styles.navigationLink, pressedText === 'Listing' && { color: '#26AAA0' }]}>
            Listing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Pricing')}>
          <Text style={[styles.navigationLink, pressedText === 'Pricing' && { color: '#26AAA0' }]}>
            Pricing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Privacy')}>
          <Text style={[styles.navigationLink, pressedText === 'Privacy' && { color: '#26AAA0' }]}>
            Privacy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Agent')}>
          <Text style={[styles.navigationLink, pressedText === 'Agent' && { color: '#26AAA0' }]}>
            Agent
          </Text>
        </TouchableOpacity>
      </View>

      {/* Copyright Text */}
      <Text style={styles.copyrightText}>Copyright © 2024 RedQ, Inc.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginBottom: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#26AAA0',
  },
  navigationLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  navigationLink: {
    marginRight: 10,
    color: 'black', // Default text color
  },
  copyrightText: {
    textAlign: 'center',
    color:'gray',
    marginTop: 20,
  },
});

export default Footer;
