import React from "react";
import { View, Text, FlatList } from "react-native";
import "nativewind"; // required for className to work
import "./global.css";
import JobListScreen from "./screens/JobListScreen";

const jobs = [
  { id: "1", pickup: "Downtown", dropoff: "Airport", fare: "$35" },
  { id: "2", pickup: "Hotel Plaza", dropoff: "Central Park", fare: "$20" },
  { id: "3", pickup: "Trfin Station", dropoff: "Museum", fare: "$15" },
];

export default function App() {
  return (
    <View className="flex-1 bg-white pt-16 px-4">
      <JobListScreen />
    </View>
  );
}
