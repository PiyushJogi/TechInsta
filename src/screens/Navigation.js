import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import NewPostScreen from './NewPostScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const Stack = createStackNavigator();
const screenOptions = {
    headerShown:false,
}


const SignedInStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
              initialRouteName='LoginScreen'
              screenOptions={screenOptions}   
        >
           <Stack.Screen name= 'HomeScreen' component = {HomeScreen} />
           <Stack.Screen name= 'NewPostScreen' component = {NewPostScreen} />
           <Stack.Screen name= 'LoginScreen' component = {LoginScreen} />
           <Stack.Screen name= 'SignupScreen' component = {SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default SignedInStack