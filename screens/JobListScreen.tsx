import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { fetchJobs } from "../api/jobs";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { JobListScreenNavigationProp } from "../types/navigation";
import "nativewind";

type Job = {
  id: number;
  pickup_location: string;
  dropoff_location: string;
  fare: number;
};

export default function JobListScreen() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigation = useNavigation<JobListScreenNavigationProp>();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchJobs()
        .then((data: Job[]) => setJobs(data))
        .catch(console.error);
    }
  }, [isFocused]);

  return (
    <View className="flex-1 bg-white pt-16 px-4">
      <Text className="text-2xl font-bold mb-6">Surplus Jobs</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateJob")}
        className="bg-blue-600 px-4 py-3 rounded-md mb-4"
      >
        <Text className="text-white text-center font-bold">Post a Job</Text>
      </TouchableOpacity>

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
