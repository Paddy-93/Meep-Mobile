import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import JobListScreen from "./screens/JobListScreen";
import CreateJobScreen from "./screens/CreateJobScreen";
import "nativewind"; // required for className to work
import "./global.css";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={JobListScreen} />
        <Stack.Screen
          name="CreateJob"
          component={CreateJobScreen}
          options={{ title: "Post Job" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
