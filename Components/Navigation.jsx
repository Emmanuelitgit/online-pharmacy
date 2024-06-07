import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Home from '../Screens/Home/Home';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import OnBoarding from '../Screens/Home/OnBoarding';


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
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation