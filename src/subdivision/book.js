import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const Book = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleBookPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>$253.00/NIGHT</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleBookPress} style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.boldText}>$253.00/NIGHT</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.bookButton1}>
                <Text style={styles.bookButtonText}>Book</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.bookButton2}>
                <Text style={styles.bookButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 80,
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 18,
  },
  buttonContainer: {
    marginLeft: 10,
  },
  bookButton: {
    alignItems: 'center',
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
  },
  bookButtonText: {
    marginTop: 5,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  bookButton1: {
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
    marginRight: 10,
  },
  bookButton2: {
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: '#26AAA0',
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    height: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Book;
