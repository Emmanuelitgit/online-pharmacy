import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from '../Screens/Home/Home';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import OnBoarding from '../Screens/Home/OnBoarding';
import Products from "../Screens/Product/Products";
import Product from "../Screens/Product/Product";
import CartScreen from "../Screens/Product/CartScreen";
import DeliveryInfo from "../Screens/Product/DeliveryInfo";
import PaymentMethod from "../Screens/Payment/PaymentMethod";
import PaymentSuccess from "../Screens/Payment/PaymentSuccess";
import TrackProduct from "../Screens/Product/TrackProduct";
import Profile from "../Screens/Auth/Profile";
import OTP from '../Screens/Auth/OTP';

const Navigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='onboard'
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='onboard' component={OnBoarding}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Products' component={Products} />
            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='DeliveryInfo' component={DeliveryInfo} />
            <Stack.Screen name='PaymentMethod' component={PaymentMethod} />
            <Stack.Screen name='PaymentSuccess' component={PaymentSuccess} />
            <Stack.Screen name='TrackProduct' component={TrackProduct} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='OTP' component={OTP} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation