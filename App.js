import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/login";
import HomeScreen from "./src/home";

import ProfileScreen from "./src/profile";
import SubdivisionScreen from "./src/subdivision/orderScreen";
import Location from "./src/Location";
import ProductListingScreen from "./src/subdivison";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostScreen from "./src/postcard";
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import HistoryScreen from "./src/History";
import ProductScreen from "./src/villas";
import ForgetPasswordScreen from "./src/SignUp/forgotPassword";
import ChangePasswordScreen from "./src/SignUp/cofirmPassword";
import VerifyScreen from "./src/SignUp/verify";
import ProjectScreen from "./src/Project";
import ContractScreen from "./src/contract";
import OrderSucess from "./src/OrderSuccess";
import RegisterScreen from "./src/SignUp/register";




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Order" component={SubdivisionScreen} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Contract" component={ContractScreen} />
      <Stack.Screen name="BookSuccess" component={OrderSucess} />
      <Stack.Screen name="product" component={ProductListingScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="Villa" component={ProductScreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
      <Stack.Screen name="ConfirmPassword" component={ChangePasswordScreen} />
      <Stack.Screen name="Otp" component={VerifyScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Post') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        } else if (route.name === 'History') {
          iconName = focused ? 'time' : 'time-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'people' : 'people-outline';
        }

        // Trả về component Icon từ thư viện Ionicons
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#26AAA0',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="History" component={HistoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
        <Stack.Screen name="HomeDrawer" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
