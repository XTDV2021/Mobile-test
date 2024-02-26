import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/login';
import HomeScreen from './src/home';
import RegisterScreen from './src/register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SubdivisionScreen from './src/subdivision/subdivisionScreen';
import Location from './src/Location';
import ProductListingScreen from './src/card';
import {
	Text,
	View,
	TouchableOpacity,
} from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Sidebar = ({ navigation }) => {
	const [isPressed, setIsPressed] = useState(false);

	return (
		<View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
			{/* Thêm các mục trong sidebar */}
			<TouchableOpacity
				onPress={() => navigation.navigate('HomeDrawer')}
				style={{ marginBottom: 20, marginTop: 50 }}
			>
				<Text style={{ fontSize: 20, color: isPressed ? '#26AAA0' : '#000' }}>Home</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity
				onPress={() => {
					navigation.navigate('Login');
					setIsPressed(true);
				}}
				style={{ marginBottom: 20 }}
			>
				<Text style={{ fontSize: 20, color: isPressed ? '#26AAA0' : '#000' }}>Login</Text>
			</TouchableOpacity> */}
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Login');
					setIsPressed(true);
				}}
				style={{ marginTop: 550 }}
			>
				<Text style={{ fontSize: 20, color: isPressed ? '#26AAA0' : '#000' }}>Logout</Text>
			</TouchableOpacity>
		</View>
	);
};

function AuthStackNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
			<Stack.Screen name="Subdivision" component={SubdivisionScreen} />
			<Stack.Screen name="Location" component={Location} />
			<Stack.Screen name="product" component={ProductListingScreen} />
			<Stack.Screen name="/" component={HomeScreen} />
		</Stack.Navigator>
	);
}
function HomeDrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerLeft: () => null,
				drawerPosition: 'right',
				headerShown: true
			}}

			drawerContent={(props) => <Sidebar {...props} />} // Truyền props vào Sidebar
		>
			<Drawer.Screen
				name="TheLuxuryCity"
				component={HomeScreen}
				options={{
					headerTitleStyle: {
						color: '#26AAA0',
						marginLeft: 12,
					}
				}}
			/>
		</Drawer.Navigator>

	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Auth" component={AuthStackNavigator} />
				<Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
