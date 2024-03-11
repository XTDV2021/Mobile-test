import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Book = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const navigation = useNavigation();

  const calculatePrice = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return 253 + diffDays * 100;
    }
    return 253;
  };

  const handlePress = () => {
    if (startDate && endDate) {
      navigation.navigate('Contract');
    } else {
      Alert.alert('Thông báo', 'Vui lòng chọn ngày bắt đầu và ngày kết thúc.');
    }
  };

  const handleStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const handleEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  const handleBookPress = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>{`TOTAL: $${calculatePrice()}`}</Text>
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
            <Text style={styles.boldText}>{`TOTAL: $${calculatePrice()}`}</Text>
            <Text style={styles.timeTest}>Active(2024-02-24 - 2024-02-28)</Text>
            <View style={styles.dateRangeContainer}>
              <View style={styles.dateInput}>
                <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
                  <Icon style={styles.icon} name="calendar" size={20} color="#666" /><Text>StartDate</Text>
                  <View style={styles.dashContainer1}>
                    <View style={styles.dash1}></View>
                  </View>
                  <Text style={styles.date}>{startDate ? startDate.toDateString() : 'Select Start Date'}</Text>
                </TouchableOpacity>
                {showStartDatePicker && (
                  <DateTimePicker
                    value={startDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={handleStartDateChange}
                  />
                )}
              </View>

              <View style={styles.dashContainer}>
                <View style={styles.dash}></View>
              </View>

              <View style={styles.dateInput}>
                <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
                  <Icon style={styles.icon} name="calendar" size={20} color="#666" /><Text>EndDate</Text>
                  <View style={styles.dashContainer1}>
                    <View style={styles.dash1}></View>
                  </View>
                  <Text style={styles.date} >{endDate ? endDate.toDateString() : 'Select End Date'}</Text>
                </TouchableOpacity>
                {showEndDatePicker && (
                  <DateTimePicker
                    value={endDate || new Date()}
                    mode="date"
                    display="default"
                    onChange={handleEndDateChange}
                  />
                )}
              </View>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.bookButton1} onPress={handlePress}>
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
  timeTest: {
    color: 'red',
    fontSize: 13,
    marginTop: 20,
    marginLeft: -10,

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
  dashContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginLeft: 20,
  },

  dash: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 20, // Độ dài của dấu gạch ngang
  },
  dashContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  dash1: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    width: 100,
    marginTop: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -150,
  },
  dateRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,

  },
  dateInput: {
    flex: 1,
    flexDirection: 'row', // Sắp xếp các phần tử con theo hàng ngang
    alignItems: 'center', // Căn chỉnh các phần tử con theo chiều dọc
    backgroundColor: '#f0f0f0', // Màu xám nhạt
    borderRadius: 5, // Border radius
    padding: 10, // Padding
    height: 100,
  },
  date: {
    marginTop: 10,
  },
  icon: {
    marginTop: -5,
  }
});

export default Book;
