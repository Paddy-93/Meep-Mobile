import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { API_URL } from "@env";
import axios from "axios";

export default function CreateJobScreen() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [fare, setFare] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_URL}/jobs/`, {
        pickup_location: pickup,
        dropoff_location: dropoff,
        fare,
      });

      Alert.alert("Success", "Job posted successfully");
      setPickup("");
      setDropoff("");
      setFare("");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to post job");
    }
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-lg font-bold mb-2">Pickup Location</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
        value={pickup}
        onChangeText={setPickup}
        placeholder="Enter pickup"
      />

      <Text className="text-lg font-bold mb-2">Dropoff Location</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-3 py-2 mb-4"
        value={dropoff}
        onChangeText={setDropoff}
        placeholder="Enter dropoff"
      />

      <Text className="text-lg font-bold mb-2">Fare</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-3 py-2 mb-6"
        value={fare}
        onChangeText={setFare}
        keyboardType="numeric"
        placeholder="Enter fare"
      />

      <TouchableOpacity
        onPress={handleSubmit}
        className="bg-blue-600 py-3 rounded-md"
      >
        <Text className="text-white text-center font-semibold">Post Job</Text>
      </TouchableOpacity>
    </View>
  );
}
