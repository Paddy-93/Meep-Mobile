import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { fetchJobs } from "../api/jobs"; // adjust path\
import "nativewind"; // required for className to work

type Job = {
  id: number;
  pickup_location: string;
  dropoff_location: string;
  fare: number;
};

export default function JobListScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    console.log;
    ("efffects jobs from API...");
    fetchJobs()
      .then((data: Job[]) => setJobs(data))
      .catch(console.error);
  }, []);

  return (
    <View className="flex-1 bg-white pt-16 px-4">
      <Text className="text-2xl font-bold mb-6">Surplus Jobs</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-gray-100 rounded-lg p-4 mb-4">
            <Text className="text-base font-medium">
              Pickup: {item.pickup_location}
            </Text>
            <Text className="text-base">Dropoff: {item.dropoff_location}</Text>
            <Text className="text-green-600 font-semibold">
              Fare: {item.fare}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
