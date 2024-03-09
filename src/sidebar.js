import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Sidebar = ({ onClose }) => {
    const handleLogout = () => {
        // Thực hiện logout logic ở đây
        onClose(); // Đóng sidebar sau khi thực hiện logout
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={30} color="#26AAA0" />
            </TouchableOpacity>
            <Text style={styles.item}>Menu Item 1</Text>
            <Text style={styles.item}>Menu Item 2</Text>
            <TouchableOpacity style={styles.item} onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    item: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});

export default Sidebar;
