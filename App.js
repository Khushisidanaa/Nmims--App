import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './screens/LandingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/SignUp';
import StudentLandingScreen from './screens/StudentLandingScreen';


export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'custom-font': require('./assets/fonts/Raleway-Black.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  // if (!fontsLoaded) {
  //   return null; // or a loading screen
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component ={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="StudentLandingScreen" component ={StudentLandingScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}