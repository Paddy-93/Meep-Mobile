// App.tsx

import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import JobListScreen from './screens/JobListScreen';
import CreateJobScreen from './screens/CreateJobScreen';
import RegisterScreen from './screens/RegisterScreen';
import VerifyInstructionsScreen from './screens/VerifyInstructionsScreen';
import LoginScreen from './screens/LoginScreen';

// NativeWind & global styles
import "nativewind"; // Enables Tailwind-style `className` usage in React Native
import "./global.css"; // Global stylesheet (affects styles app-wide)

// Create a native stack navigator
const Stack = createNativeStackNavigator();

/**
 * App root component
 * 
 * Wraps the app in:
 * - GestureHandlerRootView: Required by `react-native-gesture-handler`
 * - NavigationContainer: Provides navigation context
 * 
 * Screens:
 * - Register
 * - Login
 * - Verify Email Instructions
 * - Jobs listing
 * - Job creation
 */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Create Account' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Log In' }}
          />
          <Stack.Screen
            name="VerifyInstructions"
            component={VerifyInstructionsScreen}
            options={{ title: 'Verify Your Email' }}
          />
          <Stack.Screen
            name="Jobs"
            component={JobListScreen}
          />
          <Stack.Screen
            name="CreateJob"
            component={CreateJobScreen}
            options={{ title: "Post Job" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
