import React from 'react';
import {View,Text} from 'react-native';

const DummyText = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Overview</Text>
    <Text style={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
      semper turpis. Ut in fringilla nisl, sit amet aliquet urna. Donec
      sollicitudin libero sapien, ut accumsan justo venenatis et. Proin iaculis
      ac dolor eget malesuada. Cras commodo, diam id semper sodales, tortor leo
      suscipit leo, vitae dignissim velit turpis et diam. Proin tincidunt
      euismod elit, at porttitor justo maximus vel. Proin viverra, nibh non
      accumsan sollicitudin, arcu metus sagittis nunc, et tempor tellus ligula
      et justo. Pellentesque ultrices fermentum efficitur. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Praesent nec convallis nisl, et rhoncus
      mauris. Morbi consequat sem tellus, in scelerisque lorem vehicula ut.
    </Text>
    </View>
  );
};

const styles = {
  text: {
    marginTop: -5,
    margin: 24,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
};

export default DummyText;