import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OrderSucess() {

    const heartRef = useRef(null);
    const giftRef = useRef(null);
    const [liked, setLiked] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
        heartRef?.current?.play(0, 30);
        giftRef?.current?.play(0, 1)
    }, []);

    const handleLike = () => {
        if (liked) {
            heartRef?.current?.reset();
        } else {
            heartRef?.current?.play(30, 144);
        }

        setLiked(!liked);

    }
    const openGift = () => {
        giftRef?.current?.play(1, 240);

    }
    const Confirm = () => {
        navigation.navigate('product');
      };
    return (
        <View style={styles.container}>

            <View style={styles.welcome}>
                <LottieView style={{ flex: 1 }} source={require('../assets/Animation - 1709566233959.json')} autoPlay loop />
            </View>
            <Text style={styles.text}>BookSucess!</Text>
            <StatusBar style="auto" />
            <TouchableOpacity onPress={Confirm} style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 100
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    welcome: {
        height: 200,
        aspectRatio: 1,
    },
    icon: {
        height: 100,
        aspectRatio: 1,
    },
    text: {
        fontSize: 40,
    },
    saveButton: {
        backgroundColor: '#26AAA0',
        padding: 10,
        borderRadius: 5,
        alignItems:'center',
        marginTop: 50,
        width: 150,
      },
      saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
});